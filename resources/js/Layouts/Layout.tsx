import { User } from "@/types";
import { PropsWithChildren } from "react";
import Header from "./Partials/Header";
import NavBar from "./Partials/NavBar";

const Layout = ({ user, currentLink, children }: PropsWithChildren<{ user?: User; currentLink: string }>) => {
  return (
    <>
      <header className="shadow">
        <Header user={user} />

        <NavBar user={user} currentLink={currentLink} />
      </header>

      <main className="min-h-[calc(100vh-178px)]">{children}</main>

      <footer className="bg-blue-700 text-white">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="text-xl italic">
            <span className="text-3xl font-semibold not-italic">BG</span>
            Capsicum
          </div>
          <div>&copy; UFU Campus Monte Carmelo</div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
