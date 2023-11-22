import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { Access, PageProps, User } from "@/types";
import Layout from "@/Layouts/Layout";
import { t } from "i18next";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import Breadcrumbs from "@/Components/Breadcrumbs";
import Button from "@/Components/Button";
import ButtonGroup, { ButtonGroupItem } from "@/Components/ButtonGroup";
import Modal from "@/Components/Modal";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const Index = ({ auth, access }: PageProps<{ access: Access[] }>) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [accessToDelete, setAccessToDelete] = useState<number | null>(null);

  const openModal = (id: number) => {
    setAccessToDelete(id);
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setAccessToDelete(null);
    setShowDeleteModal(false);
  };

  const deleteAccess = () => {
    router.delete(`/acessos/${accessToDelete}`);
    closeModal();
  };

  return (
    <Layout user={auth.user} currentLink="access">
      <Head title={t("Access")} />

      <div className="pb-16">
        <div className="container mx-auto">
          <Breadcrumbs currentRoute={t("Access")} />

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">{t("Access")}</div>

              <Link href={route("access.create")}>
                <Button>{t("Add access")}</Button>
              </Link>
            </div>

            <div className="mt-8">
              {access.length === 0 && (
                <div className="w-full rounded-md bg-red-50 p-4 text-sm font-medium text-red-800">
                  {t("No access found")}
                </div>
              )}
              {access.length > 0 && (
                <table className="w-full">
                  <thead className="border-b-2 border-gray-200 text-left text-sm font-semibold">
                    <tr>
                      <th className="py-4 pr-3">{t("Sample")}</th>
                      <th className="px-3 py-4">{t("Species and variety")}</th>
                      <th className="px-3 py-4">{t("Color")}</th>
                      <th className="px-3 py-4">{t("Generation")}</th>
                      <th className="px-3 py-4">{t("Producer name")}</th>
                      <th className="px-3 py-4">{t("Location")}</th>
                      <th className="px-3 py-4">{t("Collection date")}</th>
                      <th className="py-4 pl-3">{t("Actions")}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {access.map((access) => (
                      <tr className="border-t border-gray-200" key={access.id}>
                        <td className="py-4 pr-3 font-medium">{access.sample}</td>
                        <td className="px-3 py-4 text-gray-500">
                          <div>{access.species}</div>
                          <div>{access.variety}</div>
                        </td>
                        <td className="px-3 py-4 text-gray-500">{access.color}</td>
                        <td className="px-3 py-4 text-gray-500">{access.generation}</td>
                        <td className="px-3 py-4 text-gray-500">{access.producer_name}</td>
                        <td className="px-3 py-4 text-gray-500">{access.location}</td>
                        <td className="px-3 py-4 text-gray-500">{access.collection_date}</td>
                        <td className="py-4 pl-3">
                          <ButtonGroup>
                            <Link href={route("access.edit", access.id)}>
                              <ButtonGroupItem label={t("Edit")}>
                                <PencilSquareIcon className="h-5 w-5 text-blue-600" />
                              </ButtonGroupItem>
                            </Link>

                            <ButtonGroupItem label={t("Delete")} onClick={() => openModal(access.id)}>
                              <TrashIcon className="h-5 w-5 text-blue-600" />
                            </ButtonGroupItem>
                          </ButtonGroup>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal show={showDeleteModal} onClose={closeModal} maxWidth="lg">
        <div className="p-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-50 flex-shrink-0">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">{t("Delete access")}</h2>

              <p className="text-gray-600">{t("Are you sure you want to delete this access?")}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <Button color="white" onClick={closeModal}>
              {t("Cancel")}
            </Button>

            <Button color="danger" onClick={deleteAccess}>
              {t("Delete")}
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Index;
