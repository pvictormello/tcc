import { Head, useForm } from "@inertiajs/react";
import { IContactForm, IPageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import { useTranslation } from "react-i18next";

import Input from "@/Components/Input";
import Textarea from "@/Components/Textarea";
import Button from "@/Components/Button";
import { FormEventHandler } from "react";

const Contact = ({ auth }: IPageProps) => {
  const { t } = useTranslation();

  const { data, setData, post, processing, errors } = useForm<IContactForm>({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    address: "",
    institution: "",
    message: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("contact.store"));
  };

  return (
    <Layout user={auth.user} currentLink="contact">
      <Head title={t("Contact")} />

      <div className="container mx-auto pb-16">
        <div className="mx-auto w-full lg:w-2/3">
          <form className="rounded-lg bg-white p-6 shadow" onSubmit={submit}>
            <div className="text-xl font-semibold">{t("Contact us")}</div>

            <div className="mt-12 flex flex-col">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 border-b border-slate-200 pb-8">
                <div className="w-full sm:w-1/3">
                  <label className="block text-sm font-medium">{t("Name")} *</label>
                </div>
                <div className="w-full sm:w-2/3">
                  <Input
                    name="name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    maxLength={150}
                  />
                  {errors.name && <div className="text-red-400">{errors.name}</div>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 border-b border-slate-200 py-8">
                <div className="w-full sm:w-1/3">
                  <label className="block text-sm font-medium">{t("Email")} *</label>
                </div>
                <div className="w-full sm:w-2/3">
                  <Input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    maxLength={100}
                  />
                  {errors.email && <div className="text-red-400">{errors.email}</div>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 border-b border-slate-200 py-8">
                <div className="w-full sm:w-1/3">
                  <label className="block text-sm font-medium">{t("CPF")}</label>
                </div>
                <div className="w-full sm:w-2/3">
                  <Input name="cpf" value={data.cpf} onChange={(e) => setData("cpf", e.target.value)} maxLength={20} />
                  {errors.cpf && <div className="text-red-400">{errors.cpf}</div>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 border-b border-slate-200 py-8">
                <div className="w-full sm:w-1/3">
                  <label className="block text-sm font-medium">{t("Phone")}</label>
                </div>
                <div className="w-full sm:w-2/3">
                  <Input
                    name="phone"
                    value={data.phone}
                    onChange={(e) => setData("phone", e.target.value)}
                    maxLength={20}
                  />
                  {errors.phone && <div className="text-red-400">{errors.phone}</div>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 border-b border-slate-200 py-8">
                <div className="w-full sm:w-1/3">
                  <label className="block text-sm font-medium">{t("Address")}</label>
                </div>
                <div className="w-full sm:w-2/3">
                  <Input
                    name="address"
                    value={data.address}
                    onChange={(e) => setData("address", e.target.value)}
                    maxLength={150}
                  />
                  {errors.address && <div className="text-red-400">{errors.address}</div>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 border-b border-slate-200 py-8">
                <div className="w-full sm:w-1/3">
                  <label className="block text-sm font-medium">{t("Institution")}</label>
                </div>
                <div className="w-full sm:w-2/3">
                  <Input
                    name="institution"
                    value={data.institution}
                    onChange={(e) => setData("institution", e.target.value)}
                    maxLength={150}
                  />
                  {errors.institution && <div className="text-red-400">{errors.institution}</div>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 border-b border-slate-200 py-8">
                <div className="w-full sm:w-1/3">
                  <label className="block text-sm font-medium">{t("Message")} *</label>
                </div>
                <div className="w-full sm:w-2/3">
                  <Textarea
                    name="message"
                    value={data.message}
                    onChange={(e) => setData("message", e.target.value)}
                    maxLength={500}
                    rows={10}
                  />
                  {errors.message && <div className="text-red-400">{errors.message}</div>}
                </div>
              </div>

              <div className="flex justify-end gap-6 pt-8">
                <Button type="submit" size="lg" disabled={processing}>
                  {t("Send")}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
