import FormField from "@/Components/FormField";
import Input from "@/Components/Input";
import RadioGroup, { RadioGroupItem } from "@/Components/RadioGroup";
import { AccessFormProps } from "@/types";
import { t } from "i18next";

const ReproductivePhase = ({ data, setData, errors }: AccessFormProps) => {
  return (
    <div className="flex border-b border-gray-200 pb-8">
      <div className="w-1/3">
        <div className="font-semibold">{t("Vegetative phase")}</div>
      </div>
      <div className="flex w-2/3 flex-col gap-12">
        <FormField label={t("cod26")} error={errors.cod26}>
          <Input
            type="number"
            name="cod26"
            value={data.cod26}
            onChange={(e) => setData("cod26", Number(e.target.value))}
            maxLength={30}
          />
        </FormField>

        <FormField label={t("cod27")} error={errors.cod27}>
          <RadioGroup gridCols="grid-cols-5">
            <RadioGroupItem
              label={t("cod27")}
              name="cod27"
              value="1"
              checked={data.cod27 === 1}
              onChange={(e) => setData("cod27", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod27")}
              name="cod27"
              value="2"
              checked={data.cod27 === 2}
              onChange={(e) => setData("cod27", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod27")}
              name="cod27"
              value="3"
              checked={data.cod27 === 3}
              onChange={(e) => setData("cod27", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod27")}
              name="cod27"
              value="4"
              checked={data.cod27 === 4}
              onChange={(e) => setData("cod27", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod27")}
              name="cod27"
              value="5"
              checked={data.cod27 === 5}
              onChange={(e) => setData("cod27", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod28")} error={errors.cod28}>
          <RadioGroup gridCols="grid-cols-3">
            <RadioGroupItem
              label={t("cod28")}
              image="/images/access/posicao_flor_1.png"
              name="cod28"
              value="3"
              checked={data.cod28 === 3}
              onChange={(e) => setData("cod28", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod28")}
              image="/images/access/posicao_flor_2.png"
              name="cod28"
              value="5"
              checked={data.cod28 === 5}
              onChange={(e) => setData("cod28", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod28")}
              image="/images/access/posicao_flor_3.png"
              name="cod28"
              value="7"
              checked={data.cod28 === 7}
              onChange={(e) => setData("cod28", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod29")} error={errors.cod29}>
          <RadioGroup gridCols="grid-cols-9">
            <RadioGroupItem
              label={t("cod29")}
              name="cod29"
              value="1"
              checked={data.cod29 === 1}
              onChange={(e) => setData("cod29", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod29")}
              name="cod29"
              value="2"
              checked={data.cod29 === 2}
              onChange={(e) => setData("cod29", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod29")}
              name="cod29"
              value="3"
              checked={data.cod29 === 3}
              onChange={(e) => setData("cod29", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod29")}
              name="cod29"
              value="4"
              checked={data.cod29 === 4}
              onChange={(e) => setData("cod29", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod29")}
              name="cod29"
              value="5"
              checked={data.cod29 === 5}
              onChange={(e) => setData("cod29", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod29")}
              name="cod29"
              value="6"
              checked={data.cod29 === 6}
              onChange={(e) => setData("cod29", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod29")}
              name="cod29"
              value="7"
              checked={data.cod29 === 7}
              onChange={(e) => setData("cod29", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod29")}
              name="cod29"
              value="8"
              checked={data.cod29 === 8}
              onChange={(e) => setData("cod29", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod29")}
              name="cod29"
              value="9"
              checked={data.cod29 === 9}
              onChange={(e) => setData("cod29", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod30")} error={errors.cod30}>
          <RadioGroup gridCols="grid-cols-6">
            <RadioGroupItem
              label={t("cod30")}
              name="cod30"
              value="1"
              checked={data.cod30 === 1}
              onChange={(e) => setData("cod30", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod30")}
              name="cod30"
              value="2"
              checked={data.cod30 === 2}
              onChange={(e) => setData("cod30", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod30")}
              name="cod30"
              value="3"
              checked={data.cod30 === 3}
              onChange={(e) => setData("cod30", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod30")}
              name="cod30"
              value="4"
              checked={data.cod30 === 4}
              onChange={(e) => setData("cod30", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod30")}
              name="cod30"
              value="5"
              checked={data.cod30 === 5}
              onChange={(e) => setData("cod30", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod30")}
              name="cod30"
              value="6"
              checked={data.cod30 === 6}
              onChange={(e) => setData("cod30", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod31")} error={errors.cod31}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("cod31")}
                name="cod31"
                value="1"
                checked={data.cod31 === 1}
                onChange={(e) => setData("cod31", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod31")}
                name="cod31"
                value="2"
                checked={data.cod31 === 2}
                onChange={(e) => setData("cod31", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod31")}
                name="cod31"
                value="3"
                checked={data.cod31 === 3}
                onChange={(e) => setData("cod31", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>

          <FormField label={t("cod32")} error={errors.cod32}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("cod32")}
                name="cod32"
                value="1"
                checked={data.cod32 === 1}
                onChange={(e) => setData("cod32", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod32")}
                name="cod32"
                value="2"
                checked={data.cod32 === 2}
                onChange={(e) => setData("cod32", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod32")}
                name="cod32"
                value="3"
                checked={data.cod32 === 3}
                onChange={(e) => setData("cod32", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>
        </div>

        <FormField label={t("cod33")} error={errors.cod33}>
          <RadioGroup gridCols="grid-cols-6">
            <RadioGroupItem
              label={t("cod33")}
              name="cod33"
              value="1"
              checked={data.cod33 === 1}
              onChange={(e) => setData("cod33", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod33")}
              name="cod33"
              value="2"
              checked={data.cod33 === 2}
              onChange={(e) => setData("cod33", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod33")}
              name="cod33"
              value="3"
              checked={data.cod33 === 3}
              onChange={(e) => setData("cod33", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod33")}
              name="cod33"
              value="4"
              checked={data.cod33 === 4}
              onChange={(e) => setData("cod33", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod33")}
              name="cod33"
              value="5"
              checked={data.cod33 === 5}
              onChange={(e) => setData("cod33", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod33")}
              name="cod33"
              value="6"
              checked={data.cod33 === 6}
              onChange={(e) => setData("cod33", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod35")} error={errors.cod35}>
          <RadioGroup gridCols="grid-cols-7">
            <RadioGroupItem
              label={t("cod35")}
              name="cod35"
              value="1"
              checked={data.cod35 === 1}
              onChange={(e) => setData("cod35", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod35")}
              name="cod35"
              value="2"
              checked={data.cod35 === 2}
              onChange={(e) => setData("cod35", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod35")}
              name="cod35"
              value="3"
              checked={data.cod35 === 3}
              onChange={(e) => setData("cod35", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod35")}
              name="cod35"
              value="4"
              checked={data.cod35 === 4}
              onChange={(e) => setData("cod35", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod35")}
              name="cod35"
              value="5"
              checked={data.cod35 === 5}
              onChange={(e) => setData("cod35", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod35")}
              name="cod35"
              value="6"
              checked={data.cod35 === 6}
              onChange={(e) => setData("cod35", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod35")}
              name="cod35"
              value="7"
              checked={data.cod35 === 7}
              onChange={(e) => setData("cod35", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod34")} error={errors.cod34}>
            <Input
              type="number"
              name="cod34"
              value={data.cod34}
              onChange={(e) => setData("cod34", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>

          <FormField label={t("cod36")} error={errors.cod36}>
            <Input
              type="number"
              name="cod36"
              value={data.cod36}
              onChange={(e) => setData("cod36", Number(e.target.value))}
              maxLength={50}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-3 gap-12">
          <FormField label={t("cod37")} error={errors.cod37}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("cod37")}
                name="cod37"
                value="3"
                checked={data.cod37 === 3}
                onChange={(e) => setData("cod37", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod37")}
                name="cod37"
                value="5"
                checked={data.cod37 === 5}
                onChange={(e) => setData("cod37", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod37")}
                name="cod37"
                value="7"
                checked={data.cod37 === 7}
                onChange={(e) => setData("cod37", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>

          <FormField label={t("cod38")} error={errors.cod38}>
            <RadioGroup gridCols="grid-cols-2">
              <RadioGroupItem
                label={t("cod38")}
                name="cod38"
                value="1"
                checked={data.cod38 === 1}
                onChange={(e) => setData("cod38", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod38")}
                name="cod38"
                value="2"
                checked={data.cod38 === 2}
                onChange={(e) => setData("cod38", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>

          <FormField label={t("cod39")} error={errors.cod39}>
            <RadioGroup gridCols="grid-cols-2">
              <RadioGroupItem
                label={t("cod39")}
                name="cod39"
                value="1"
                checked={data.cod39 === 1}
                onChange={(e) => setData("cod39", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod39")}
                name="cod39"
                value="2"
                checked={data.cod39 === 2}
                onChange={(e) => setData("cod39", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>
        </div>

        <FormField label={t("cod40")} error={errors.cod40}>
          <RadioGroup gridCols="grid-cols-4">
            <RadioGroupItem
              label={t("cod40")}
              image="/images/access/margem_calice_1.png"
              name="cod40"
              value="1"
              checked={data.cod40 === 1}
              onChange={(e) => setData("cod40", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod40")}
              image="/images/access/margem_calice_2.png"
              name="cod40"
              value="2"
              checked={data.cod40 === 2}
              onChange={(e) => setData("cod40", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod40")}
              image="/images/access/margem_calice_3.png"
              name="cod40"
              value="3"
              checked={data.cod40 === 3}
              onChange={(e) => setData("cod40", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod40")}
              name="cod40"
              value="4"
              checked={data.cod40 === 4}
              onChange={(e) => setData("cod40", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod41")} error={errors.cod41}>
          <RadioGroup gridCols="grid-cols-2">
            <RadioGroupItem
              label={t("cod41")}
              image="/images/access/constituicao_anelar_calice_1.png"
              name="cod41"
              value="0"
              checked={data.cod41 === 0}
              onChange={(e) => setData("cod41", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod41")}
              image="/images/access/constituicao_anelar_calice_2.png"
              name="cod41"
              value="1"
              checked={data.cod41 === 1}
              onChange={(e) => setData("cod41", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod42")} error={errors.cod42}>
            <Input
              type="number"
              name="cod42"
              value={data.cod42}
              onChange={(e) => setData("cod42", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>

          <FormField label={t("cod46")} error={errors.cod46}>
            <Input
              type="number"
              name="cod46"
              value={data.cod46}
              onChange={(e) => setData("cod46", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod43")} error={errors.cod43}>
            <RadioGroup gridCols="grid-cols-2">
              <RadioGroupItem
                label={t("cod43")}
                name="cod43"
                value="1"
                checked={data.cod43 === 1}
                onChange={(e) => setData("cod43", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod43")}
                name="cod43"
                value="1"
                checked={data.cod43 === 1}
                onChange={(e) => setData("cod43", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>

          <FormField label={t("cod45")} error={errors.cod45}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("cod45")}
                name="cod45"
                value="3"
                checked={data.cod45 === 3}
                onChange={(e) => setData("cod45", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod45")}
                name="cod45"
                value="5"
                checked={data.cod45 === 5}
                onChange={(e) => setData("cod45", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod45")}
                name="cod45"
                value="7"
                checked={data.cod45 === 7}
                onChange={(e) => setData("cod45", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>
        </div>

        <FormField label={t("cod44")} error={errors.cod44}>
          <RadioGroup gridCols="grid-cols-7">
            <RadioGroupItem
              label={t("cod44")}
              name="cod44"
              value="1"
              checked={data.cod44 === 1}
              onChange={(e) => setData("cod44", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod44")}
              name="cod44"
              value="2"
              checked={data.cod44 === 2}
              onChange={(e) => setData("cod44", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod44")}
              name="cod44"
              value="3"
              checked={data.cod44 === 3}
              onChange={(e) => setData("cod44", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod44")}
              name="cod44"
              value="4"
              checked={data.cod44 === 4}
              onChange={(e) => setData("cod44", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod44")}
              name="cod44"
              value="5"
              checked={data.cod44 === 5}
              onChange={(e) => setData("cod44", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod44")}
              name="cod44"
              value="6"
              checked={data.cod44 === 6}
              onChange={(e) => setData("cod44", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod44")}
              name="cod44"
              value="7"
              checked={data.cod44 === 7}
              onChange={(e) => setData("cod44", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod47")} error={errors.cod47}>
          <RadioGroup gridCols="grid-cols-7">
            <RadioGroupItem
              label={t("cod47")}
              name="cod47"
              value="1"
              checked={data.cod47 === 1}
              onChange={(e) => setData("cod47", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod47")}
              name="cod47"
              value="2"
              checked={data.cod47 === 2}
              onChange={(e) => setData("cod47", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod47")}
              name="cod47"
              value="3"
              checked={data.cod47 === 3}
              onChange={(e) => setData("cod47", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod47")}
              name="cod47"
              value="4"
              checked={data.cod47 === 4}
              onChange={(e) => setData("cod47", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod47")}
              name="cod47"
              value="5"
              checked={data.cod47 === 5}
              onChange={(e) => setData("cod47", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod47")}
              name="cod47"
              value="6"
              checked={data.cod47 === 6}
              onChange={(e) => setData("cod47", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod47")}
              name="cod47"
              value="7"
              checked={data.cod47 === 7}
              onChange={(e) => setData("cod47", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod47")}
              name="cod47"
              value="8"
              checked={data.cod47 === 8}
              onChange={(e) => setData("cod47", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod47")}
              name="cod47"
              value="9"
              checked={data.cod47 === 9}
              onChange={(e) => setData("cod47", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod47")}
              name="cod47"
              value="10"
              checked={data.cod47 === 10}
              onChange={(e) => setData("cod47", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod47")}
              name="cod47"
              value="11"
              checked={data.cod47 === 11}
              onChange={(e) => setData("cod47", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod47")}
              name="cod47"
              value="12"
              checked={data.cod47 === 12}
              onChange={(e) => setData("cod47", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod47")}
              name="cod47"
              value="13"
              checked={data.cod47 === 13}
              onChange={(e) => setData("cod47", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod48")} error={errors.cod48}>
          <RadioGroup gridCols="grid-cols-3">
            <RadioGroupItem
              label={t("cod48")}
              image="/images/access/forma_fruto_1.png"
              name="cod48"
              value="1"
              checked={data.cod48 === 1}
              onChange={(e) => setData("cod48", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod48")}
              image="/images/access/forma_fruto_2.png"
              name="cod48"
              value="2"
              checked={data.cod48 === 2}
              onChange={(e) => setData("cod48", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod48")}
              image="/images/access/forma_fruto_3.png"
              name="cod48"
              value="3"
              checked={data.cod48 === 3}
              onChange={(e) => setData("cod48", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod48")}
              image="/images/access/forma_fruto_4.png"
              name="cod48"
              value="4"
              checked={data.cod48 === 4}
              onChange={(e) => setData("cod48", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod48")}
              image="/images/access/forma_fruto_5.png"
              name="cod48"
              value="5"
              checked={data.cod48 === 5}
              onChange={(e) => setData("cod48", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod48")}
              name="cod48"
              value="6"
              checked={data.cod48 === 6}
              onChange={(e) => setData("cod48", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <div className="grid grid-cols-3 gap-12">
          <FormField label={t("cod49")} error={errors.cod49}>
            <Input
              type="number"
              name="cod49"
              value={data.cod49}
              onChange={(e) => setData("cod49", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>

          <FormField label={t("cod50")} error={errors.cod50}>
            <Input
              type="number"
              name="cod50"
              value={data.cod50}
              onChange={(e) => setData("cod50", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>

          <FormField label={t("cod51")} error={errors.cod51}>
            <Input
              type="number"
              name="cod51"
              value={data.cod51}
              onChange={(e) => setData("cod51", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod52")} error={errors.cod52}>
            <Input
              type="number"
              name="cod52"
              value={data.cod52}
              onChange={(e) => setData("cod52", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>

          <FormField label={t("cod53")} error={errors.cod53}>
            <Input
              type="number"
              name="cod53"
              value={data.cod53}
              onChange={(e) => setData("cod53", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>
        </div>

        <FormField label={t("cod54")} error={errors.cod54}>
          <RadioGroup gridCols="grid-cols-5">
            <RadioGroupItem
              label={t("cod54")}
              image="/images/access/forma_fruto_uniao_pedicelo_1.png"
              name="cod54"
              value="1"
              checked={data.cod54 === 1}
              onChange={(e) => setData("cod54", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod54")}
              image="/images/access/forma_fruto_uniao_pedicelo_2.png"
              name="cod54"
              value="2"
              checked={data.cod54 === 2}
              onChange={(e) => setData("cod54", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod54")}
              image="/images/access/forma_fruto_uniao_pedicelo_3.png"
              name="cod54"
              value="3"
              checked={data.cod54 === 3}
              onChange={(e) => setData("cod54", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod54")}
              image="/images/access/forma_fruto_uniao_pedicelo_4.png"
              name="cod54"
              value="4"
              checked={data.cod54 === 4}
              onChange={(e) => setData("cod54", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod54")}
              image="/images/access/forma_fruto_uniao_pedicelo_5.png"
              name="cod54"
              value="5"
              checked={data.cod54 === 5}
              onChange={(e) => setData("cod54", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod55")} error={errors.cod55}>
          <RadioGroup gridCols="grid-cols-2">
            <RadioGroupItem
              label={t("cod55")}
              image="/images/access/colo_base_fruto_1.png"
              name="cod55"
              value="1"
              checked={data.cod55 === 1}
              onChange={(e) => setData("cod55", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod55")}
              image="/images/access/colo_base_fruto_2.png"
              name="cod55"
              value="2"
              checked={data.cod55 === 2}
              onChange={(e) => setData("cod55", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod56")} error={errors.cod56}>
          <RadioGroup gridCols="grid-cols-5">
            <RadioGroupItem
              label={t("cod56")}
              image="/images/access/forma_apice_fruto_1.png"
              name="cod56"
              value="1"
              checked={data.cod56 === 1}
              onChange={(e) => setData("cod56", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod56")}
              image="/images/access/forma_apice_fruto_2.png"
              name="cod56"
              value="2"
              checked={data.cod56 === 2}
              onChange={(e) => setData("cod56", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod56")}
              image="/images/access/forma_apice_fruto_3.png"
              name="cod56"
              value="3"
              checked={data.cod56 === 3}
              onChange={(e) => setData("cod56", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod56")}
              image="/images/access/forma_apice_fruto_4.png"
              name="cod56"
              value="4"
              checked={data.cod56 === 4}
              onChange={(e) => setData("cod56", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod56")}
              name="cod56"
              value="5"
              checked={data.cod56 === 5}
              onChange={(e) => setData("cod56", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod57")} error={errors.cod57}>
          <RadioGroup gridCols="grid-cols-2">
            <RadioGroupItem
              label={t("cod57")}
              name="cod57"
              value="1"
              checked={data.cod57 === 1}
              onChange={(e) => setData("cod57", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod57")}
              name="cod57"
              value="2"
              checked={data.cod57 === 2}
              onChange={(e) => setData("cod57", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod58")} error={errors.cod58}>
          <RadioGroup gridCols="grid-cols-3">
            <RadioGroupItem
              label={t("cod58")}
              image="/images/access/enrugamento_transversal_fruto_1.png"
              name="cod58"
              value="3"
              checked={data.cod58 === 3}
              onChange={(e) => setData("cod58", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod58")}
              image="/images/access/enrugamento_transversal_fruto_2.png"
              name="cod58"
              value="5"
              checked={data.cod58 === 5}
              onChange={(e) => setData("cod58", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod58")}
              image="/images/access/enrugamento_transversal_fruto_3.png"
              name="cod58"
              value="7"
              checked={data.cod58 === 7}
              onChange={(e) => setData("cod58", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>

        <FormField label={t("cod59")} error={errors.cod59}>
          <Input
            type="number"
            name="cod59"
            value={data.cod59}
            onChange={(e) => setData("cod59", Number(e.target.value))}
            maxLength={30}
          />
        </FormField>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod60")} error={errors.cod60}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("cod60")}
                name="cod60"
                value="1"
                checked={data.cod60 === 1}
                onChange={(e) => setData("cod60", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod60")}
                name="cod60"
                value="2"
                checked={data.cod60 === 2}
                onChange={(e) => setData("cod60", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod60")}
                name="cod60"
                value="3"
                checked={data.cod60 === 3}
                onChange={(e) => setData("cod60", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>

          <FormField label={t("cod63")} error={errors.cod63}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("cod63")}
                name="cod63"
                value="1"
                checked={data.cod63 === 1}
                onChange={(e) => setData("cod63", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod63")}
                name="cod63"
                value="2"
                checked={data.cod63 === 2}
                onChange={(e) => setData("cod63", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod63")}
                name="cod63"
                value="3"
                checked={data.cod63 === 3}
                onChange={(e) => setData("cod63", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod61")} error={errors.cod61}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("cod61")}
                name="cod61"
                value="3"
                checked={data.cod61 === 3}
                onChange={(e) => setData("cod61", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod61")}
                name="cod61"
                value="5"
                checked={data.cod61 === 5}
                onChange={(e) => setData("cod61", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod61")}
                name="cod61"
                value="7"
                checked={data.cod61 === 7}
                onChange={(e) => setData("cod61", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>

          <FormField label={t("cod62")} error={errors.cod62}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("cod62")}
                name="cod62"
                value="3"
                checked={data.cod62 === 3}
                onChange={(e) => setData("cod62", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod62")}
                name="cod62"
                value="5"
                checked={data.cod62 === 5}
                onChange={(e) => setData("cod62", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod62")}
                name="cod62"
                value="7"
                checked={data.cod62 === 7}
                onChange={(e) => setData("cod62", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod64")} error={errors.cod64}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("cod64")}
                name="cod64"
                value="3"
                checked={data.cod64 === 3}
                onChange={(e) => setData("cod64", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod64")}
                name="cod64"
                value="5"
                checked={data.cod64 === 5}
                onChange={(e) => setData("cod64", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod64")}
                name="cod64"
                value="7"
                checked={data.cod64 === 7}
                onChange={(e) => setData("cod64", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>

          <FormField label={t("cod65")} error={errors.cod65}>
            <RadioGroup gridCols="grid-cols-4">
              <RadioGroupItem
                label={t("cod65")}
                name="cod65"
                value="1"
                checked={data.cod65 === 1}
                onChange={(e) => setData("cod65", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod65")}
                name="cod65"
                value="2"
                checked={data.cod65 === 2}
                onChange={(e) => setData("cod65", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod65")}
                name="cod65"
                value="3"
                checked={data.cod65 === 3}
                onChange={(e) => setData("cod65", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod65")}
                name="cod65"
                value="4"
                checked={data.cod65 === 4}
                onChange={(e) => setData("cod65", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod66")} error={errors.cod66}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("cod66")}
                name="cod66"
                value="1"
                checked={data.cod66 === 1}
                onChange={(e) => setData("cod66", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod66")}
                name="cod66"
                value="2"
                checked={data.cod66 === 2}
                onChange={(e) => setData("cod66", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod66")}
                name="cod66"
                value="3"
                checked={data.cod66 === 3}
                onChange={(e) => setData("cod66", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>

          <FormField label={t("cod67")} error={errors.cod67}>
            <RadioGroup gridCols="grid-cols-3">
              <RadioGroupItem
                label={t("cod67")}
                name="cod67"
                value="3"
                checked={data.cod67 === 3}
                onChange={(e) => setData("cod67", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod67")}
                name="cod67"
                value="5"
                checked={data.cod67 === 5}
                onChange={(e) => setData("cod67", Number(e.target.value))}
              />

              <RadioGroupItem
                label={t("cod67")}
                name="cod67"
                value="7"
                checked={data.cod67 === 7}
                onChange={(e) => setData("cod67", Number(e.target.value))}
              />
            </RadioGroup>
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <FormField label={t("cod68")} error={errors.cod68}>
            <Input
              type="number"
              name="cod68"
              value={data.cod68}
              onChange={(e) => setData("cod68", Number(e.target.value))}
              maxLength={30}
            />
          </FormField>

          <FormField label={t("cod69")} error={errors.cod69}>
            <Input
              type="number"
              name="cod69"
              value={data.cod69}
              onChange={(e) => setData("cod69", Number(e.target.value))}
              maxLength={50}
            />
          </FormField>
        </div>

        <FormField label={t("cod70")} error={errors.cod70}>
          <RadioGroup gridCols="grid-cols-3">
            <RadioGroupItem
              label={t("cod70")}
              name="cod70"
              value="1"
              checked={data.cod70 === 1}
              onChange={(e) => setData("cod70", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod70")}
              name="cod70"
              value="2"
              checked={data.cod70 === 2}
              onChange={(e) => setData("cod70", Number(e.target.value))}
            />

            <RadioGroupItem
              label={t("cod70")}
              name="cod70"
              value="3"
              checked={data.cod70 === 3}
              onChange={(e) => setData("cod70", Number(e.target.value))}
            />
          </RadioGroup>
        </FormField>
      </div>
    </div>
  );
};

export default ReproductivePhase;
