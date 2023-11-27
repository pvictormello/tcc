import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

const Pagination = ({
  from,
  to,
  total,
  current_page,
  last_page,
  first_page_url,
  prev_page_url,
  next_page_url,
  last_page_url,
}: {
  from: number;
  to: number;
  total: number;
  current_page: number;
  last_page: number;
  first_page_url: string;
  prev_page_url: string;
  next_page_url: string;
  last_page_url: string;
}) => {
  const { t } = useTranslation();

  const showBreakLeft = () => {
    if (current_page >= last_page - 1 && last_page > 2) {
      return true;
    }

    return false;
  };

  const showBreakRight = () => {
    if (current_page < last_page - 1 && last_page > 2) {
      return true;
    }

    return false;
  };

  return (
    <div className="flex items-center justify-between border-t border-slate-200 bg-white px-6 py-4">
      <div className="flex flex-1 items-center justify-between">
        <p className="text-sm text-slate-700">
          {t("Showing")} <span className="font-medium">{from || 0}</span> {t("to")}{" "}
          <span className="font-medium">{to || 0}</span> {t("of")} <span className="font-medium">{total || 0}</span>{" "}
          {t("results")}
        </p>
        <div>
          <nav className="inline-flex divide-x divide-slate-200 overflow-hidden rounded-lg shadow-sm ring-1 ring-slate-200">
            <Link href={prev_page_url} className="inline-flex px-2 py-2 text-slate-400 hover:bg-slate-50">
              <ChevronLeftIcon className="h-5 w-5" />
            </Link>
            {current_page > 1 && (
              <Link
                href={first_page_url}
                className="inline-flex px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                1
              </Link>
            )}
            {showBreakLeft() && <span className="inline-flex px-4 py-2 text-sm font-semibold text-slate-700">...</span>}
            <div className="inline-flex bg-blue-600 px-4 py-2 text-sm font-semibold text-white">{current_page}</div>
            {showBreakRight() && (
              <span className="inline-flex px-4 py-2 text-sm font-semibold text-slate-700">...</span>
            )}
            {current_page < last_page && (
              <Link
                href={last_page_url}
                className="inline-flex px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                {last_page}
              </Link>
            )}
            <Link href={next_page_url} className="inline-flex rounded-r-md px-2 py-2 text-slate-400 hover:bg-slate-50">
              <ChevronRightIcon className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
