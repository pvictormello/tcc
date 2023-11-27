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
    cod1: null,
    cod2: null,
    cod3: null,
    cod4: null,
    cod5: null,
    cod6: null,
    cod7: null,
    cod8: null,
    cod9: null,
    cod10: null,
    cod11: null,
    cod12: null,
    cod13: null,
    cod14: null,
    cod15: null,
    cod16: null,
    cod17: null,
    cod18: null,
    cod19: null,
    cod20: null,
    cod21: null,
    cod22: null,
    cod23: null,
    cod24: null,
    cod25: null,
    cod26: null,
    cod27: null,
    cod28: null,
    cod29: null,
    cod30: null,
    cod31: null,
    cod32: null,
    cod33: null,
    cod34: null,
    cod35: null,
    cod36: null,
    cod37: null,
    cod38: null,
    cod39: null,
    cod40: null,
    cod41: null,
    cod42: null,
    cod43: null,
    cod44: null,
    cod45: null,
    cod46: null,
    cod47: null,
    cod48: null,
    cod49: null,
    cod50: null,
    cod51: null,
    cod52: null,
    cod53: null,
    cod54: null,
    cod55: null,
    cod56: null,
    cod57: null,
    cod58: null,
    cod59: null,
    cod60: null,
    cod61: null,
    cod62: null,
    cod63: null,
    cod64: null,
    cod65: null,
    cod66: null,
    cod67: null,
    cod68: null,
    cod69: null,
    cod70: null,
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
