import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps, User } from "@/types";
import Layout from "@/Layouts/Layout";
import { t } from "i18next";
import { FormEventHandler } from "react";
import FormField from "@/Components/FormField";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import Breadcrumbs from "@/Components/Breadcrumbs";

const Edit = ({ auth, user }: PageProps<{ user: User }>) => {
  const { data, setData, put, processing, errors } = useForm({
    name: user.name,
    email: user.email,
    password: user.password,
    password_confirmation: user.password,
    city: user.city,
    state: user.state,
    country: user.country,
    location: user.location,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    put(route("users.update", { id: user.id }));
  };

  return (
    <Layout user={auth.user} currentLink="home">
      <Head title={t("Edit user")} />
      <div className="pb-16">
        <div className="container mx-auto">
          <Breadcrumbs
            previousRoutes={[{ href: route("users.index"), label: t("Users") }]}
            currentRoute={user.name}
          />

          <form
            onSubmit={submit}
            className="rounded-lg bg-white px-6 py-8 shadow"
          >
            <div className="flex border-b border-gray-200 pb-8">
              <div className="w-1/3">
                <div className="font-semibold">{t("Informations")}</div>
              </div>
              <div className="flex w-2/3 flex-col gap-12">
                <FormField label={t("Full name")} error={errors.name}>
                  <Input
                    name="name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    maxLength={150}
                  />
                </FormField>

                <FormField label={t("Email")} error={errors.email}>
                  <Input
                    type="email"
                    name="name"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    maxLength={100}
                  />
                </FormField>

                <div className="grid grid-cols-2 gap-6">
                  <FormField label={t("Password")} error={errors.password}>
                    <Input
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={(e) => setData("password", e.target.value)}
                      maxLength={32}
                    />
                  </FormField>
                  <FormField
                    label={t("Confirm password")}
                    error={errors.password_confirmation}
                  >
                    <Input
                      type="password"
                      name="password_confirmation"
                      value={data.password_confirmation}
                      onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                      }
                      maxLength={32}
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <FormField label={t("City")} error={errors.city}>
                    <Input
                      type="text"
                      name="city"
                      value={data.city}
                      onChange={(e) => setData("city", e.target.value)}
                      maxLength={150}
                    />
                  </FormField>
                  <FormField label={t("State")} error={errors.state}>
                    <Input
                      type="text"
                      name="state"
                      value={data.state}
                      onChange={(e) => setData("state", e.target.value)}
                      maxLength={3}
                    />
                  </FormField>
                  <FormField label={t("Country")} error={errors.country}>
                    <Input
                      type="text"
                      name="country"
                      value={data.country}
                      onChange={(e) => setData("country", e.target.value)}
                      maxLength={30}
                    />
                  </FormField>
                </div>

                <FormField label={t("Workspace")} error={errors.location}>
                  <Input
                    type="text"
                    name="location"
                    value={data.location}
                    onChange={(e) => setData("location", e.target.value)}
                    maxLength={40}
                  />
                </FormField>
              </div>
            </div>

            <div className="flex justify-end gap-6 pt-8">
              <Link href={route("users.index")}>
                <Button size="lg" color="secondary">
                  {t("Cancel")}
                </Button>
              </Link>

              <Button type="submit" size="lg" disabled={processing}>
                {t("Save")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
