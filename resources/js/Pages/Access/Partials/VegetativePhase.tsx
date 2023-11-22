import FormField from "@/Components/FormField";
import Input from "@/Components/Input";
import RadioGroup, { RadioGroupItem } from "@/Components/RadioGroup";
import { AccessFormProps } from "@/types";
import { t } from "i18next";

const VegetativePhase = ({ data, setData, errors }: AccessFormProps) => {
  return (
    <div className="flex border-b border-gray-200 pb-8">
      <div className="w-1/3">
        <div className="font-semibold">{t("Vegetative phase")}</div>
      </div>
      <div className="flex w-2/3 flex-col gap-12">
        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod7")} error={errors.cod7}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("Annual")}
                name="cod7"
                value="1"
                checked={data.cod7 === 1}
                onChange={(e) => setData("cod7", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Biennial")}
                name="cod7"
                value="2"
                checked={data.cod7 === 2}
                onChange={(e) => setData("cod7", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Perennial")}
                name="cod7"
                value="3"
                checked={data.cod7 === 3}
                onChange={(e) => setData("cod7", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>

          <FormField label={t("cod8")} error={errors.cod8}>
            <RadioGroup gridCols="grid-cols-4">
              <RadioGroupItem
                label={t("Green")}
                name="cod8"
                value="1"
                checked={data.cod8 === 1}
                onChange={(e) => setData("cod8", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Green with purple stripes")}
                name="cod8"
                value="2"
                checked={data.cod8 === 2}
                onChange={(e) => setData("cod8", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Purple")}
                name="cod8"
                value="3"
                checked={data.cod8 === 3}
                onChange={(e) => setData("cod8", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Others")}
                name="cod8"
                value="4"
                checked={data.cod8 === 4}
                onChange={(e) => setData("cod8", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod9")} error={errors.cod9}>
            <RadioGroup gridCols="grid-cols-4">
              <RadioGroupItem
                label={t("Green")}
                name="cod9"
                value="1"
                checked={data.cod9 === 1}
                onChange={(e) => setData("cod9", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Light purple")}
                name="cod9"
                value="3"
                checked={data.cod9 === 3}
                onChange={(e) => setData("cod9", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Purple")}
                name="cod9"
                value="5"
                checked={data.cod9 === 5}
                onChange={(e) => setData("cod9", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Dark purple")}
                name="cod9"
                value="7"
                checked={data.cod9 === 7}
                onChange={(e) => setData("cod9", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>

          <FormField label={t("cod10")} error={errors.cod10}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("Cylindrical")}
                name="cod10"
                value="1"
                checked={data.cod10 === 1}
                onChange={(e) => setData("cod10", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Angled")}
                name="cod10"
                value="2"
                checked={data.cod10 === 2}
                onChange={(e) => setData("cod10", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Flattened")}
                name="cod10"
                value="3"
                checked={data.cod10 === 3}
                onChange={(e) => setData("cod10", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>
        </div>

        <FormField label={t("cod11")} error={errors.cod11}>
          <RadioGroup gridCols="grid-cols-3">
            <RadioGroupItem
              label={t("Sparse")}
              image="/images/access/tricomas_caule_1.png"
              name="cod11"
              value="3"
              checked={data.cod11 === 3}
              onChange={(e) => setData("cod11", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Intermediate")}
              image="/images/access/tricomas_caule_2.png"
              name="cod11"
              value="5"
              checked={data.cod11 === 5}
              onChange={(e) => setData("cod11", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Dense")}
              image="/images/access/tricomas_caule_3.png"
              name="cod11"
              value="7"
              checked={data.cod11 === 7}
              onChange={(e) => setData("cod11", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod12")} error={errors.cod12}>
            <RadioGroup gridCols="grid-cols-5">
              <RadioGroupItem
                label={t("< 25")}
                name="cod12"
                value="1"
                checked={data.cod12 === 1}
                onChange={(e) => setData("cod12", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("25 - 45")}
                name="cod12"
                value="2"
                checked={data.cod12 === 2}
                onChange={(e) => setData("cod12", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("46 - 65")}
                name="cod12"
                value="3"
                checked={data.cod12 === 3}
                onChange={(e) => setData("cod12", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("66 - 85")}
                name="cod12"
                value="4"
                checked={data.cod12 === 4}
                onChange={(e) => setData("cod12", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("> 85")}
                name="cod12"
                value="5"
                checked={data.cod12 === 5}
                onChange={(e) => setData("cod12", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>

          <FormField label={t("cod13")} error={errors.cod13}>
            <RadioGroup gridCols="grid-cols-4">
              <RadioGroupItem
                label={t("Prostrate")}
                name="cod13"
                value="3"
                checked={data.cod13 === 3}
                onChange={(e) => setData("cod13", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Intermediate")}
                name="cod13"
                value="5"
                checked={data.cod13 === 5}
                onChange={(e) => setData("cod13", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Erect")}
                name="cod13"
                value="7"
                checked={data.cod13 === 7}
                onChange={(e) => setData("cod13", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Others")}
                name="cod13"
                value="9"
                checked={data.cod13 === 9}
                onChange={(e) => setData("cod13", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>
        </div>

        <div className="grid grid-cols-3 gap-12">
          <FormField label={t("cod14")} error={errors.cod14}>
            <Input
              type="number"
              name="cod14"
              value={data.cod14}
              onChange={(e) => setData("cod14", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>

          <FormField label={t("cod15")} error={errors.cod15}>
            <Input
              type="number"
              name="cod15"
              value={data.cod15}
              onChange={(e) => setData("cod15", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>

          <FormField label={t("cod16")} error={errors.cod14}>
            <Input
              type="number"
              name="cod16"
              value={data.cod16}
              onChange={(e) => setData("cod16", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>
        </div>

        <FormField label={t("cod17")} error={errors.cod17}>
          <RadioGroup gridCols="grid-cols-3">
            <RadioGroupItem
              label={t("Sparse")}
              image="/images/access/habito_ramificacao_1.png"
              name="cod17"
              value="3"
              checked={data.cod17 === 3}
              onChange={(e) => setData("cod17", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Intermediate")}
              image="/images/access/habito_ramificacao_2.png"
              name="cod17"
              value="5"
              checked={data.cod17 === 5}
              onChange={(e) => setData("cod17", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Dense")}
              image="/images/access/habito_ramificacao_3.png"
              name="cod17"
              value="7"
              checked={data.cod17 === 7}
              onChange={(e) => setData("cod17", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod18")} error={errors.cod18}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("Sparse")}
                name="cod18"
                value="3"
                checked={data.cod18 === 3}
                onChange={(e) => setData("cod18", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Intermediate")}
                name="cod18"
                value="5"
                checked={data.cod18 === 5}
                onChange={(e) => setData("cod18", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Dense")}
                name="cod18"
                value="7"
                checked={data.cod18 === 7}
                onChange={(e) => setData("cod18", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>

          <FormField label={t("cod19")} error={errors.cod19}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("Sparse")}
                name="cod19"
                value="3"
                checked={data.cod19 === 3}
                onChange={(e) => setData("cod19", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Intermediate")}
                name="cod19"
                value="5"
                checked={data.cod19 === 5}
                onChange={(e) => setData("cod19", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("Dense")}
                name="cod19"
                value="7"
                checked={data.cod19 === 7}
                onChange={(e) => setData("cod19", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>
        </div>

        <FormField label={t("cod20")} error={errors.cod20}>
          <RadioGroup gridCols="grid-cols-4">
            <RadioGroupItem
              label={t("Yellow")}
              name="cod20"
              value="1"
              checked={data.cod20 === 1}
              onChange={(e) => setData("cod20", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Light green")}
              name="cod20"
              value="2"
              checked={data.cod20 === 2}
              onChange={(e) => setData("cod20", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Green")}
              name="cod20"
              value="3"
              checked={data.cod20 === 3}
              onChange={(e) => setData("cod20", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Dark green")}
              name="cod20"
              value="4"
              checked={data.cod20 === 4}
              onChange={(e) => setData("cod20", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Light purple")}
              name="cod20"
              value="5"
              checked={data.cod20 === 5}
              onChange={(e) => setData("cod20", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Purple")}
              name="cod20"
              value="6"
              checked={data.cod20 === 6}
              onChange={(e) => setData("cod20", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Variegated")}
              name="cod20"
              value="7"
              checked={data.cod20 === 7}
              onChange={(e) => setData("cod20", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Others")}
              name="cod20"
              value="8"
              checked={data.cod20 === 8}
              onChange={(e) => setData("cod20", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod21")} error={errors.cod21}>
          <RadioGroup gridCols="grid-cols-3">
            <RadioGroupItem
              label={t("Deltoid")}
              image="/images/access/forma_folha_1.png"
              name="cod21"
              value="1"
              checked={data.cod21 === 1}
              onChange={(e) => setData("cod21", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Ovate")}
              image="/images/access/forma_folha_2.png"
              name="cod21"
              value="2"
              checked={data.cod21 === 2}
              onChange={(e) => setData("cod21", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Lanceolate")}
              image="/images/access/forma_folha_3.png"
              name="cod21"
              value="3"
              checked={data.cod21 === 3}
              onChange={(e) => setData("cod21", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod22")} error={errors.cod22}>
          <RadioGroup gridCols="grid-cols-3">
            <RadioGroupItem
              label={t("Entire")}
              name="cod22"
              value="1"
              checked={data.cod22 === 1}
              onChange={(e) => setData("cod22", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Ondulate")}
              name="cod22"
              value="2"
              checked={data.cod22 === 2}
              onChange={(e) => setData("cod22", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Ciliate")}
              name="cod22"
              value="3"
              checked={data.cod22 === 3}
              onChange={(e) => setData("cod22", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod23")} error={errors.cod23}>
          <RadioGroup gridCols="grid-cols-3">
            <RadioGroupItem
              label={t("Sparse")}
              image="/images/access/presenca_tricomas_folha_1.png"
              name="cod23"
              value="3"
              checked={data.cod23 === 3}
              onChange={(e) => setData("cod23", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Intermediate")}
              image="/images/access/presenca_tricomas_folha_2.png"
              name="cod23"
              value="5"
              checked={data.cod23 === 5}
              onChange={(e) => setData("cod23", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("Dense")}
              image="/images/access/presenca_tricomas_folha_3.png"
              name="cod23"
              value="7"
              checked={data.cod23 === 7}
              onChange={(e) => setData("cod23", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod24")} error={errors.cod24}>
            <Input
              type="number"
              name="cod24"
              value={data.cod24}
              onChange={(e) => setData("cod24", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>

          <FormField label={t("cod25")} error={errors.cod25}>
            <Input
              type="number"
              name="cod25"
              value={data.cod25}
              onChange={(e) => setData("cod25", Number(e.target.value))}
              maxLength={50}
            />
          </FormField>
        </div>
      </div>
    </div>
  );
};

export default VegetativePhase;
