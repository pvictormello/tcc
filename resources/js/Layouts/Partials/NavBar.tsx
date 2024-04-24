import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import BrazilFlag from "@/Components/Icons/BrazilFlag";
import SpainFlag from "@/Components/Icons/SpainFlag";
import UnitedStatesFlag from "@/Components/Icons/UnitedStatesFlag";
import { IUser } from "@/types";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const NavBar = ({
  currentLink,
  user,
  language,
  onChangeLanguage,
}: {
  user?: IUser;
  currentLink: string;
  language: string;
  onChangeLanguage: (language: string) => void;
}) => {
  const { t } = useTranslation();
  const routes = [
    {
      label: t("Home"),
      href: route("home.index"),
      link: "home",
      roles: [],
    },
    {
      label: t("Access"),
      href: route("access.index"),
      link: "access",
      roles: ["Student", "Teacher", "Researcher", "Admin"],
    },
    {
      label: t("Users"),
      href: route("users.index"),
      link: "users",
      roles: ["Teacher", "Researcher", "Admin"],
    },
    {
      label: t("Logs"),
      href: route("logs.index"),
      link: "logs",
      roles: ["Admin"],
    },
    {
      label: t("About"),
      href: route("about.index"),
      link: "about",
      roles: [],
    },
    {
      label: t("Contact"),
      href: route("contact.index"),
      link: "contact",
      roles: [],
    },
  ];

  return (
    <div className="flex items-center justify-between border-t border-blue-400 py-5 sm:flex-row">
      <nav>
        <ul className="flex items-center gap-4 text-sm font-medium">
          {routes.map((route) => {
            if (route.roles.length === 0 || (user && route.roles.includes(user.role))) {
              return (
                <li key={route.link}>
                  <Link
                    href={route.href}
                    className={`rounded-lg px-3 py-2 hover:bg-blue-700 ${
                      currentLink === route.link ? "text-white " : "text-blue-300"
                    }`}
                  >
                    {route.label}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </nav>

      <div className="w-56 text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
              {language === "pt-BR" && <BrazilFlag />}
              {language === "es" && <SpainFlag />}
              {language === "en" && <UnitedStatesFlag />}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="z-30 absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => onChangeLanguage("pt-BR")}
                      className={`${
                        active ? "bg-blue-600 text-white" : "text-gray-900"
                      } group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm`}
                    >
                      <BrazilFlag />
                      Português
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => onChangeLanguage("es")}
                      className={`${
                        active ? "bg-blue-600 text-white" : "text-gray-900"
                      } group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm`}
                    >
                      <SpainFlag />
                      Español
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => onChangeLanguage("en")}
                      className={`${
                        active ? "bg-blue-600 text-white" : "text-gray-900"
                      } group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm`}
                    >
                      <UnitedStatesFlag />
                      English
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default NavBar;
