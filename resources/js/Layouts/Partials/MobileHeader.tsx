import FormField from "@/Components/FormField";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import { Link, useForm } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { IUser } from "@/types";
import { FormEventHandler } from "react";
import { Bars3Icon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Popover } from "@headlessui/react";
import { Menu, Transition } from "@headlessui/react";
import BrazilFlag from "@/Components/Icons/BrazilFlag";
import SpainFlag from "@/Components/Icons/SpainFlag";
import UnitedStatesFlag from "@/Components/Icons/UnitedStatesFlag";
import { Fragment } from "react";

const MobileHeader = ({
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
      <h1 className="z-30 text-base italic">
        <span className="text-xl font-semibold not-italic">BG</span>
        Capsicum
      </h1>

      <div className="flex items-center gap-2">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-blue-600 px-2 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
              {language === "pt-BR" && <BrazilFlag />}
              {language === "es" && <SpainFlag />}
              {language === "en" && <UnitedStatesFlag />}
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
            <Menu.Items className="absolute right-0 z-30 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
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

        <Popover>
          {({ open }) => (
            <>
              <Popover.Button className="relative z-30">
                <Button size="square">
                  {open ? <ChevronUpIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </Button>
              </Popover.Button>

              <Popover.Overlay className="fixed inset-0 z-20 bg-blue-400/30 backdrop-blur" />

              <Popover.Panel className="absolute inset-x-0 top-0 z-20 origin-top rounded-b-lg bg-blue-600 pt-24 shadow-2xl shadow-gray-900/20">
                <nav className="container mx-auto pb-6">
                  <ul className="flex flex-col gap-4 font-medium">
                    {routes.map((route) => {
                      if (route.roles.length === 0 || (user && route.roles.includes(user.role))) {
                        return (
                          <li key={route.link}>
                            <Link
                              href={route.href}
                              className={`hover:bg-blue-700 ${
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
                <div className="border-t-2 border-blue-400 py-6">
                  <div className="container mx-auto">
                    {user && (
                      <div className="flex items-center justify-between font-semibold">
                        {t("Hello")}, {user.name}
                        <Link href={route("logout")} method="post">
                          <Button color="white" size="sm">
                            {t("Logout")}
                          </Button>
                        </Link>
                      </div>
                    )}
                    {!user && (
                      <form className="flex items-center gap-6 font-semibold" onSubmit={submit}>
                        <div className="flex w-full flex-col gap-1">
                          <input
                            className="w-full rounded-md border-0  px-3 py-2 text-slate-900 ring-2 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            maxLength={100}
                            placeholder={t("Email")}
                          />
                        </div>

                        <div className="flex w-full flex-col gap-1">
                          <input
                            className="w-full rounded-md border-0  px-3 py-2 text-slate-900 ring-2 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
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
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default MobileHeader;
