import { Link } from "@inertiajs/react";
import { t } from "i18next";
import BrazilFlag from "@/Components/Icons/BrazilFlag";
import SpainFlag from "@/Components/Icons/SpainFlag";
import UnitedStatesFlag from "@/Components/Icons/UnitedStatesFlag";
import { User } from "@/types";

const NavBar = ({ currentLink, user }: { user?: User; currentLink: string }) => {
  const routes = [
    {
      label: t("Home"),
      href: route("home.index"),
      link: "home",
      protected: false,
    },
    {
      label: t("Access"),
      href: route("access.index"),
      link: "access",
      protected: true,
    },
    {
      label: t("Users"),
      href: route("users.index"),
      link: "users",
      protected: true,
    },
    {
      label: t("About"),
      href: route("about.index"),
      link: "about",
      protected: false,
    },
    {
      label: t("Contact"),
      href: route("contact.index"),
      link: "contact",
      protected: false,
    },
  ];

  return (
    <div className="bg-blue-700 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <nav>
          <ul className="flex items-center gap-6 text-sm">
            {routes.map((route) => {
              if (!route.protected || (route.protected && user)) {
                return (
                  <li
                    className={`py-2 ${currentLink === route.link ? "border-b-2 border-white font-bold" : ""}`}
                    key={route.link}
                  >
                    <Link href={route.href} className={currentLink !== route.link ? "hover:text-gray-200" : ""}>
                      {route.label}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>

        <nav>
          <ul className="flex items-center gap-2">
            <li>
              <a href="language/pt-br">
                <button className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <BrazilFlag />
                </button>
              </a>
            </li>

            <li>
              <a href="language/es">
                <button className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <SpainFlag />
                </button>
              </a>
            </li>

            <li>
              <a href="language/en">
                <button className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                  <UnitedStatesFlag />
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
