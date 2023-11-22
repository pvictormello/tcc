import { Head, Link, useForm } from "@inertiajs/react";
import { AccessForm, PageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import { t } from "i18next";
import { FormEventHandler, useState } from "react";
import Button from "@/Components/Button";
import Breadcrumbs from "@/Components/Breadcrumbs";
import Access from "./Partials/Access";
import Steps from "./Partials/Steps";
import SeedlingPhase from "./Partials/SeedlingPhase";
import VegetativePhase from "./Partials/VegetativePhase";
import ReproductivePhase from "./Partials/ReproductivePhase";
import AccessImages from "./Partials/AccessImages";

const Create = ({ auth }: PageProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  const { data, setData, post, processing, errors } = useForm<AccessForm>({
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
    cod1: 0,
    cod2: 0,
    cod3: 0,
    cod4: 0,
    cod5: 0,
    cod6: 0,
    cod7: 0,
    cod8: 0,
    cod9: 0,
    cod10: 0,
    cod11: 0,
    cod12: 0,
    cod13: 0,
    cod14: 0,
    cod15: 0,
    cod16: 0,
    cod17: 0,
    cod18: 0,
    cod19: 0,
    cod20: 0,
    cod21: 0,
    cod22: 0,
    cod23: 0,
    cod24: 0,
    cod25: 0,
    cod26: 0,
    cod27: 0,
    cod28: 0,
    cod29: 0,
    cod30: 0,
    cod31: 0,
    cod32: 0,
    cod33: 0,
    cod34: 0,
    cod35: 0,
    cod36: 0,
    cod37: 0,
    cod38: 0,
    cod39: 0,
    cod40: 0,
    cod41: 0,
    cod42: 0,
    cod43: 0,
    cod44: 0,
    cod45: 0,
    cod46: 0,
    cod47: 0,
    cod48: 0,
    cod49: 0,
    cod50: 0,
    cod51: 0,
    cod52: 0,
    cod53: 0,
    cod54: 0,
    cod55: 0,
    cod56: 0,
    cod57: 0,
    cod58: 0,
    cod59: 0,
    cod60: 0,
    cod61: 0,
    cod62: 0,
    cod63: 0,
    cod64: 0,
    cod65: 0,
    cod66: 0,
    cod67: 0,
    cod68: 0,
    cod69: 0,
    cod70: 0,
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
          <Breadcrumbs
            previousRoutes={[{ href: route("access.index"), label: t("Access") }]}
            currentRoute={t("New access")}
          />

          <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />

          <form onSubmit={submit} className="mt-8 rounded-lg bg-white px-6 py-8 shadow">
            {currentStep === 1 && <Access data={data} setData={setData} errors={errors} />}
            {currentStep === 2 && <SeedlingPhase data={data} setData={setData} errors={errors} />}
            {currentStep === 3 && <VegetativePhase data={data} setData={setData} errors={errors} />}
            {currentStep === 4 && <ReproductivePhase data={data} setData={setData} errors={errors} />}
            {currentStep === 5 && <AccessImages data={data} setData={setData} errors={errors} />}

            <div className="flex justify-end gap-6 pt-8">
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
