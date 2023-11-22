import { Link } from "@inertiajs/react";
import { t } from "i18next";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Breadcrumbs = ({
  previousRoutes = [],
  currentRoute,
}: {
  previousRoutes?: { href: string; label: string }[];
  currentRoute: string;
}) => {
  return (
    <nav className="py-6 text-gray-600">
      <ul className="flex items-center gap-2">
        <li className="flex items-center gap-2">
          <div className="font-semibold">{t("You are here")}</div>

          <ChevronRightIcon className="h-4 w-4" />
        </li>
        {previousRoutes.map((route) => (
          <li className="flex items-center gap-2">
            <Link href={route.href} className="hover:text-gray-700">
              {route.label}
            </Link>

            <ChevronRightIcon className="h-4 w-4" />
          </li>
        ))}
        <li className="text-blue-600">{currentRoute}</li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
