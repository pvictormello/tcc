import FormField from "@/Components/FormField";
import { IVegetativePhase } from "@/types";
import { useTranslation } from "react-i18next";

const VegetativePhase = ({ vegetativePhase }: { vegetativePhase: IVegetativePhase }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 flex overflow-hidden rounded-lg bg-white p-6 shadow">
      <div className="w-1/3">
        <div className="font-semibold">{t("Vegetative phase")}</div>
      </div>
      <div className="flex w-2/3 flex-col gap-8">
        <div className="grid grid-cols-2 gap-6">
          <FormField label={t("cod7")}>
            {vegetativePhase.cod7 === 1 && <div>{t("Annual")}</div>}

            {vegetativePhase.cod7 === 2 && <div>{t("Biennial")}</div>}

            {vegetativePhase.cod7 === 3 && <div>{t("Perennial")}</div>}

            {vegetativePhase.cod7 === null && <div>-</div>}
          </FormField>

          <FormField label={t("cod8")}>
            {vegetativePhase.cod8 === 1 && <div>{t("Green")}</div>}

            {vegetativePhase.cod8 === 2 && <div>{t("Green with purple stripes")}</div>}

            {vegetativePhase.cod8 === 3 && <div>{t("Purple")}</div>}

            {vegetativePhase.cod8 === 4 && <div>{t("Others")}</div>}

            {vegetativePhase.cod8 === null && <div>-</div>}
          </FormField>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <FormField label={t("cod9")}>
            {vegetativePhase.cod9 === 1 && <div>{t("Green")}</div>}

            {vegetativePhase.cod9 === 3 && <div>{t("Light purple")}</div>}

            {vegetativePhase.cod9 === 5 && <div>{t("Purple")}</div>}

            {vegetativePhase.cod9 === 7 && <div>{t("Dark purple")}</div>}

            {vegetativePhase.cod9 === null && <div>-</div>}
          </FormField>

          <FormField label={t("cod10")}>
            {vegetativePhase.cod10 === 1 && <div>{t("Cylindrical")}</div>}

            {vegetativePhase.cod10 === 2 && <div>{t("Angled")}</div>}

            {vegetativePhase.cod10 === 3 && <div>{t("Flattened")}</div>}

            {vegetativePhase.cod10 === null && <div>-</div>}
          </FormField>
        </div>

        <FormField label={t("cod11")}>
          {vegetativePhase.cod11 === 3 && (
            <div>
              <img className="w-24" src="/images/access/tricomas_caule_1.png" />
              <div>{t("Sparse")}</div>
            </div>
          )}

          {vegetativePhase.cod11 === 5 && (
            <div>
              <img className="w-24" src="/images/access/tricomas_caule_2.png" />
              <div>{t("Intermediate")}</div>
            </div>
          )}

          {vegetativePhase.cod11 === 7 && (
            <div>
              <img className="w-24" src="/images/access/tricomas_caule_3.png" />
              <div>{t("Dense")}</div>
            </div>
          )}

          {vegetativePhase.cod11 === null && <div>-</div>}
        </FormField>

        <div className="grid grid-cols-2 gap-6">
          <FormField label={t("cod12")}>
            {vegetativePhase.cod12 === 1 && <div>{t("< 25")}</div>}

            {vegetativePhase.cod12 === 2 && <div>{t("25 - 45")}</div>}

            {vegetativePhase.cod12 === 3 && <div>{t("46 - 65")}</div>}

            {vegetativePhase.cod12 === 4 && <div>{t("66 - 85")}</div>}

            {vegetativePhase.cod12 === 5 && <div>{t("> 85")}</div>}

            {vegetativePhase.cod12 === null && <div>-</div>}
          </FormField>

          <FormField label={t("cod13")}>
            {vegetativePhase.cod13 === 3 && <div>{t("Prostrate")}</div>}

            {vegetativePhase.cod13 === 5 && <div>{t("Intermediate")}</div>}

            {vegetativePhase.cod13 === 7 && <div>{t("Erect")}</div>}

            {vegetativePhase.cod13 === 9 && <div>{t("Others")}</div>}

            {vegetativePhase.cod13 === null && <div>-</div>}
          </FormField>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <FormField label={t("cod14")}>
            <div>{vegetativePhase.cod14 ?? "-"}</div>
          </FormField>

          <FormField label={t("cod15")}>
            <div>{vegetativePhase.cod15 ?? "-"}</div>
          </FormField>

          <FormField label={t("cod16")}>
            <div>{vegetativePhase.cod16 ?? "-"}</div>
          </FormField>
        </div>

        <FormField label={t("cod17")}>
          {vegetativePhase.cod17 === 3 && (
            <div>
              <img className="w-24" src="/images/access/habito_ramificacao_1.png" />
              <div>{t("Sparse")}</div>
            </div>
          )}

          {vegetativePhase.cod17 === 5 && (
            <div>
              <img className="w-24" src="/images/access/habito_ramificacao_2.png" />
              <div>{t("Intermediate")}</div>
            </div>
          )}

          {vegetativePhase.cod17 === 7 && (
            <div>
              <img className="w-24" src="/images/access/habito_ramificacao_3.png" />
              <div>{t("Dense")}</div>
            </div>
          )}

          {vegetativePhase.cod17 === null && <div>-</div>}
        </FormField>

        <div className="grid grid-cols-2 gap-6">
          <FormField label={t("cod18")}>
            {vegetativePhase.cod18 === 3 && <div>{t("Sparse")}</div>}

            {vegetativePhase.cod18 === 5 && <div>{t("Intermediate")}</div>}

            {vegetativePhase.cod18 === 7 && <div>{t("Dense")}</div>}

            {vegetativePhase.cod18 === null && <div>-</div>}
          </FormField>

          <FormField label={t("cod19")}>
            {vegetativePhase.cod19 === 3 && <div>{t("Sparse")}</div>}

            {vegetativePhase.cod19 === 5 && <div>{t("Intermediate")}</div>}

            {vegetativePhase.cod19 === 7 && <div>{t("Dense")}</div>}

            {vegetativePhase.cod19 === null && <div>-</div>}
          </FormField>
        </div>

        <FormField label={t("cod20")}>
          {vegetativePhase.cod20 === 1 && <div>{t("Yellow")}</div>}

          {vegetativePhase.cod20 === 2 && <div>{t("Light green")}</div>}

          {vegetativePhase.cod20 === 3 && <div>{t("Green")}</div>}

          {vegetativePhase.cod20 === 4 && <div>{t("Dark green")}</div>}

          {vegetativePhase.cod20 === 5 && <div>{t("Light purple")}</div>}

          {vegetativePhase.cod20 === 6 && <div>{t("Purple")}</div>}

          {vegetativePhase.cod20 === 7 && <div>{t("Variegated")}</div>}

          {vegetativePhase.cod20 === 8 && <div>{t("Others")}</div>}

          {vegetativePhase.cod20 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod21")}>
          {vegetativePhase.cod21 === 1 && (
            <div>
              <img className="w-24" src="/images/access/forma_folha_1.png" />
              <div>{t("Deltoid")}</div>
            </div>
          )}

          {vegetativePhase.cod21 === 2 && (
            <div>
              <img className="w-24" src="/images/access/forma_folha_2.png" />
              <div>{t("Ovate")}</div>
            </div>
          )}

          {vegetativePhase.cod21 === 3 && (
            <div>
              <img className="w-24" src="/images/access/forma_folha_3.png" />
              <div>{t("Lanceolate")}</div>
            </div>
          )}

          {vegetativePhase.cod21 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod22")}>
          {vegetativePhase.cod22 === 1 && <div>{t("Entire")}</div>}

          {vegetativePhase.cod22 === 2 && <div>{t("Ondulate")}</div>}

          {vegetativePhase.cod22 === 3 && <div>{t("Ciliate")}</div>}

          {vegetativePhase.cod22 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod23")}>
          {vegetativePhase.cod23 === 3 && (
            <div>
              <img className="w-24" src="/images/access/presenca_tricomas_folha_1.png" />
              <div>{t("Sparse")}</div>
            </div>
          )}

          {vegetativePhase.cod23 === 5 && (
            <div>
              <img className="w-24" src="/images/access/presenca_tricomas_folha_2.png" />
              <div>{t("Intermediate")}</div>
            </div>
          )}

          {vegetativePhase.cod23 === 7 && (
            <div>
              <img className="w-24" src="/images/access/presenca_tricomas_folha_3.png" />
              <div>{t("Dense")}</div>
            </div>
          )}

          {vegetativePhase.cod23 === null && <div>-</div>}
        </FormField>

        <div className="grid grid-cols-2 gap-6">
          <FormField label={t("cod24")}>
            <div>{vegetativePhase.cod24 ?? "-"}</div>
          </FormField>

          <FormField label={t("cod25")}>
            <div>{vegetativePhase.cod25 ?? "-"}</div>
          </FormField>
        </div>
      </div>
    </div>
  );
};

export default VegetativePhase;
