import FormField from "@/Components/FormField";
import Input from "@/Components/Input";
import Textarea from "@/Components/Textarea";
import { AccessFormProps } from "@/types";
import { t } from "i18next";

const Access = ({ data, setData, errors }: AccessFormProps) => {
  return (
    <div className="flex border-b border-gray-200 pb-8">
      <div className="w-1/3">
        <div className="font-semibold">{t("Collection location")}</div>
      </div>
      <div className="flex w-2/3 flex-col gap-12">
        <FormField label={t("Sample")} error={errors.sample}>
          <Input name="sample" value={data.sample} onChange={(e) => setData("sample", e.target.value)} maxLength={20} />
        </FormField>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("Species")} error={errors.species}>
            <Input
              name="species"
              value={data.species}
              onChange={(e) => setData("species", e.target.value)}
              maxLength={20}
            />
          </FormField>

          <FormField label={t("Variety")} error={errors.variety}>
            <Input
              name="variety"
              value={data.variety}
              onChange={(e) => setData("variety", e.target.value)}
              maxLength={20}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("Color")} error={errors.color}>
            <Input name="color" value={data.color} onChange={(e) => setData("color", e.target.value)} maxLength={30} />
          </FormField>

          <FormField label={t("Generation")} error={errors.generation}>
            <Input
              name="generation"
              value={data.generation}
              onChange={(e) => setData("generation", e.target.value)}
              maxLength={30}
            />
          </FormField>
        </div>

        <FormField label={t("Producer name")} error={errors.producer_name}>
          <Input
            name="producer_name"
            value={data.producer_name}
            onChange={(e) => setData("producer_name", e.target.value)}
            maxLength={50}
            className="rounded-md border px-3 py-2 ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </FormField>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("Geodetic coordinates")} error={errors.coordinates}>
            <Input
              name="coordinates"
              value={data.coordinates}
              onChange={(e) => setData("coordinates", e.target.value)}
              maxLength={30}
              className="rounded-md border px-3 py-2 ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </FormField>

          <FormField label={t("Reference location")} error={errors.location}>
            <Input
              name="location"
              value={data.location}
              onChange={(e) => setData("location", e.target.value)}
              maxLength={50}
              className="rounded-md border px-3 py-2 ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("Contact phone")} error={errors.phone}>
            <Input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={(e) => setData("phone", e.target.value)}
              maxLength={20}
              className="rounded-md border px-3 py-2 ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </FormField>

          <FormField label={t("Collection date")} error={errors.collection_date}>
            <Input
              type="date"
              name="collection_date"
              value={data.collection_date}
              onChange={(e) => setData("collection_date", e.target.value)}
              maxLength={11}
              className="rounded-md border px-3 py-2 ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </FormField>
        </div>

        <FormField label={t("Sample observation")} error={errors.observation}>
          <Textarea
            name="observation"
            value={data.observation}
            onChange={(e) => setData("observation", e.target.value)}
            maxLength={50}
            rows={6}
          />
        </FormField>
      </div>
    </div>
  );
};

export default Access;
