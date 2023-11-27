import { Head } from "@inertiajs/react";
import { IPageProps } from "@/types";
import Layout from "@/Layouts/Layout";
import { useTranslation } from "react-i18next";

const About = ({ auth }: IPageProps) => {
  const { t } = useTranslation();

  return (
    <Layout user={auth.user} currentLink="about">
      <Head title={t("About")} />

      <div className="container mx-auto pb-16">
        <div className="mx-auto w-2/3">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="text-xl font-semibold">Sobre o Banco De Germoplasma de Capsicum</div>

            <div className="mt-12 flex flex-col">
              <p className="text-justify">
                A Universidade Federal de Uberlândia, campus Monte Carmelo, criou no ano de 2013 o banco de
                Germoplasma de <i> Capsicum</i> (BG <i>Capsicum</i> UFU), com o objetivo de conservar, preservar,
                documentar e manter intercâmbio de germoplasma do gênero <i>Capsicum</i>. Os recursos genéticos
                armazenados são oriundos de coleta ou doação, sendo caracterizados quanto aos aspectos morfológicos e
                moleculares. Atualmente o BG <i>Capsicum</i> UFU possui mais de 250 acessos cadastrados e
                caracterizados.
              </p>
              <p className="mt-8 text-justify">
                Os acessos são caracterizados conforme{" "}
                <i>International Plant Genetic Resources Institute - Descriptors for Capsicum</i> (IPGRI, 1995)
                utilizando um programa computacional denominado BG <i>Capsicum</i> UFU, desenvolvido na linguagem JSP (
                <i>JavaServer Pages</i>) com armazenamento de informações no SGBD MariaDB. O sistema foi implementado
                como resultado da iniciação científica do aluno Valdomiro Caetano Martins orientado pelos professores
                Ana Cláudia Martinez e Thiago Pirola Ribeiro da FACOM em parceiria com o professor Gabriel Mascarenhas
                Maciel do ICIAG.
              </p>
              <p className="mt-8 text-justify">
                A Universidade Federal de Uberlândia, na categoria de mantenedora do BG <i>Capsicum</i> UFU se
                resguarda o direito de intercambiar recursos genéticos de seu acervo com instituições de pesquisa de
                caráter privado ou público. Para tanto, os interessados devem entrar em contato com o curador do BG{" "}
                <i>Capsicum</i> UFU, Prof. Gabriel Mascarenhas Maciel, mediante o e-mail:{" "}
                <b>gabrielmaciel@iciag.ufu.br</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
