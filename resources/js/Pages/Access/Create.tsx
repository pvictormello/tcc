import { Head, Link, useForm } from "@inertiajs/react";
import { IAccessForm, IPageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import { useTranslation } from "react-i18next";
import { FormEventHandler, useState } from "react";
import Button from "@/Components/Button";

import Access from "./Partials/Create/Access";
import Steps from "./Partials/Steps";
import SeedlingPhase from "./Partials/Create/SeedlingPhase";
import VegetativePhase from "./Partials/Create/VegetativePhase";
import ReproductivePhase from "./Partials/Create/ReproductivePhase";
import AccessImages from "./Partials/Create/AccessImages";

const Create = ({ auth }: IPageProps) => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);

  const { data, setData, post, processing, errors } = useForm<IAccessForm>({
    sample: "",
    species: "",
    variety: "",
    color: "",
    generation: "",
    producer_name: "",
    coordinates: "",
    location: "",
    phone: "",
    collection_date: "",
    observation: "",
    cod1: undefined,
    cod2: undefined,
    cod3: undefined,
    cod4: undefined,
    cod5: undefined,
    cod6: undefined,
    cod7: undefined,
    cod8: undefined,
    cod9: undefined,
    cod10: undefined,
    cod11: undefined,
    cod12: undefined,
    cod13: undefined,
    cod14: undefined,
    cod15: undefined,
    cod16: undefined,
    cod17: undefined,
    cod18: undefined,
    cod19: undefined,
    cod20: undefined,
    cod21: undefined,
    cod22: undefined,
    cod23: undefined,
    cod24: undefined,
    cod25: undefined,
    cod26: undefined,
    cod27: undefined,
    cod28: undefined,
    cod29: undefined,
    cod30: undefined,
    cod31: undefined,
    cod32: undefined,
    cod33: undefined,
    cod34: undefined,
    cod35: undefined,
    cod36: undefined,
    cod37: undefined,
    cod38: undefined,
    cod39: undefined,
    cod40: undefined,
    cod41: undefined,
    cod42: undefined,
    cod43: undefined,
    cod44: undefined,
    cod45: undefined,
    cod46: undefined,
    cod47: undefined,
    cod48: undefined,
    cod49: undefined,
    cod50: undefined,
    cod51: undefined,
    cod52: undefined,
    cod53: undefined,
    cod54: undefined,
    cod55: undefined,
    cod56: undefined,
    cod57: undefined,
    cod58: undefined,
    cod59: undefined,
    cod60: undefined,
    cod61: undefined,
    cod62: undefined,
    cod63: undefined,
    cod64: undefined,
    cod65: undefined,
    cod66: undefined,
    cod67: undefined,
    cod68: undefined,
    cod69: undefined,
    cod70: undefined,
    images: [],
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("access.store"));
  };

  return (
    <Layout user={auth.user} currentLink="access">
      <Head title={t("New acces")} />
      <div className="pb-16">
        <div className="container mx-auto">
          <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />

          <form onSubmit={submit}>
            {currentStep === 1 && <Access data={data} setData={setData} errors={errors} />}
            {currentStep === 2 && <SeedlingPhase data={data} setData={setData} errors={errors} />}
            {currentStep === 3 && <VegetativePhase data={data} setData={setData} errors={errors} />}
            {currentStep === 4 && <ReproductivePhase data={data} setData={setData} errors={errors} />}
            {currentStep === 5 && <AccessImages data={data} setData={setData} errors={errors} />}

            <div className="mt-8 flex justify-end gap-6 overflow-hidden rounded-lg bg-white px-6 py-4 shadow">
              {currentStep === 1 && (
                <Link href={route("access.index")}>
                  <Button size="lg" color="secondary">
                    {t("Cancel")}
                  </Button>
                </Link>
              )}

              {currentStep > 1 && (
                <Button size="lg" color="secondary" onClick={() => setCurrentStep(currentStep - 1)}>
                  {t("Back")}
                </Button>
              )}

              {currentStep < 5 && (
                <Button size="lg" onClick={() => setCurrentStep(currentStep + 1)}>
                  {t("Continue")}
                </Button>
              )}

              {currentStep === 5 && (
                <Button type="submit" size="lg" disabled={processing}>
                  {t("Save")}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
