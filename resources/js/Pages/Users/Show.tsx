import { Head } from "@inertiajs/react";
import { IProtectedPageProps, IUser } from "@/types";
import Layout from "@/Layouts/Layout";
import FormField from "@/Components/FormField";

import { useTranslation } from "react-i18next";

const Show = ({ auth, user, parentUsers }: IProtectedPageProps<{ user: IUser; parentUsers: IUser[] }>) => {
  const { t } = useTranslation();

  return (
    <Layout user={auth.user} currentLink="users">
      <Head title={t("View user")} />
      <div className="pb-16">
        <div className="container mx-auto">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex">
              <div className="w-1/3">
                <div className="font-semibold">{t("Informations")}</div>
              </div>
              <div className="flex w-2/3 flex-col gap-8">
                <FormField label={t("Full name")}>
                  <div>{user.name ?? "-"}</div>
                </FormField>

                <FormField label={t("Email")}>
                  <div>{user.email ?? "-"}</div>
                </FormField>

                <div className="grid grid-cols-3 gap-6">
                  <FormField label={t("City")}>
                    <div>{user.city ?? "-"}</div>
                  </FormField>
                  <FormField label={t("State")}>
                    <div>{user.state ?? "-"}</div>
                  </FormField>
                  <FormField label={t("Country")}>
                    <div>{user.country ?? "-"}</div>
                  </FormField>
                </div>

                <FormField label={t("Workspace")}>
                  <div>{user.location ?? "-"}</div>
                </FormField>

                {auth.user?.role === "Admin" && (
                  <FormField label={t("Role")}>
                    <div>{t(user.role)}</div>
                  </FormField>
                )}

                {auth.user?.role === "Admin" && user.role === "Student" && (
                  <FormField label={t("Who this student belongs to?")}>
                    <div>{parentUsers.find((parentUser) => parentUser.id === user.parent_id)?.name}</div>
                  </FormField>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Show;
