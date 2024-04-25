import { Head } from "@inertiajs/react";
import { IBanner, IPageProps } from "@/types";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Layout from "@/Layouts/Layout";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Home = ({ auth, banners }: IPageProps<{ banners: IBanner[] }>) => {
  const { t } = useTranslation();
  const [currentBanner, setCurrentBanner] = useState(0);

  const previousBanner = () => {
    if (currentBanner === 0) {
      setCurrentBanner(4);
    } else {
      setCurrentBanner(currentBanner - 1);
    }
  };

  const nextBanner = () => {
    if (currentBanner === 4) {
      setCurrentBanner(0);
    } else {
      setCurrentBanner(currentBanner + 1);
    }
  };

  return (
    <Layout user={auth.user} currentLink="home">
      <Head title={t("Home")} />

      <div className="container mx-auto">
        {banners.map((banner, index) => (
          <div
            className={`relative mx-auto mb-16 w-fit rounded-lg bg-white px-4 py-4 shadow ${
              currentBanner === index ? "block" : "hidden"
            }`}
          >
            <img
              className="max-h-[calc(100vh-178px)] shadow-[inset_0_0_200px_200px_rgb(0,0,0,0.9)]"
              src={`/images/home/${banner.image_name}`}
            />

            <div className="z-5 absolute inset-0 h-full w-full px-4 py-4">
              <div className="h-full w-full bg-gradient-to-l from-black via-transparent to-black"></div>
            </div>

            <div className="absolute inset-0 z-20 flex items-center justify-between px-12">
              <button onClick={previousBanner}>
                <ArrowLeftCircleIcon className="h-10 w-10 text-white" />
              </button>
              <button onClick={nextBanner}>
                <ArrowRightCircleIcon className="h-10 w-10 text-white" />
              </button>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 px-4 py-4">
              <div className="flex flex-col items-center gap-4 bg-gradient-to-t from-black to-transparent py-6 text-white">
                <div>{banner.description}</div>
                <div className="flex items-center gap-4">
                  <button
                    className={`h-4 w-4 rounded-full ${currentBanner === 0 ? "bg-white" : "border-2 border-white"}`}
                    onClick={() => setCurrentBanner(0)}
                  ></button>
                  <button
                    className={`h-4 w-4 rounded-full ${currentBanner === 1 ? "bg-white" : "border-2 border-white"}`}
                    onClick={() => setCurrentBanner(1)}
                  ></button>
                  <button
                    className={`h-4 w-4 rounded-full ${currentBanner === 2 ? "bg-white" : "border-2 border-white"}`}
                    onClick={() => setCurrentBanner(2)}
                  ></button>
                  <button
                    className={`h-4 w-4 rounded-full ${currentBanner === 3 ? "bg-white" : "border-2 border-white"}`}
                    onClick={() => setCurrentBanner(3)}
                  ></button>
                  <button
                    className={`h-4 w-4 rounded-full ${currentBanner === 4 ? "bg-white" : "border-2 border-white"}`}
                    onClick={() => setCurrentBanner(4)}
                  ></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
