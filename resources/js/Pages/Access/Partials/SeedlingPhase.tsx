import FormField from "@/Components/FormField";
import Input from "@/Components/Input";
import RadioGroup, { RadioGroupItem } from "@/Components/RadioGroup";
import { AccessFormProps } from "@/types";
import { t } from "i18next";

const SeedlingPhase = ({ data, setData, errors }: AccessFormProps) => {
  return (
    <div className="flex border-b border-gray-200 pb-8">
      <div className="w-1/3">
        <div className="font-semibold">{t("Seedling phase")}</div>
      </div>

      <div className="flex w-2/3 flex-col gap-12">
        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod1")} error={errors.cod1}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("White")}
                name="cod1"
                value="1"
                checked={data.cod1 === 1}
                onChange={(e) => setData("cod1", Number(e.target.value))}
              />
              <RadioGroupItem
                label={t("Green")}
                name="cod1"
                value="2"
                checked={data.cod1 === 2}
                onChange={(e) => setData("cod1", Number(e.target.value))}
              />
              <RadioGroupItem
                label={t("Purple")}
                name="cod1"
                value="3"
                checked={data.cod1 === 3}
                onChange={(e) => setData("cod1", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>

          <FormField label={t("cod2")} error={errors.cod2}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("Sparse")}
                name="cod2"
                value="3"
                checked={data.cod2 === 3}
                onChange={(e) => setData("cod2", Number(e.target.value))}
              />
              <RadioGroupItem
                label={t("Intermediate")}
                name="cod2"
                value="5"
                checked={data.cod2 === 5}
                onChange={(e) => setData("cod2", Number(e.target.value))}
              />
              <RadioGroupItem
                label={t("Dense")}
                name="cod2"
                value="7"
                checked={data.cod2 === 7}
                onChange={(e) => setData("cod2", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>
        </div>

        <FormField label={t("cod3")} error={errors.cod3}>
          <RadioGroup gridCols="grid-cols-9">
            <RadioGroupItem
              label={t("Light green")}
              name="cod3"
              value="1"
              checked={data.cod3 === 1}
              onChange={(e) => setData("cod3", Number(e.target.value))}
            />
            <RadioGroupItem
              label={t("Green")}
              name="cod3"
              value="2"
              checked={data.cod3 === 2}
              onChange={(e) => setData("cod3", Number(e.target.value))}
            />
            <RadioGroupItem
              label={t("Dark green")}
              name="cod3"
              value="3"
              checked={data.cod3 === 3}
              onChange={(e) => setData("cod3", Number(e.target.value))}
            />
            <RadioGroupItem
              label={t("Light purple")}
              name="cod3"
              value="4"
              checked={data.cod3 === 4}
              onChange={(e) => setData("cod3", Number(e.target.value))}
            />
            <RadioGroupItem
              label={t("Purple")}
              name="cod3"
              value="5"
              checked={data.cod3 === 5}
              onChange={(e) => setData("cod3", Number(e.target.value))}
            />
            <RadioGroupItem
              label={t("Dark purple")}
              name="cod3"
              value="6"
              checked={data.cod3 === 6}
              onChange={(e) => setData("cod3", Number(e.target.value))}
            />
            <RadioGroupItem
              label={t("Variegated")}
              name="cod3"
              value="7"
              checked={data.cod3 === 7}
              onChange={(e) => setData("cod3", Number(e.target.value))}
            />
            <RadioGroupItem
              label={t("Yellow")}
              name="cod3"
              value="8"
              checked={data.cod3 === 8}
              onChange={(e) => setData("cod3", Number(e.target.value))}
            />
            <RadioGroupItem
              label={t("Others")}
              name="cod3"
              value="9"
              checked={data.cod3 === 9}
              onChange={(e) => setData("cod3", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod4")} error={errors.cod4}>
          <RadioGroup gridCols="grid-cols-4">
            <RadioGroupItem
              label={t("Deltoid")}
              image="/images/access/forma_cotiledone_foliar_1.png"
              name="cod4"
              value="1"
              checked={data.cod4 === 1}
              onChange={(e) => setData("cod4", Number(e.target.value))}
            />
            <RadioGroupItem
              label={t("Ovate")}
              image="/images/access/forma_cotiledone_foliar_2.png"
              name="cod4"
              value="2"
              checked={data.cod4 === 2}
              onChange={(e) => setData("cod4", Number(e.target.value))}
            />
            <RadioGroupItem
              label={t("Lanceolate")}
              image="/images/access/forma_cotiledone_foliar_3.png"
              name="cod4"
              value="3"
              checked={data.cod4 === 3}
              onChange={(e) => setData("cod4", Number(e.target.value))}
            />
            <RadioGroupItem
              label={t("Elong-deltoid")}
              image="/images/access/forma_cotiledone_foliar_4.png"
              name="cod4"
              value="4"
              checked={data.cod4 === 4}
              onChange={(e) => setData("cod4", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod5")} error={errors.cod5}>
            <Input
              type="number"
              name="cod5"
              value={data.cod5}
              onChange={(e) => setData("cod5", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>
          <FormField label={t("cod6")} error={errors.cod6}>
            <Input
              type="number"
              name="cod6"
              value={data.cod6}
              onChange={(e) => setData("cod6", Number(e.target.value))}
              maxLength={50}
            />
          </FormField>
        </div>
      </div>
    </div>
  );
};

export default SeedlingPhase;
