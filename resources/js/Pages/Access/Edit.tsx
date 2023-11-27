import { Head, Link, useForm } from "@inertiajs/react";
import {
  IAccess,
  IAccessForm,
  IAccessImage,
  IPageProps,
  IReproductivePhase,
  ISeedlingPhase,
  IVegetativePhase,
} from "@/types";
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

const Create = ({
  auth,
  access,
  seedlingPhase,
  vegetativePhase,
  reproductivePhase,
  images,
}: IPageProps<{
  access: IAccess;
  seedlingPhase: ISeedlingPhase;
  vegetativePhase: IVegetativePhase;
  reproductivePhase: IReproductivePhase;
  images: IAccessImage[];
}>) => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);

  const { data, setData, put, processing, errors } = useForm<IAccessForm>({
    sample: access.sample,
    species: access.species,
    variety: access.variety,
    color: access.color,
    generation: access.generation,
    producer_name: access.producer_name,
    coordinates: access.coordinates,
    location: access.location,
    phone: access.phone,
    collection_date: access.collection_date,
    observation: access.observation,
    cod1: seedlingPhase.cod1,
    cod2: seedlingPhase.cod2,
    cod3: seedlingPhase.cod3,
    cod4: seedlingPhase.cod4,
    cod5: seedlingPhase.cod5,
    cod6: seedlingPhase.cod6,
    cod7: vegetativePhase.cod7,
    cod8: vegetativePhase.cod8,
    cod9: vegetativePhase.cod9,
    cod10: vegetativePhase.cod10,
    cod11: vegetativePhase.cod11,
    cod12: vegetativePhase.cod12,
    cod13: vegetativePhase.cod13,
    cod14: vegetativePhase.cod14,
    cod15: vegetativePhase.cod15,
    cod16: vegetativePhase.cod16,
    cod17: vegetativePhase.cod17,
    cod18: vegetativePhase.cod18,
    cod19: vegetativePhase.cod19,
    cod20: vegetativePhase.cod20,
    cod21: vegetativePhase.cod21,
    cod22: vegetativePhase.cod22,
    cod23: vegetativePhase.cod23,
    cod24: vegetativePhase.cod24,
    cod25: vegetativePhase.cod25,
    cod26: reproductivePhase.cod26,
    cod27: reproductivePhase.cod27,
    cod28: reproductivePhase.cod28,
    cod29: reproductivePhase.cod29,
    cod30: reproductivePhase.cod30,
    cod31: reproductivePhase.cod31,
    cod32: reproductivePhase.cod32,
    cod33: reproductivePhase.cod33,
    cod34: reproductivePhase.cod34,
    cod35: reproductivePhase.cod35,
    cod36: reproductivePhase.cod36,
    cod37: reproductivePhase.cod37,
    cod38: reproductivePhase.cod38,
    cod39: reproductivePhase.cod39,
    cod40: reproductivePhase.cod40,
    cod41: reproductivePhase.cod41,
    cod42: reproductivePhase.cod42,
    cod43: reproductivePhase.cod43,
    cod44: reproductivePhase.cod44,
    cod45: reproductivePhase.cod45,
    cod46: reproductivePhase.cod46,
    cod47: reproductivePhase.cod47,
    cod48: reproductivePhase.cod48,
    cod49: reproductivePhase.cod49,
    cod50: reproductivePhase.cod50,
    cod51: reproductivePhase.cod51,
    cod52: reproductivePhase.cod52,
    cod53: reproductivePhase.cod53,
    cod54: reproductivePhase.cod54,
    cod55: reproductivePhase.cod55,
    cod56: reproductivePhase.cod56,
    cod57: reproductivePhase.cod57,
    cod58: reproductivePhase.cod58,
    cod59: reproductivePhase.cod59,
    cod60: reproductivePhase.cod60,
    cod61: reproductivePhase.cod61,
    cod62: reproductivePhase.cod62,
    cod63: reproductivePhase.cod63,
    cod64: reproductivePhase.cod64,
    cod65: reproductivePhase.cod65,
    cod66: reproductivePhase.cod66,
    cod67: reproductivePhase.cod67,
    cod68: reproductivePhase.cod68,
    cod69: reproductivePhase.cod69,
    cod70: reproductivePhase.cod70,
    images: images.map((image) => image.name),
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    put(route("access.update", { id: access.id }));
  };

  return (
    <Layout user={auth.user} currentLink="access">
      <Head title={t("Edit access")} />
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
