import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import { t } from "i18next";
import Breadcrumbs from "@/Components/Breadcrumbs";
import Input from "@/Components/Input";
import Textarea from "@/Components/Textarea";
import Button from "@/Components/Button";

const Contact = ({ auth }: PageProps) => {
  return (
    <Layout user={auth.user} currentLink="contact">
      <Head title={t("Contact")} />

      <div className="container mx-auto pb-16">
        <div className="mx-auto w-2/3">
          <Breadcrumbs currentRoute={t("Contact")} />

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="font-semibold text-xl">{t("Contact us")}</div>

            <div className="flex flex-col mt-12">
              <div className="flex border-b border-gray-200 pb-8">
                <div className="w-1/3">
                  <label className="text-sm block font-medium">{t("Name")}</label>
                </div>
                <div className="w-2/3">
                  <Input />
                </div>
              </div>

              <div className="flex border-b border-gray-200 py-8">
                <div className="w-1/3">
                  <label className="text-sm block font-medium">{t("Email")}</label>
                </div>
                <div className="w-2/3">
                  <Input />
                </div>
              </div>

              <div className="flex border-b border-gray-200 py-8">
                <div className="w-1/3">
                  <label className="text-sm block font-medium">{t("CPF")}</label>
                </div>
                <div className="w-2/3">
                  <Input />
                </div>
              </div>

              <div className="flex border-b border-gray-200 py-8">
                <div className="w-1/3">
                  <label className="text-sm block font-medium">{t("Phone")}</label>
                </div>
                <div className="w-2/3">
                  <Input />
                </div>
              </div>

              <div className="flex border-b border-gray-200 py-8">
                <div className="w-1/3">
                  <label className="text-sm block font-medium">{t("Address")}</label>
                </div>
                <div className="w-2/3">
                  <Input />
                </div>
              </div>

              <div className="flex border-b border-gray-200 py-8">
                <div className="w-1/3">
                  <label className="text-sm block font-medium">{t("Institution")}</label>
                </div>
                <div className="w-2/3">
                  <Input />
                </div>
              </div>

              <div className="flex border-b border-gray-200 py-8">
                <div className="w-1/3">
                  <label className="text-sm block font-medium">{t("Subject")}</label>
                </div>
                <div className="w-2/3">
                  <Textarea rows={10} />
                </div>
              </div>

              <div className="flex justify-end pt-8 gap-6">
                <Button size="lg">{t("Send")}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
