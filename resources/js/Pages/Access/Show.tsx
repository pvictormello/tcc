import { Head, Link } from "@inertiajs/react";
import { IAccess, IAccessImage, IPageProps, IReproductivePhase, ISeedlingPhase, IVegetativePhase } from "@/types";
import Layout from "@/Layouts/Layout";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import Steps from "./Partials/Steps";
import Access from "./Partials/Show/Access";
import SeedlingPhase from "./Partials/Show/SeedlingPhase";
import VegetativePhase from "./Partials/Show/VegetativePhase";
import ReproductivePhase from "./Partials/Show/ReproductivePhase";
import AccessImages from "./Partials/Show/AccessImages";
import Button from "@/Components/Button";

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

  return (
    <Layout user={auth.user} currentLink="access">
      <Head title={t("View access")} />
      <div className="pb-16">
        <div className="container mx-auto">
          <Steps currentStep={currentStep} setCurrentStep={setCurrentStep} />

          {currentStep === 1 && <Access access={access} />}
          {currentStep === 2 && <SeedlingPhase seedlingPhase={seedlingPhase} />}
          {currentStep === 3 && <VegetativePhase vegetativePhase={vegetativePhase} />}
          {currentStep === 4 && <ReproductivePhase reproductivePhase={reproductivePhase} />}
          {currentStep === 5 && <AccessImages images={images} />}

          <div className="mt-8 flex justify-end gap-6 overflow-hidden rounded-lg bg-white px-6 py-4 shadow">
            <Link href={route("access.index")}>
              <Button size="lg">{t("Voltar")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
