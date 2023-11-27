import FormField from "@/Components/FormField";
import { ISeedlingPhase } from "@/types";
import { useTranslation } from "react-i18next";

const SeedlingPhase = ({ seedlingPhase }: { seedlingPhase: ISeedlingPhase }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 flex overflow-hidden rounded-lg bg-white p-6 shadow">
      <div className="w-1/3">
        <div className="font-semibold">{t("Seedling phase")}</div>
      </div>

      <div className="flex w-2/3 flex-col gap-8">
        <div className="grid grid-cols-2 gap-6">
          <FormField label={t("cod1")}>
            {seedlingPhase.cod1 === 1 && <div>{t("White")}</div>}
            {seedlingPhase.cod1 === 2 && <div>{t("Green")}</div>}
            {seedlingPhase.cod1 === 3 && <div>{t("Purple")}</div>}
            {seedlingPhase.cod1 === null && <div>-</div>}
          </FormField>

          <FormField label={t("cod2")}>
            {seedlingPhase.cod2 === 3 && <div>{t("Sparse")}</div>}
            {seedlingPhase.cod2 === 5 && <div>{t("Intermediate")}</div>}
            {seedlingPhase.cod2 === 7 && <div>{t("Dense")}</div>}
            {seedlingPhase.cod2 === null && <div>-</div>}
          </FormField>
        </div>

        <FormField label={t("cod3")}>
          {seedlingPhase.cod3 === 1 && <div>{t("Light green")}</div>}
          {seedlingPhase.cod3 === 2 && <div>{t("Green")}</div>}
          {seedlingPhase.cod3 === 3 && <div>{t("Dark green")}</div>}
          {seedlingPhase.cod3 === 4 && <div>{t("Light purple")}</div>}
          {seedlingPhase.cod3 === 5 && <div>{t("Purple")}</div>}
          {seedlingPhase.cod3 === 6 && <div>{t("Dark purple")}</div>}
          {seedlingPhase.cod3 === 7 && <div>{t("Variegated")}</div>}
          {seedlingPhase.cod3 === 8 && <div>{t("Yellow")}</div>}
          {seedlingPhase.cod3 === 9 && <div>{t("Others")}</div>}
          {seedlingPhase.cod3 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod4")}>
          {seedlingPhase.cod4 === 1 && (
            <div>
              <img className="w-24" src="/images/access/forma_cotiledone_foliar_1.png" />
              <div>{t("Deltoid")}</div>
            </div>
          )}

          {seedlingPhase.cod4 === 2 && (
            <div>
              <img className="w-24" src="/images/access/forma_cotiledone_foliar_2.png" />
              <div>{t("Ovate")}</div>
            </div>
          )}

          {seedlingPhase.cod4 === 3 && (
            <div>
              <img className="w-24" src="/images/access/forma_cotiledone_foliar_3.png" />
              <div>{t("Lanceolate")}</div>
            </div>
          )}

          {seedlingPhase.cod4 === 4 && (
            <div>
              <img className="w-24" src="/images/access/forma_cotiledone_foliar_4.png" />
              <div>{t("Elong-deltoid")}</div>
            </div>
          )}

          {seedlingPhase.cod4 === null && <div>-</div>}
        </FormField>

        <div className="grid grid-cols-2 gap-6">
          <FormField label={t("cod5")}>
            <div>{seedlingPhase.cod5 ?? "-"}</div>
          </FormField>

          <FormField label={t("cod6")}>
            <div>{seedlingPhase.cod6 ?? "-"}</div>
          </FormField>
        </div>
      </div>
    </div>
  );
};

export default SeedlingPhase;
