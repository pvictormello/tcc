import { Head, Link, useForm } from "@inertiajs/react";
import { IProtectedPageProps, IUser, IUserForm, Role } from "@/types";
import Layout from "@/Layouts/Layout";
import { useTranslation } from "react-i18next";
import { FormEventHandler } from "react";
import FormField from "@/Components/FormField";
import Input from "@/Components/Input";
import Button from "@/Components/Button";

import RadioGroup, { RadioGroupItem } from "@/Components/RadioGroup";
import Select from "@/Components/Select";

const Create = ({ auth, parentUsers }: IProtectedPageProps<{ parentUsers: IUser[] }>) => {
  const { t } = useTranslation();
  const { data, setData, post, processing, errors } = useForm<IUserForm>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    city: "",
    state: "",
    country: "",
    location: "",
    role: "Student",
    parent: null,
    parent_id: auth.user.role === "Admin" ? null : auth.user.id,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("users.store"));
  };

  return (
    <Layout user={auth.user} currentLink="users">
      <Head title={t("New user")} />
      <div className="pb-16">
        <div className="container mx-auto">
          <form onSubmit={submit}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-0 overflow-hidden rounded-lg bg-white p-6 shadow">
              <div className="w-full md:w-1/3">
                <div className="font-semibold">{t("Informations")}</div>
              </div>
              <div className="flex w-full md:w-2/3 flex-col gap-6 md:gap-12">
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
                    name="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    maxLength={100}
                  />
                </FormField>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField label={t("Password")} error={errors.password}>
                    <Input
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={(e) => setData("password", e.target.value)}
                      maxLength={32}
                    />
                  </FormField>
                  <FormField label={t("Confirm password")} error={errors.password_confirmation}>
                    <Input
                      type="password"
                      name="password_confirmation"
                      value={data.password_confirmation}
                      onChange={(e) => setData("password_confirmation", e.target.value)}
                      maxLength={32}
                    />
                  </FormField>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
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

                {auth.user?.role === "Admin" && (
                  <FormField label={t("Role")} error={errors.location}>
                    <RadioGroup gridCols="grid-cols-4">
                      <RadioGroupItem
                        label={t("Student")}
                        name="role"
                        value="Student"
                        checked={data.role === "Student"}
                        onChange={(e) => setData("role", e.target.value as Role)}
                      />

                      <RadioGroupItem
                        label={t("Teacher")}
                        name="role"
                        value="Teacher"
                        checked={data.role === "Teacher"}
                        onChange={(e) => setData("role", e.target.value as Role)}
                      />

                      <RadioGroupItem
                        label={t("Researcher")}
                        name="role"
                        value="Researcher"
                        checked={data.role === "Researcher"}
                        onChange={(e) => setData("role", e.target.value as Role)}
                      />

                      <RadioGroupItem
                        label={t("Admin")}
                        name="role"
                        value="Admin"
                        checked={data.role === "Admin"}
                        onChange={(e) => setData("role", e.target.value as Role)}
                      />
                    </RadioGroup>
                  </FormField>
                )}

                {auth.user?.role === "Admin" && data.role === "Student" && (
                  <FormField label={t("Who this student belongs to?")} error={errors.location}>
                    <Select
                      label={data.parent?.name || t("Select an option")}
                      value={data.parent}
                      onChange={(value) => {
                        setData({ ...data, ...{ parent_id: value.id, parent: value } });
                      }}
                    >
                      {parentUsers.map((parentUser) => (
                        <Select.Option
                          key={parentUser.id}
                          value={parentUser}
                          selected={parentUser.id === data.parent?.id}
                        >
                          {parentUser.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </FormField>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-6 overflow-hidden rounded-lg bg-white px-6 py-4 shadow">
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

export default Create;
