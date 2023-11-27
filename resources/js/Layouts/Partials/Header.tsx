import FormField from "@/Components/FormField";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import { Link, useForm } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { IUser } from "@/types";
import { FormEventHandler } from "react";

const Header = ({ user }: { user?: IUser }) => {
  const { t } = useTranslation();
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
    <div className="flex items-center justify-between py-5">
      <h1 className="text-base italic sm:text-xl">
        <span className="text-xl font-semibold not-italic sm:text-3xl">BG</span>
        Capsicum
      </h1>

      <div className="flex flex-col gap-1">
        {user && (
          <div className="flex items-center gap-6 font-semibold">
            <div className="hidden sm:block">
              {t("Hello")}, {user.name}
            </div>
            <Link href={route("logout")} method="post">
              <Button color="white" size="sm">
                {t("Logout")}
              </Button>
            </Link>
          </div>
        )}
        {!user && (
          <form className="flex items-center gap-6 font-semibold" onSubmit={submit}>
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

            <Button color="white" size="sm" type="submit" disabled={processing}>
              {t("Login")}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Header;
