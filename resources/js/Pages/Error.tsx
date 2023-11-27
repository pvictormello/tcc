import { Head, Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import Button from "@/Components/Button";

const Error = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head title={t("Page not found")} />

      <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-blue-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">{t("Page not found")}</h1>
          <p className="mt-6 text-base text-slate-600">{t("Sorry, we couldn’t find the page you’re looking for")}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href={route("home.index")}>
              <Button>{t("Go back to home")}</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error;
