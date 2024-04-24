import FormField from "@/Components/FormField";
import { IAccess } from "@/types";
import { formatDate } from "@/utils";
import { useTranslation } from "react-i18next";

const Access = ({ access }: { access: IAccess }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 flex flex-col gap-8 overflow-hidden rounded-lg bg-white p-6 shadow md:flex-row md:gap-0">
      <div className="w-full md:w-1/3">
        <div className="font-semibold">{t("Collection location")}</div>
      </div>
      <div className="flex w-full flex-col gap-6 md:w-2/3 md:gap-8">
        <FormField label={t("Sample")}>
          <div>{access.sample ?? "-"}</div>
        </FormField>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("Species")}>
            <div>{access.species ?? "-"}</div>
          </FormField>

          <FormField label={t("Variety")}>
            <div>{access.variety ?? "-"}</div>
          </FormField>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("Color")}>
            <div>{access.color ?? "-"}</div>
          </FormField>

          <FormField label={t("Generation")}>
            <div>{access.generation ?? "-"}</div>
          </FormField>
        </div>

        <FormField label={t("Producer name")}>
          <div>{access.producer_name ?? "-"}</div>
        </FormField>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("Geodetic coordinates")}>
            <div>{access.coordinates ?? "-"}</div>
          </FormField>

          <FormField label={t("Reference location")}>
            <div>{access.location ?? "-"}</div>
          </FormField>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("Contact phone")}>
            <div>{access.phone ?? "-"}</div>
          </FormField>

          <FormField label={t("Collection date")}>
            <div>{access.collection_date ? formatDate(new Date(access.collection_date)) : "-"}</div>
          </FormField>
        </div>

        <FormField label={t("Sample observation")}>
          <div>{access.observation ?? "-"}</div>
        </FormField>
      </div>
    </div>
  );
};

export default Access;
