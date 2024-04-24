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
      <h1 className="text-xl italic">
        <span className="text-3xl font-semibold not-italic">BG</span>
        Capsicum
      </h1>

      <div className="flex flex-col gap-1">
        {user && (
          <div className="flex items-center gap-6 font-semibold">
            {t("Hello")}, {user.name}
            <Link href={route("logout")} method="post">
              <Button color="white" size="sm">
                {t("Logout")}
              </Button>
            </Link>
          </div>
        )}
        {!user && (
          <form className="flex items-center justify-end gap-6 font-semibold" onSubmit={submit}>
            <div className="flex flex-col gap-1 w-1/3">
              <input
                className="rounded-md border-0 p-2 lg:px-3 lg:py-2 text-slate-900 ring-2 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                maxLength={100}
                placeholder={t("Email")}
              />
            </div>

            <div className="flex flex-col gap-1 w-1/3">
              <input
                className="rounded-md border-0 p-2 lg:px-3 lg:py-2 text-slate-900 ring-2 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                maxLength={32}
                placeholder={t("Password")}
              />
            </div>

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
