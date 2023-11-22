import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { PageProps, User } from "@/types";
import Layout from "@/Layouts/Layout";
import { t } from "i18next";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import Breadcrumbs from "@/Components/Breadcrumbs";
import Button from "@/Components/Button";
import ButtonGroup, { ButtonGroupItem } from "@/Components/ButtonGroup";
import Modal from "@/Components/Modal";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const Index = ({ auth, users }: PageProps<{ users: User[] }>) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);

  const openModal = (id: number) => {
    setUserToDelete(id);
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setUserToDelete(null);
    setShowDeleteModal(false);
  };

  const deleteUser = () => {
    router.delete(`/usuarios/${userToDelete}`);
    closeModal();
  };

  return (
    <Layout user={auth.user} currentLink="users">
      <Head title={t("Users")} />

      <div className="pb-16">
        <div className="container mx-auto">
          <Breadcrumbs currentRoute={t("Users")} />

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">{t("Users")}</div>

              <Link href={route("users.create")}>
                <Button>{t("Add user")}</Button>
              </Link>
            </div>

            <div className="mt-8">
              {users.length === 0 && (
                <div className="w-full rounded-md bg-red-50 p-4 text-sm font-medium text-red-800">
                  {t("No users found")}
                </div>
              )}
              {users.length > 0 && (
                <table className="w-full">
                  <thead className="border-b-2 border-gray-200 text-left text-sm font-semibold">
                    <tr>
                      <th className="py-4 pr-3">{t("Name")}</th>
                      <th className="px-3 py-4">{t("Email")}</th>
                      <th className="px-3 py-4">{t("Location")}</th>
                      <th className="px-3 py-4">{t("Workspace")}</th>
                      <th className="py-4 pl-3">{t("Actions")}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {users.map((user) => (
                      <tr className="border-t border-gray-200" key={user.id}>
                        <td className="py-4 pr-3 font-medium">{user.name}</td>
                        <td className="px-3 py-4 text-gray-500">
                          {user.email}
                        </td>
                        <td className="px-3 py-4 text-gray-500">
                          <div>
                            {user.city} - {user.state}
                          </div>
                          <div>{user.country}</div>
                        </td>
                        <td className="px-3 py-4 text-gray-500">
                          {user.location}
                        </td>
                        <td className="py-4 pl-3">
                          <ButtonGroup>
                            <Link href={route("users.edit", user.id)}>
                              <ButtonGroupItem label={t("Edit")}>
                                <PencilSquareIcon className="h-5 w-5 text-blue-600" />
                              </ButtonGroupItem>
                            </Link>

                            <ButtonGroupItem
                              label={t("Delete")}
                              onClick={() => openModal(user.id)}
                            >
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
              <h2 className="font-semibold">{t("Delete user")}</h2>

              <p className="text-gray-600">
                {t("Are you sure you want to delete this user?")}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <Button color="white" onClick={closeModal}>
              {t("Cancel")}
            </Button>

            <Button color="danger" onClick={deleteUser}>
              {t("Delete")}
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Index;
