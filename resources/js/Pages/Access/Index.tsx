import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { IAccess, IPaginatedData, IProtectedPageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import { useTranslation } from "react-i18next";

import Button from "@/Components/Button";
import ButtonGroup, { ButtonGroupItem } from "@/Components/ButtonGroup";
import Modal from "@/Components/Modal";
import {
  ExclamationTriangleIcon,
  FolderPlusIcon,
  XCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { FunnelIcon, ChevronDownIcon, ChevronUpDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import Input from "@/Components/Input";
import Pagination from "@/Components/Pagination";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import Report from "./Report";
import axios from "axios";
import { saveAs } from "file-saver";
import ReportAll from "./ReportAll";

const Index = ({
  auth,
  access,
  currentSort,
  currentOrder,
  currentFilters,
}: IProtectedPageProps<{
  access: IPaginatedData<IAccess[]>;
  currentSort: string;
  currentOrder: "asc" | "desc" | "";
  currentFilters: { [key: string]: string };
}>) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState(currentFilters);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAccessId, setSelectedAccessId] = useState<number | null>(null);

  const handleFilterChange = (e: any) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value ? value : null,
    }));
  };

  const handleApplyFilters = () => {
    router.get(route("access.index", { ...currentFilters, ...filters }));
  };

  const handleResetFilters = () => {
    router.get(route("access.index"));
  };

  const handleSort = (sort: string) => {
    let order = "asc";

    if (sort === currentSort) {
      order = currentOrder === "asc" ? "desc" : "";
    }

    const sortParams = order ? { sort, order } : {};

    router.get(route("access.index", sortParams));
  };

  const renderSortIcon = (sort: string) => {
    if (sort === currentSort) {
      return currentOrder === "asc" ? <ChevronUpIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />;
    }

    return <ChevronUpDownIcon className="h-6 w-6" />;
  };

  const handleDelete = (id: number) => {
    setSelectedAccessId(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    router.delete(route("access.delete", { id: selectedAccessId }));
    setShowDeleteModal(false);
    setSelectedAccessId(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedAccessId(null);
  };

  const handleReport = async (id: number) => {
    axios.get(`/acessos/${id}/json`).then(async (res) => {
      const blob = await pdf(
        <Report
          access={res.data.access}
          seedlingPhase={res.data.seedlingPhase}
          vegetativePhase={res.data.vegetativePhase}
          reproductivePhase={res.data.reproductivePhase}
          images={res.data.images}
        />,
      ).toBlob();
      saveAs(blob, `${t("Access report")}_${res.data.access.sample}_${Date.now()}.pdf`);
    });
  };

  const handleVisibility = (id: number) => {
    router.put(route("access.update_visibility", { id }));
  };

  const renderVisibilityButton = (access: IAccess): boolean => {
    if (auth.user.role === "Student" && access.created_by.id === auth.user.id) {
      return true;
    }

    if ((auth.user.role === "Teacher" || auth.user.role === "Researcher") && access.owner.id === auth.user.id) {
      return true;
    }

    if (auth.user.role === "Admin") {
      return true;
    }

    return false;
  };

  return (
    <Layout user={auth.user} currentLink="access">
      <Head title={t("Access")} />

      <div className="pb-16">
        <div className="container mx-auto">
          <div className="rounded-lg bg-white px-6 py-4 shadow">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="text-lg font-semibold">{t("Access")}</div>

              <div className="mt-0 flex items-center gap-6">
                <Button color="secondary">
                  <PDFDownloadLink
                    document={<ReportAll access={access.data} />}
                    fileName={`${t("Access report")}_${Date.now()}.pdf`}
                  >
                    {t("Download report")}
                  </PDFDownloadLink>
                </Button>

                <Link href={route("access.create")}>
                  <Button>{t("Add access")}</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg bg-white shadow">
            {access.total === 0 && Object.values(filters).every((value) => value === "") ? (
              <div className="flex flex-col items-center px-6 py-12">
                <FolderPlusIcon className="h-12 w-12 text-slate-600" />
                <div className="mt-4 text-sm font-medium">{t("No access found")}</div>
                <div className="text-sm text-slate-600">{t("Create a new access")}</div>
                <div className="mt-4">
                  <Link href={route("access.create")}>
                    <Button size="sm">{t("Add access")}</Button>
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <table className="block w-full overflow-x-scroll xl:table">
                  <thead className="border-b-2 border-slate-200 bg-white text-left text-xs font-medium uppercase tracking-wide text-slate-400">
                    <tr>
                      <th>
                        <button
                          type="button"
                          onClick={() => handleSort("sample")}
                          className="flex w-full items-center justify-between px-6 py-4 uppercase"
                        >
                          <div>{t("Sample")}</div>
                          {renderSortIcon("sample")}
                        </button>
                      </th>
                      <th>
                        <button
                          type="button"
                          onClick={() => handleSort("species")}
                          className="flex w-full items-center justify-between px-6 py-4 uppercase"
                        >
                          <div>{t("Species")}</div>
                          {renderSortIcon("species")}
                        </button>
                      </th>
                      <th>
                        <button
                          type="button"
                          onClick={() => handleSort("variety")}
                          className="flex w-full items-center justify-between px-6 py-4 uppercase"
                        >
                          <div>{t("Variety")}</div>
                          {renderSortIcon("variety")}
                        </button>
                      </th>
                      <th>
                        <button
                          type="button"
                          onClick={() => handleSort("color")}
                          className="flex w-full items-center justify-between px-6 py-4 uppercase"
                        >
                          <div>{t("Color")}</div>
                          {renderSortIcon("color")}
                        </button>
                      </th>
                      <th>
                        <button
                          type="button"
                          onClick={() => handleSort("location")}
                          className="flex w-full items-center justify-between px-6 py-4 uppercase"
                        >
                          <div>{t("Location")}</div>
                          {renderSortIcon("location")}
                        </button>
                      </th>
                      <th className="px-6 py-4">{t("Created by")}</th>
                      <th className="px-6 py-4 text-right">{t("Actions")}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="px-6 py-4">
                        <Input
                          inputSize="sm"
                          name="sample"
                          value={filters.sample || ""}
                          onChange={handleFilterChange}
                          placeholder={t("Filter by sample")}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <Input
                          inputSize="sm"
                          name="species"
                          value={filters.species || ""}
                          onChange={handleFilterChange}
                          placeholder={t("Filter by species")}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <Input
                          inputSize="sm"
                          name="variety"
                          value={filters.variety || ""}
                          onChange={handleFilterChange}
                          placeholder={t("Filter by variety")}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <Input
                          inputSize="sm"
                          name="color"
                          value={filters.color || ""}
                          onChange={handleFilterChange}
                          placeholder={t("Filter by color")}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <Input
                          inputSize="sm"
                          name="location"
                          value={filters.location || ""}
                          onChange={handleFilterChange}
                          placeholder={t("Filter by location")}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <Input
                          inputSize="sm"
                          name="created_by"
                          value={filters.created_by || ""}
                          onChange={handleFilterChange}
                          placeholder={t("Filter by created by")}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-4">
                          <ButtonGroup>
                            <ButtonGroupItem label={t("Clean filters")} onClick={handleResetFilters}>
                              <XCircleIcon className="h-5 w-5 text-slate-900" />
                            </ButtonGroupItem>
                            <ButtonGroupItem onClick={handleApplyFilters}>
                              <div className="mr-2">{t("Filter")}</div>
                              <FunnelIcon className="h-4 w-4 text-slate-900" />
                            </ButtonGroupItem>
                          </ButtonGroup>
                        </div>
                      </td>
                    </tr>
                    {access.data.map((access) => (
                      <tr className="border-t border-slate-200 bg-white" key={access.id}>
                        <td className="px-6 py-4 font-medium">{access.sample}</td>
                        <td className="px-6 py-4 text-slate-500">{access.species}</td>
                        <td className="px-6 py-4 text-slate-500">{access.variety}</td>
                        <td className="px-6 py-4 text-slate-500">{access.color}</td>
                        <td className="px-6 py-4 text-slate-500">{access.location}</td>
                        <td className="px-6 py-4 text-slate-500">{access.created_by.name}</td>
                        <td className="px-4 py-4">
                          {renderVisibilityButton(access) && (
                            <ButtonGroup>
                              <Link href={route("access.show", access.id)}>
                                <ButtonGroupItem label={t("View")}>
                                  <MagnifyingGlassIcon className="h-5 w-5 text-blue-600" />
                                </ButtonGroupItem>
                              </Link>

                              <Link href={route("access.edit", access.id)}>
                                <ButtonGroupItem label={t("Edit")}>
                                  <PencilSquareIcon className="h-5 w-5 text-blue-600" />
                                </ButtonGroupItem>
                              </Link>

                              <ButtonGroupItem label={t("Delete")} onClick={() => handleDelete(access.id)}>
                                <TrashIcon className="h-5 w-5 text-blue-600" />
                              </ButtonGroupItem>

                              <ButtonGroupItem label={t("Download report")} onClick={() => handleReport(access.id)}>
                                <ArrowDownTrayIcon className="h-5 w-5 text-blue-600" />
                              </ButtonGroupItem>

                              {auth.user.role !== "Student" && (
                                <ButtonGroupItem
                                  label={access.public ? t("Make private") : t("Make public")}
                                  onClick={() => handleVisibility(access.id)}
                                >
                                  {access.public ? (
                                    <EyeIcon className="h-5 w-5 text-blue-600" />
                                  ) : (
                                    <EyeSlashIcon className="h-5 w-5 text-blue-600" />
                                  )}
                                </ButtonGroupItem>
                              )}
                            </ButtonGroup>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Pagination
                  from={access.from}
                  to={access.to}
                  total={access.total}
                  current_page={access.current_page}
                  last_page={access.last_page}
                  first_page_url={access.first_page_url}
                  prev_page_url={access.prev_page_url}
                  next_page_url={access.next_page_url}
                  last_page_url={access.last_page_url}
                />
              </>
            )}
          </div>
        </div>
      </div>

      <Modal show={showDeleteModal} onClose={handleCancelDelete} maxWidth="lg">
        <div className="p-6">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-50">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">{t("Delete access")}</h2>

              <p className="text-slate-600">{t("Are you sure you want to delete this access?")}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <Button color="white" onClick={handleCancelDelete}>
              {t("Cancel")}
            </Button>

            <Button color="danger" onClick={handleConfirmDelete}>
              {t("Delete")}
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Index;
