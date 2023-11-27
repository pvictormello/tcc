import { useState } from "react";
import { Head, router } from "@inertiajs/react";
import { ILog, IPaginatedData, IProtectedPageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import { useTranslation } from "react-i18next";
import { FunnelIcon, ChevronDownIcon, ChevronUpDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import ButtonGroup, { ButtonGroupItem } from "@/Components/ButtonGroup";
import { UserPlusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Input from "@/Components/Input";
import Pagination from "@/Components/Pagination";
import { formatDateTime } from "@/utils";

const Index = ({
  auth,
  logs,
  currentSort,
  currentOrder,
  currentFilters,
}: IProtectedPageProps<{
  logs: IPaginatedData<ILog[]>;
  currentSort: string;
  currentOrder: "asc" | "desc" | "";
  currentFilters: { [key: string]: string };
}>) => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState(currentFilters);

  const handleFilterChange = (e: any) => {
    const { name, value } = e.target;
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [name]: value ? value : null,
    }));
  };

  const handleApplyFilters = () => {
    router.get(route("logs.index", { ...currentFilters, ...filters }));
  };

  const handleResetFilters = () => {
    router.get(route("logs.index"));
  };

  const handleSort = (sort: string) => {
    let order = "asc";

    if (sort === currentSort) {
      order = currentOrder === "asc" ? "desc" : "";
    }

    const sortParams = order ? { sort, order } : {};

    router.get(route("logs.index", sortParams));
  };

  const renderSortIcon = (sort: string) => {
    if (sort === currentSort) {
      return currentOrder === "asc" ? <ChevronUpIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />;
    }

    return <ChevronUpDownIcon className="h-6 w-6" />;
  };

  return (
    <Layout user={auth.user} currentLink="logs">
      <Head title={t("Users")} />

      <div className="pb-16">
        <div className="container mx-auto">
          <div className="rounded-lg bg-white px-4 py-4 shadow sm:px-6">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{t("Logs")}</div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg bg-white shadow">
            {logs.total === 0 && Object.values(filters).every((value) => value === "") ? (
              <div className="flex flex-col items-center px-6 py-12">
                <UserPlusIcon className="h-12 w-12 text-slate-600" />
                <div className="mt-4 text-sm font-medium">{t("No logs found")}</div>
              </div>
            ) : (
              <>
                <table className="block w-full overflow-x-scroll sm:table">
                  <thead className="border-b-2 border-slate-200 bg-white text-left text-xs font-medium uppercase tracking-wide text-slate-400">
                    <tr>
                      <th className="min-w-[200px]">
                        <button
                          type="button"
                          onClick={() => handleSort("timestamp")}
                          className="flex w-full items-center justify-between px-6 py-4 uppercase"
                        >
                          <div>{t("Timestamp")}</div>
                          {renderSortIcon("timestamp")}
                        </button>
                      </th>
                      <th className="min-w-[200px]">
                        <button
                          type="button"
                          onClick={() => handleSort("description")}
                          className="flex w-full items-center justify-between px-6 py-4 uppercase"
                        >
                          <div>{t("Description")}</div>
                          {renderSortIcon("description")}
                        </button>
                      </th>
                      <th className="min-w-[200px]">
                        <button
                          type="button"
                          onClick={() => handleSort("action_type")}
                          className="flex w-full items-center justify-between px-6 py-4 uppercase"
                        >
                          <div>{t("Action type")}</div>
                          {renderSortIcon("action_type")}
                        </button>
                      </th>
                      <th className="min-w-[200px] px-6 py-4">{t("User")}</th>
                      <th className="min-w-[100px] px-6 py-4 text-right">{t("Actions")}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="px-6 py-4 font-medium">
                        <Input
                          inputSize="sm"
                          name="timestamp"
                          value={filters.timestamp || ""}
                          onChange={handleFilterChange}
                          placeholder={t("Filter by timestamp")}
                        />
                      </td>
                      <td className="px-6 py-4 font-medium">
                        <Input
                          inputSize="sm"
                          name="description"
                          value={filters.description || ""}
                          onChange={handleFilterChange}
                          placeholder={t("Filter by description")}
                        />
                      </td>
                      <td className="px-6 py-4 font-medium">
                        <Input
                          inputSize="sm"
                          name="action_type"
                          value={filters.action_type || ""}
                          onChange={handleFilterChange}
                          placeholder={t("Filter by action type")}
                        />
                      </td>
                      <td className="px-6 py-4 font-medium">
                        <Input
                          inputSize="sm"
                          name="user"
                          value={filters.user || ""}
                          onChange={handleFilterChange}
                          placeholder={t("Filter by user")}
                        />
                      </td>
                      <td className="px-6 py-4 font-medium">
                        <div className="flex justify-end gap-4">
                          <ButtonGroup>
                            <ButtonGroupItem label={t("Clean filters")} onClick={handleResetFilters}>
                              <XCircleIcon className="h-5 w-5 text-slate-900" />
                            </ButtonGroupItem>
                            <ButtonGroupItem onClick={handleApplyFilters}>
                              <div className="mr-2">{t("Filter")}</div>
                              <FunnelIcon className="h-4 w-4 text-slate-900" />
                            </ButtonGroupItem>
                          </ButtonGroup>
                        </div>
                      </td>
                    </tr>
                    {logs.data.map((log) => (
                      <tr className="border-t border-slate-200 bg-white" key={log.id}>
                        <td className="px-6 py-4 font-medium">{formatDateTime(new Date(log.timestamp))}</td>
                        <td className="px-6 py-4 text-slate-600">{log.description}</td>
                        <td className="px-6 py-4 text-slate-600">{log.action_type}</td>
                        <td className="px-6 py-4 text-slate-600">{log.user.name}</td>
                        <td className="px-6 py-4 text-right"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Pagination
                  from={logs.from}
                  to={logs.to}
                  total={logs.total}
                  current_page={logs.current_page}
                  last_page={logs.last_page}
                  first_page_url={logs.first_page_url}
                  prev_page_url={logs.prev_page_url}
                  next_page_url={logs.next_page_url}
                  last_page_url={logs.last_page_url}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
