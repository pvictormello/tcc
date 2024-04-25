import { IUser } from "@/types";
import { PropsWithChildren, useEffect } from "react";
import axios from "axios";
import Header from "./Partials/Header";
import NavBar from "./Partials/NavBar";
import MobileHeader from "./Partials/MobileHeader";
import { useTranslation } from "react-i18next";
import { Head } from "@inertiajs/react";

const Layout = ({ user, currentLink, children }: PropsWithChildren<{ user?: IUser; currentLink: string }>) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("language") === null) {
      i18n.changeLanguage("pt-BR");
      localStorage.setItem("language", "pt-BR");
    }

    axios.post("/localizacao", { locale: localStorage.getItem("language") });
  }, []);

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    axios.post("/localizacao", { locale: language });
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <div className="flex h-screen flex-col">
        <header className="bg-blue-600 pb-10 text-white">
          <div className="container mx-auto block md:hidden">
            <MobileHeader
              user={user}
              currentLink={currentLink}
              language={localStorage.getItem("language") || ""}
              onChangeLanguage={handleChangeLanguage}
            />
          </div>
          <div className="container mx-auto hidden md:block">
            <Header user={user} />

            <NavBar
              user={user}
              currentLink={currentLink}
              language={localStorage.getItem("language") || ""}
              onChangeLanguage={handleChangeLanguage}
            />
          </div>
        </header>

        <main className="-mt-10 flex-grow">{children}</main>

        <footer className="bg-blue-700 text-white">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <div className="text-base italic sm:text-xl">
              <span className="text-xl font-semibold not-italic sm:text-3xl">BG</span>
              Capsicum
            </div>
            <div className="text-sm sm:text-base">&copy; UFU Campus Monte Carmelo</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
