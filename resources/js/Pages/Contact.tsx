import { Head } from "@inertiajs/react";
import { IPageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import { useTranslation } from "react-i18next";

import Input from "@/Components/Input";
import Textarea from "@/Components/Textarea";
import Button from "@/Components/Button";

const Contact = ({ auth }: IPageProps) => {
  const { t } = useTranslation();

  return (
    <Layout user={auth.user} currentLink="contact">
      <Head title={t("Contact")} />

      <div className="container mx-auto pb-16">
        <div className="mx-auto w-2/3">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="text-xl font-semibold">{t("Contact us")}</div>

            <div className="mt-12 flex flex-col">
              <div className="flex border-b border-slate-200 pb-8">
                <div className="w-1/3">
                  <label className="block text-sm font-medium">{t("Name")}</label>
                </div>
                <div className="w-2/3">
                  <Input />
                </div>
              </div>

              <div className="flex border-b border-slate-200 py-8">
                <div className="w-1/3">
                  <label className="block text-sm font-medium">{t("Email")}</label>
                </div>
                <div className="w-2/3">
                  <Input />
                </div>
              </div>

              <div className="flex border-b border-slate-200 py-8">
                <div className="w-1/3">
                  <label className="block text-sm font-medium">{t("CPF")}</label>
                </div>
                <div className="w-2/3">
                  <Input />
                </div>
              </div>

              <div className="flex border-b border-slate-200 py-8">
                <div className="w-1/3">
                  <label className="block text-sm font-medium">{t("Phone")}</label>
                </div>
                <div className="w-2/3">
                  <Input />
                </div>
              </div>

              <div className="flex border-b border-slate-200 py-8">
                <div className="w-1/3">
                  <label className="block text-sm font-medium">{t("Address")}</label>
                </div>
                <div className="w-2/3">
                  <Input />
                </div>
              </div>

              <div className="flex border-b border-slate-200 py-8">
                <div className="w-1/3">
                  <label className="block text-sm font-medium">{t("Institution")}</label>
                </div>
                <div className="w-2/3">
                  <Input />
                </div>
              </div>

              <div className="flex border-b border-slate-200 py-8">
                <div className="w-1/3">
                  <label className="block text-sm font-medium">{t("Subject")}</label>
                </div>
                <div className="w-2/3">
                  <Textarea rows={10} />
                </div>
              </div>

              <div className="flex justify-end gap-6 pt-8">
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
