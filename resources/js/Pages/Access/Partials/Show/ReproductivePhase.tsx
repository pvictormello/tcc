import FormField from "@/Components/FormField";
import { IReproductivePhase } from "@/types";
import { useTranslation } from "react-i18next";

const ReproductivePhase = ({ reproductivePhase }: { reproductivePhase: IReproductivePhase }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 flex flex-col gap-8 overflow-hidden rounded-lg bg-white p-6 shadow md:flex-row md:gap-0">
      <div className="w-full md:w-1/3">
        <div className="font-semibold">{t("Reproductive phase")}</div>
      </div>
      <div className="flex w-full flex-col gap-6 md:w-2/3 md:gap-8">
        <FormField label={t("cod26")}>
          <div>{reproductivePhase.cod26 ?? "-"}</div>
        </FormField>

        <FormField label={t("cod27")}>
          {reproductivePhase.cod27 === 1 && <div>{t("One")}</div>}

          {reproductivePhase.cod27 === 2 && <div>{t("Two")}</div>}

          {reproductivePhase.cod27 === 3 && <div>{t("Three or more")}</div>}

          {reproductivePhase.cod27 === 4 && <div>{t("Many flowers in bunches but each in individual axile")}</div>}

          {reproductivePhase.cod27 === 5 && <div>{t("Other cultivars with two flowers in the first axile")}</div>}

          {reproductivePhase.cod27 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod28")}>
          {reproductivePhase.cod28 === 3 && (
            <div>
              <img className="w-24" src="/images/access/posicao_flor_1.png" />
              <div>{t("Pendant")}</div>
            </div>
          )}

          {reproductivePhase.cod28 === 5 && (
            <div>
              <img className="w-24" src="/images/access/posicao_flor_2.png" />
              <div>{t("Intermediate")}</div>
            </div>
          )}

          {reproductivePhase.cod28 === 7 && (
            <div>
              <img className="w-24" src="/images/access/posicao_flor_3.png" />
              <div>{t("Erect")}</div>
            </div>
          )}

          {reproductivePhase.cod28 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod29")}>
          {reproductivePhase.cod29 === 1 && <div>{t("White")}</div>}

          {reproductivePhase.cod29 === 2 && <div>{t("Light green")}</div>}

          {reproductivePhase.cod29 === 3 && <div>{t("Yellow")}</div>}

          {reproductivePhase.cod29 === 4 && <div>{t("Yellow-green")}</div>}

          {reproductivePhase.cod29 === 5 && <div>{t("Purple with white base")}</div>}

          {reproductivePhase.cod29 === 6 && <div>{t("White with purple base")}</div>}

          {reproductivePhase.cod29 === 7 && <div>{t("White with purple margin")}</div>}

          {reproductivePhase.cod29 === 8 && <div>{t("Purple")}</div>}

          {reproductivePhase.cod29 === 9 && <div>{t("Others")}</div>}

          {reproductivePhase.cod29 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod30")}>
          {reproductivePhase.cod30 === 1 && <div>{t("White")}</div>}

          {reproductivePhase.cod30 === 2 && <div>{t("Yellow")}</div>}

          {reproductivePhase.cod30 === 3 && <div>{t("Yellow-green")}</div>}

          {reproductivePhase.cod30 === 4 && <div>{t("Green")}</div>}

          {reproductivePhase.cod30 === 5 && <div>{t("Purple")}</div>}

          {reproductivePhase.cod30 === 6 && <div>{t("Others")}</div>}

          {reproductivePhase.cod30 === null && <div>-</div>}
        </FormField>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("cod31")}>
            {reproductivePhase.cod31 === 1 && <div>{t("Rotate")}</div>}

            {reproductivePhase.cod31 === 2 && <div>{t("Campanulate")}</div>}

            {reproductivePhase.cod31 === 3 && <div>{t("Others")}</div>}

            {reproductivePhase.cod31 === null && <div>-</div>}
          </FormField>

          <FormField label={t("cod32")}>
            {reproductivePhase.cod32 === 1 && <div>{t("< 15")}</div>}

            {reproductivePhase.cod32 === 2 && <div>{t("15 - 25")}</div>}

            {reproductivePhase.cod32 === 3 && <div>{t("> 25")}</div>}

            {reproductivePhase.cod32 === null && <div>-</div>}
          </FormField>
        </div>

        <FormField label={t("cod33")}>
          {reproductivePhase.cod33 === 1 && <div>{t("White")}</div>}

          {reproductivePhase.cod33 === 2 && <div>{t("Yellow")}</div>}

          {reproductivePhase.cod33 === 3 && <div>{t("Pale blue")}</div>}

          {reproductivePhase.cod33 === 4 && <div>{t("Blue")}</div>}

          {reproductivePhase.cod33 === 5 && <div>{t("Purple")}</div>}

          {reproductivePhase.cod33 === 6 && <div>{t("Others")}</div>}

          {reproductivePhase.cod33 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod35")}>
          {reproductivePhase.cod35 === 1 && <div>{t("White")}</div>}

          {reproductivePhase.cod35 === 2 && <div>{t("Yellow")}</div>}

          {reproductivePhase.cod35 === 3 && <div>{t("Green")}</div>}

          {reproductivePhase.cod35 === 4 && <div>{t("Blue")}</div>}

          {reproductivePhase.cod35 === 5 && <div>{t("Light purple")}</div>}

          {reproductivePhase.cod35 === 6 && <div>{t("Purple")}</div>}

          {reproductivePhase.cod35 === 7 && <div>{t("Others")}</div>}

          {reproductivePhase.cod35 === null && <div>-</div>}
        </FormField>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("cod34")}>
            <div>{reproductivePhase.cod34 ?? "-"}</div>
          </FormField>

          <FormField label={t("cod36")}>
            <div>{reproductivePhase.cod36 ?? "-"}</div>
          </FormField>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <FormField label={t("cod37")}>
            {reproductivePhase.cod37 === 3 && <div>{t("Inserted")}</div>}

            {reproductivePhase.cod37 === 5 && <div>{t("Same level")}</div>}

            {reproductivePhase.cod37 === 7 && <div>{t("Exserted")}</div>}

            {reproductivePhase.cod37 === null && <div>-</div>}
          </FormField>

          <FormField label={t("cod38")}>
            {reproductivePhase.cod38 === 1 && <div>{t("Absent")}</div>}

            {reproductivePhase.cod38 === 2 && <div>{t("Present")}</div>}

            {reproductivePhase.cod38 === null && <div>-</div>}
          </FormField>

          <FormField label={t("cod39")}>
            {reproductivePhase.cod39 === 1 && <div>{t("Absent")}</div>}

            {reproductivePhase.cod39 === 2 && <div>{t("Present")}</div>}

            {reproductivePhase.cod39 === null && <div>-</div>}
          </FormField>
        </div>

        <FormField label={t("cod40")}>
          {reproductivePhase.cod40 === 1 && (
            <div>
              <img className="w-24" src="/images/access/margem_calice_1.png" />
              <div>{t("Whole")}</div>
            </div>
          )}

          {reproductivePhase.cod40 === 2 && (
            <div>
              <img className="w-24" src="/images/access/margem_calice_2.png" />
              <div>{t("Intermediate")}</div>
            </div>
          )}

          {reproductivePhase.cod40 === 3 && (
            <div>
              <img className="w-24" src="/images/access/margem_calice_3.png" />
              <div>{t("Dentate")}</div>
            </div>
          )}

          {reproductivePhase.cod40 === 4 && <div>{t("Others")}</div>}

          {reproductivePhase.cod40 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod41")}>
          {reproductivePhase.cod41 === 1 && (
            <div>
              <img className="w-24" src="/images/access/constituicao_anelar_calice_1.png" />
              <div>{t("Absent")}</div>
            </div>
          )}

          {reproductivePhase.cod41 === 2 && (
            <div>
              <img className="w-24" src="/images/access/constituicao_anelar_calice_2.png" />
              <div>{t("Present")}</div>
            </div>
          )}

          {reproductivePhase.cod41 === null && <div>-</div>}
        </FormField>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("cod42")}>
            <div>{reproductivePhase.cod42 ?? "-"}</div>
          </FormField>

          <FormField label={t("cod46")}>
            <div>{reproductivePhase.cod46 ?? "-"}</div>
          </FormField>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("cod43")}>
            {reproductivePhase.cod43 === 1 && <div>{t("Absent")}</div>}

            {reproductivePhase.cod43 === 2 && <div>{t("Present")}</div>}

            {reproductivePhase.cod43 === null && <div>-</div>}
          </FormField>

          <FormField label={t("cod45")}>
            {reproductivePhase.cod45 === 3 && <div>{t("Low")}</div>}

            {reproductivePhase.cod45 === 5 && <div>{t("Intermediate")}</div>}

            {reproductivePhase.cod45 === 7 && <div>{t("High")}</div>}

            {reproductivePhase.cod45 === null && <div>-</div>}
          </FormField>
        </div>

        <FormField label={t("cod44")}>
          {reproductivePhase.cod44 === 1 && <div>{t("White")}</div>}

          {reproductivePhase.cod44 === 2 && <div>{t("Yellow")}</div>}

          {reproductivePhase.cod44 === 3 && <div>{t("Green")}</div>}

          {reproductivePhase.cod44 === 4 && <div>{t("Orange")}</div>}

          {reproductivePhase.cod44 === 5 && <div>{t("Purple")}</div>}

          {reproductivePhase.cod44 === 6 && <div>{t("Dark purple")}</div>}

          {reproductivePhase.cod44 === 7 && <div>{t("Others")}</div>}

          {reproductivePhase.cod44 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod47")}>
          {reproductivePhase.cod47 === 1 && <div>{t("White")}</div>}

          {reproductivePhase.cod47 === 2 && <div>{t("Lemon-yellow")}</div>}

          {reproductivePhase.cod47 === 3 && <div>{t("Pale orange-yellow")}</div>}

          {reproductivePhase.cod47 === 4 && <div>{t("Orange-yellow")}</div>}

          {reproductivePhase.cod47 === 5 && <div>{t("Pale orange")}</div>}

          {reproductivePhase.cod47 === 6 && <div>{t("Orange")}</div>}

          {reproductivePhase.cod47 === 7 && <div>{t("Light red")}</div>}

          {reproductivePhase.cod47 === 8 && <div>{t("Red")}</div>}

          {reproductivePhase.cod47 === 9 && <div>{t("Dark red")}</div>}

          {reproductivePhase.cod47 === 10 && <div>{t("Purple")}</div>}

          {reproductivePhase.cod47 === 11 && <div>{t("Brown")}</div>}

          {reproductivePhase.cod47 === 12 && <div>{t("Black")}</div>}

          {reproductivePhase.cod47 === 13 && <div>{t("Others")}</div>}

          {reproductivePhase.cod47 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod48")}>
          {reproductivePhase.cod48 === 1 && (
            <div>
              <img className="w-24" src="/images/access/forma_fruto_1.png" />
              <div>{t("Elongate")}</div>
            </div>
          )}

          {reproductivePhase.cod48 === 2 && (
            <div>
              <img className="w-24" src="/images/access/forma_fruto_2.png" />
              <div>{t("Almost round")}</div>
            </div>
          )}

          {reproductivePhase.cod48 === 3 && (
            <div>
              <img className="w-24" src="/images/access/forma_fruto_3.png" />
              <div>{t("Triangular")}</div>
            </div>
          )}

          {reproductivePhase.cod48 === 4 && (
            <div>
              <img className="w-24" src="/images/access/forma_fruto_4.png" />
              <div>{t("Campanulate")}</div>
            </div>
          )}

          {reproductivePhase.cod48 === 5 && (
            <div>
              <img className="w-24" src="/images/access/forma_fruto_5.png" />
              <div>{t("Block")}</div>
            </div>
          )}

          {reproductivePhase.cod48 === 6 && <div>{t("Others")}</div>}

          {reproductivePhase.cod48 === null && <div>-</div>}
        </FormField>

        <div className="grid sm:grid-cols-3 gap-6">
          <FormField label={t("cod49")}>
            <div>{reproductivePhase.cod49 ?? "-"}</div>
          </FormField>

          <FormField label={t("cod50")}>
            <div>{reproductivePhase.cod50 ?? "-"}</div>
          </FormField>

          <FormField label={t("cod51")}>
            <div>{reproductivePhase.cod51 ?? "-"}</div>
          </FormField>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("cod52")}>
            <div>{reproductivePhase.cod52 ?? "-"}</div>
          </FormField>

          <FormField label={t("cod53")}>
            <div>{reproductivePhase.cod53 ?? "-"}</div>
          </FormField>
        </div>

        <FormField label={t("cod54")}>
          {reproductivePhase.cod54 === 1 && (
            <div>
              <img className="w-24" src="/images/access/forma_fruto_uniao_pedicelo_1.png" />
              <div>{t("Acute")}</div>
            </div>
          )}

          {reproductivePhase.cod54 === 2 && (
            <div>
              <img className="w-24" src="/images/access/forma_fruto_uniao_pedicelo_2.png" />
              <div>{t("Obtuse")}</div>
            </div>
          )}

          {reproductivePhase.cod54 === 3 && (
            <div>
              <img className="w-24" src="/images/access/forma_fruto_uniao_pedicelo_3.png" />
              <div>{t("Truncate")}</div>
            </div>
          )}

          {reproductivePhase.cod54 === 4 && (
            <div>
              <img className="w-24" src="/images/access/forma_fruto_uniao_pedicelo_4.png" />
              <div>{t("Cordate")}</div>
            </div>
          )}

          {reproductivePhase.cod54 === 5 && (
            <div>
              <img className="w-24" src="/images/access/forma_fruto_uniao_pedicelo_5.png" />
              <div>{t("Lobate")}</div>
            </div>
          )}

          {reproductivePhase.cod54 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod55")}>
          {reproductivePhase.cod55 === 1 && (
            <div>
              <img className="w-24" src="/images/access/colo_base_fruto_1.png" />
              <div>{t("Absent")}</div>
            </div>
          )}

          {reproductivePhase.cod55 === 2 && (
            <div>
              <img className="w-24" src="/images/access/colo_base_fruto_2.png" />
              <div>{t("Present")}</div>
            </div>
          )}

          {reproductivePhase.cod55 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod56")}>
          {reproductivePhase.cod56 === 1 && (
            <div>
              <img className="w-24" src="/images/access/forma_apice_fruto_1.png" />
              <div>{t("Pointed")}</div>
            </div>
          )}

          {reproductivePhase.cod56 === 2 && (
            <div>
              <img className="w-24" src="/images/access/forma_apice_fruto_2.png" />
              <div>{t("Blunt")}</div>
            </div>
          )}

          {reproductivePhase.cod56 === 3 && (
            <div>
              <img className="w-24" src="/images/access/forma_apice_fruto_3.png" />
              <div>{t("Sunken")}</div>
            </div>
          )}

          {reproductivePhase.cod56 === 4 && (
            <div>
              <img className="w-24" src="/images/access/forma_apice_fruto_4.png" />
              <div>{t("Sunken and pointed")}</div>
            </div>
          )}

          {reproductivePhase.cod56 === 5 && <div>{t("Others")}</div>}

          {reproductivePhase.cod56 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod57")}>
          {reproductivePhase.cod57 === 1 && <div>{t("Absent")}</div>}

          {reproductivePhase.cod57 === 2 && <div>{t("Present")}</div>}

          {reproductivePhase.cod57 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod58")}>
          {reproductivePhase.cod58 === 3 && (
            <div>
              <img className="w-24" src="/images/access/enrugamento_transversal_fruto_1.png" />
              <div>{t("Slightly corrugated")}</div>
            </div>
          )}

          {reproductivePhase.cod58 === 5 && (
            <div>
              <img className="w-24" src="/images/access/enrugamento_transversal_fruto_2.png" />
              <div>{t("Corrugated")}</div>
            </div>
          )}

          {reproductivePhase.cod58 === 7 && (
            <div>
              <img className="w-24" src="/images/access/enrugamento_transversal_fruto_3.png" />
              <div>{t("Smooth")}</div>
            </div>
          )}

          {reproductivePhase.cod58 === null && <div>-</div>}
        </FormField>

        <FormField label={t("cod59")}>
          <div>{reproductivePhase.cod59 ?? "-"}</div>
        </FormField>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("cod60")}>
            {reproductivePhase.cod60 === 1 && <div>{t("Smooth")}</div>}

            {reproductivePhase.cod60 === 2 && <div>{t("Semiwrinkled")}</div>}

            {reproductivePhase.cod60 === 3 && <div>{t("Wrinkled")}</div>}

            {reproductivePhase.cod60 === null && <div>-</div>}
          </FormField>

          <FormField label={t("cod63")}>
            {reproductivePhase.cod63 === 1 && <div>{t("< 1/4 fruit length")}</div>}

            {reproductivePhase.cod63 === 2 && <div>{t("1/4 - 1/2 fruit length")}</div>}

            {reproductivePhase.cod63 === 3 && <div>{t("1/2 fruit length")}</div>}

            {reproductivePhase.cod63 === null && <div>-</div>}
          </FormField>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("cod61")}>
            {reproductivePhase.cod61 === 3 && <div>{t("Slight")}</div>}

            {reproductivePhase.cod61 === 5 && <div>{t("Intermediate")}</div>}

            {reproductivePhase.cod61 === 7 && <div>{t("Persistent")}</div>}

            {reproductivePhase.cod61 === null && <div>-</div>}
          </FormField>

          <FormField label={t("cod62")}>
            {reproductivePhase.cod62 === 3 && <div>{t("Slight")}</div>}

            {reproductivePhase.cod62 === 5 && <div>{t("Intermediate")}</div>}

            {reproductivePhase.cod62 === 7 && <div>{t("Persistent")}</div>}

            {reproductivePhase.cod62 === null && <div>-</div>}
          </FormField>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("cod64")}>
            {reproductivePhase.cod64 === 3 && <div>{t("Light")}</div>}

            {reproductivePhase.cod64 === 5 && <div>{t("Medium")}</div>}

            {reproductivePhase.cod64 === 7 && <div>{t("Serious")}</div>}

            {reproductivePhase.cod64 === null && <div>-</div>}
          </FormField>

          <FormField label={t("cod65")}>
            {reproductivePhase.cod65 === 1 && <div>{t("Dark yellow")}</div>}

            {reproductivePhase.cod65 === 2 && <div>{t("Brown")}</div>}

            {reproductivePhase.cod65 === 3 && <div>{t("Black")}</div>}

            {reproductivePhase.cod65 === 4 && <div>{t("Others")}</div>}

            {reproductivePhase.cod65 === null && <div>-</div>}
          </FormField>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("cod66")}>
            {reproductivePhase.cod66 === 1 && <div>{t("Smooth")}</div>}

            {reproductivePhase.cod66 === 2 && <div>{t("Rough")}</div>}

            {reproductivePhase.cod66 === 3 && <div>{t("Wrinkled")}</div>}

            {reproductivePhase.cod66 === null && <div>-</div>}
          </FormField>

          <FormField label={t("cod67")}>
            {reproductivePhase.cod67 === 3 && <div>{t("Small")}</div>}

            {reproductivePhase.cod67 === 5 && <div>{t("Intermediate")}</div>}

            {reproductivePhase.cod67 === 7 && <div>{t("Large")}</div>}

            {reproductivePhase.cod67 === null && <div>-</div>}
          </FormField>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField label={t("cod68")}>
            <div>{reproductivePhase.cod68 ?? "-"}</div>
          </FormField>

          <FormField label={t("cod69")}>
            <div>{reproductivePhase.cod69 ?? "-"}</div>
          </FormField>
        </div>

        <FormField label={t("cod70")}>
          {reproductivePhase.cod70 === 1 && <div>{t("< 20")}</div>}

          {reproductivePhase.cod70 === 2 && <div>{t("20 - 50")}</div>}

          {reproductivePhase.cod70 === 3 && <div>{t("> 20")}</div>}

          {reproductivePhase.cod70 === null && <div>-</div>}
        </FormField>
      </div>
    </div>
  );
};

export default ReproductivePhase;
