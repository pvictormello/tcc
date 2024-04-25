import { Head } from "@inertiajs/react";
import { IPageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import { Trans, useTranslation } from "react-i18next";

const About = ({ auth }: IPageProps) => {
  const { t } = useTranslation();

  return (
    <Layout user={auth.user} currentLink="about">
      <Head title={t("About")} />

      <div className="container mx-auto pb-16">
        <div className="mx-auto w-full lg:w-2/3">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="text-xl font-semibold">{t("About")}</div>

            <div className="mt-12 flex flex-col">
              <p className="text-justify">
                <Trans i18nKey="About1" />
              </p>
              <p className="mt-8 text-justify">
                <Trans i18nKey="About2" />
              </p>
              <p className="mt-8 text-justify">
                <Trans i18nKey="About3" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
