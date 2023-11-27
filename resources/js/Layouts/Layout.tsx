import { IUser } from "@/types";
import { PropsWithChildren } from "react";
import Header from "./Partials/Header";
import NavBar from "./Partials/NavBar";
import { useTranslation } from "react-i18next";

const Layout = ({ user, currentLink, children }: PropsWithChildren<{ user?: IUser; currentLink: string }>) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <>
      <header className="bg-blue-600 pb-10 text-white">
        <div className="container mx-auto">
          <Header user={user} />

          <NavBar
            user={user}
            currentLink={currentLink}
            language={localStorage.getItem("language") || ""}
            onChangeLanguage={handleChangeLanguage}
          />
        </div>
      </header>

      <main className="-mt-10 min-h-[calc(100vh-178px)]">{children}</main>

      <footer className="bg-blue-700 text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="text-base italic sm:text-xl">
            <span className="text-xl font-semibold not-italic sm:text-3xl">BG</span>
            Capsicum
          </div>
          <div className="text-sm sm:text-base">&copy; UFU Campus Monte Carmelo</div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
