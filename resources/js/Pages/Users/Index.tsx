import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { IPaginatedData, IProtectedPageProps, IUser } from "@/types";
import Layout from "@/Layouts/Layout";
import { FunnelIcon, PlusIcon, ChevronDownIcon, ChevronUpDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

import Button from "@/Components/Button";
import ButtonGroup, { ButtonGroupItem } from "@/Components/ButtonGroup";
import Modal from "@/Components/Modal";
import {
  ExclamationTriangleIcon,
  UserPlusIcon,
  XCircleIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import Input from "@/Components/Input";
import Pagination from "@/Components/Pagination";
import Select from "@/Components/Select";
import { useTranslation } from "react-i18next";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Report from "./Report";
import ReportAll from "./ReportAll";

const Index = ({
  auth,
  users,
  currentSort,
  currentOrder,
  currentFilters,
}: IProtectedPageProps<{
  users: IPaginatedData<IUser[]>;
  currentSort: string;
  currentOrder: "asc" | "desc" | "";
  currentFilters: { [key: string]: string };
}>) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState(currentFilters);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const roles = ["Student", "Teacher", "Researcher", "Admin"];

  const handleFilterChange = (e: any) => {
    const { name, value } = e.target;
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [name]: value ? value : null,
    }));
  };

  const handleApplyFilters = () => {
    router.get(route("users.index", { ...currentFilters, ...filters }));
  };

  const handleResetFilters = () => {
    router.get(route("users.index"));
  };

  const handleSort = (sort: string) => {
    let order = "asc";

    if (sort === currentSort) {
      order = currentOrder === "asc" ? "desc" : "";
    }

    const sortParams = order ? { sort, order } : {};

    router.get(route("users.index", sortParams));
  };

  const renderSortIcon = (sort: string) => {
    if (sort === currentSort) {
      return currentOrder === "asc" ? <ChevronUpIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />;
    }

    return <ChevronUpDownIcon className="h-6 w-6" />;
  };

  const handleDelete = (id: number) => {
    setSelectedUserId(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    router.delete(route("users.delete", { id: selectedUserId }));
    setShowDeleteModal(false);
    setSelectedUserId(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedUserId(null);
  };

  return (
    <Layout user={auth.user} currentLink="users">
      <Head title={t("Users")} />

      <div className="pb-16">
        <div className="container mx-auto">
          <div className="rounded-lg bg-white px-4 py-4 shadow sm:px-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="text-lg font-semibold">{t("Users")}</div>

              <div className="mt-4 flex items-center gap-4 sm:mt-0 sm:gap-6">
                <Button color="secondary">
                  <PDFDownloadLink
                    document={<ReportAll users={users.data} />}
                    fileName={`${t("Users report")}_${Date.now()}.pdf`}
                  >
                    {t("Download report")}
                  </PDFDownloadLink>
                </Button>

                <Link href={route("users.create")}>
                  <Button>{t("Add user")}</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg bg-white shadow">
            {users.total === 0 && Object.values(filters).every((value) => value === "") ? (
              <div className="flex flex-col items-center px-6 py-12">
                <UserPlusIcon className="h-12 w-12 text-slate-600" />
                <div className="mt-4 text-sm font-medium">{t("No users found")}</div>
                <div className="text-sm text-slate-600">{t("Create a new user")}</div>
                <div className="mt-4">
                  <Link href={route("users.create")}>
                    <Button size="sm">{t("Add user")}</Button>
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <table className="block w-full overflow-x-scroll sm:table">
                  <thead className="border-b-2 border-slate-200 bg-white text-left text-xs font-medium uppercase tracking-wide text-slate-400">
                    <tr>
                      <th className="min-w-[200px]">
                        <button
                          type="button"
                          onClick={() => handleSort("name")}
                          className="flex w-full items-center justify-between px-6 py-4 uppercase"
                        >
                          <div>{t("Name")}</div>
                          {renderSortIcon("name")}
                        </button>
                      </th>
                      <th className="min-w-[200px]">
                        <button
                          type="button"
                          onClick={() => handleSort("email")}
                          className="flex w-full items-center justify-between px-6 py-4 uppercase"
                        >
                          <div>{t("Email")}</div>
                          {renderSortIcon("email")}
                        </button>
                      </th>
                      <th className="min-w-[200px]">
                        <button
                          type="button"
                          onClick={() => handleSort("location")}
                          className="flex w-full items-center justify-between px-6 py-4 uppercase"
                        >
                          <div>{t("Location")}</div>
                          {renderSortIcon("location")}
                        </button>
                      </th>
                      <th className="min-w-[200px] px-6 py-4">{t("Role")}</th>
                      <th className="min-w-[200px] px-6 py-4 text-right">{t("Actions")}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="px-6 py-4">
                        <Input
                          inputSize="sm"
                          name="name"
                          value={filters.name || ""}
                          onChange={handleFilterChange}
                          placeholder={t("Filter by name")}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <Input
                          inputSize="sm"
                          name="email"
                          value={filters.email || ""}
                          onChange={handleFilterChange}
                          placeholder={t("Filter by email")}
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
                        {auth.user.role === "Admin" && (
                          <Select
                            label={t(filters.role) || t("Filter by role")}
                            size="sm"
                            value={filters.role || ""}
                            onChange={(value) => {
                              handleFilterChange({ target: { name: "role", value } });
                            }}
                          >
                            {roles.map((role) => (
                              <Select.Option key={role} value={role} selected={filters.role === role}>
                                {t(role)}
                              </Select.Option>
                            ))}
                          </Select>
                        )}
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
                    {users.data.map((user) => (
                      <tr className="border-t border-slate-200 bg-white" key={user.id}>
                        <td className="px-6 py-4 font-medium">{user.name}</td>
                        <td className="px-6 py-4 text-slate-600">{user.email}</td>
                        <td className="px-6 py-4 text-slate-600">
                          <div>
                            {user.city} - {user.state}
                          </div>
                          <div>{user.country}</div>
                        </td>
                        <td className="px-6 py-4 text-slate-600">{t(user.role)}</td>
                        <td className="px-6 py-4 text-right">
                          <ButtonGroup>
                            <Link href={route("users.show", user.id)}>
                              <ButtonGroupItem label={t("View")}>
                                <MagnifyingGlassIcon className="h-5 w-5 text-blue-600" />
                              </ButtonGroupItem>
                            </Link>

                            <Link href={route("users.edit", user.id)}>
                              <ButtonGroupItem label={t("Edit")}>
                                <PencilSquareIcon className="h-5 w-5 text-blue-600" />
                              </ButtonGroupItem>
                            </Link>

                            <ButtonGroupItem label={t("Delete")} onClick={() => handleDelete(user.id)}>
                              <TrashIcon className="h-5 w-5 text-blue-600" />
                            </ButtonGroupItem>

                            <ButtonGroupItem label={t("Download report")}>
                              <PDFDownloadLink
                                document={<Report user={user} />}
                                fileName={`${t("User report")}_${user.name}_${Date.now()}.pdf`}
                              >
                                <ArrowDownTrayIcon className="h-5 w-5 text-blue-600" />
                              </PDFDownloadLink>
                            </ButtonGroupItem>
                          </ButtonGroup>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Pagination
                  from={users.from}
                  to={users.to}
                  total={users.total}
                  current_page={users.current_page}
                  last_page={users.last_page}
                  first_page_url={users.first_page_url}
                  prev_page_url={users.prev_page_url}
                  next_page_url={users.next_page_url}
                  last_page_url={users.last_page_url}
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
              <h2 className="font-semibold">{t("Delete user")}</h2>

              <p className="text-slate-600">{t("Are you sure you want to delete this user?")}</p>
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
