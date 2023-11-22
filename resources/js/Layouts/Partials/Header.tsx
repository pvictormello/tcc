import FormField from "@/Components/FormField";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import { Link, useForm } from "@inertiajs/react";
import { t } from "i18next";
import { User } from "@/types";
import { FormEventHandler } from "react";

const Header = ({ user }: { user?: User }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("login"));
    reset();
  };

  return (
    <div className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <h1 className="text-xl italic">
          <span className="text-3xl font-semibold not-italic">BG</span>
          Capsicum
        </h1>

        <div className="flex flex-col gap-1">
          {user && (
            <div className="flex items-center gap-6 font-semibold">
              {t("Hello")}, {user.name}
              <Link href={route("logout")} method="post">
                <Button color="white">{t("Logout")}</Button>
              </Link>
            </div>
          )}
          {!user && (
            <form
              className="flex items-center gap-6 font-semibold"
              onSubmit={submit}
            >
              <FormField error={errors.email}>
                <Input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  maxLength={100}
                  placeholder="email"
                />
              </FormField>

              <FormField error={errors.email}>
                <Input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={(e) => setData("password", e.target.value)}
                  maxLength={32}
                  placeholder="senha"
                />
              </FormField>

              <Button color="white" type="submit" disabled={processing}>
                {t("Login")}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
