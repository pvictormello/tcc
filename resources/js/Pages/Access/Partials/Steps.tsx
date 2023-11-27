import { CheckIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction } from "react";
import { tv } from "tailwind-variants";

const Steps = ({
  currentStep,
  setCurrentStep,
}: {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}) => {
  const { t } = useTranslation();
  const listItem = tv({
    base: "relative flex-1",
    variants: {
      active: {
        true: "border-b-4 border-blue-600",
      },
    },
  });

  const step = tv({
    base: "flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0",
    variants: {
      active: {
        true: "border-2 border-blue-600 font-medium text-blue-600",
      },
      disabled: {
        true: "border-2 border-slate-300 text-slate-600 group-hover:text-blue-600 group-hover:border-blue-600",
      },
    },
  });

  const label = tv({
    base: "text-left group-hover:text-blue-600",
    variants: {
      active: {
        true: "text-blue-600",
      },
    },
  });

  return (
    <ol className="flex w-full rounded-lg bg-white shadow">
      <li className={listItem({ active: currentStep === 1 })}>
        <button
          onClick={() => setCurrentStep(1)}
          className="group flex h-full w-full items-center gap-4 px-6 py-4 text-sm"
        >
          <div
            className={step({
              active: currentStep === 1,
              disabled: currentStep !== 1,
            })}
          >
            <div>01</div>
          </div>
          <div
            className={label({
              active: currentStep === 1,
            })}
          >
            <div className="font-medium">{t("Collection location")}</div>
          </div>
        </button>
      </li>

      <li className={listItem({ active: currentStep === 2 })}>
        <button
          onClick={() => setCurrentStep(2)}
          className="group flex h-full w-full items-center gap-4 py-4 pl-8 pr-6 text-sm"
        >
          <div
            className={step({
              active: currentStep === 2,
              disabled: currentStep !== 2,
            })}
          >
            <div>02</div>
          </div>
          <div
            className={label({
              active: currentStep === 2,
            })}
          >
            <div className="font-medium">{t("Seedling phase")}</div>
            <div>{t("Morphological characteristics")}</div>
          </div>
        </button>
        <div className="absolute inset-0 left-0 top-0 w-3">
          <svg className="h-full w-full text-slate-200" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
            <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vector-effect="non-scaling-stroke"></path>
          </svg>
        </div>
      </li>

      <li className={listItem({ active: currentStep === 3 })}>
        <button
          onClick={() => setCurrentStep(3)}
          className="group flex h-full w-full items-center gap-4 py-4 pl-8 pr-6 text-sm"
        >
          <div
            className={step({
              active: currentStep === 3,
              disabled: currentStep !== 3,
            })}
          >
            <div>03</div>
          </div>
          <div
            className={label({
              active: currentStep === 3,
            })}
          >
            <div className="font-medium">{t("Vegetative phase")}</div>
            <div>{t("Morphological characteristics")}</div>
          </div>
        </button>
        <div className="absolute inset-0 left-0 top-0 w-3">
          <svg className="h-full w-full text-slate-200" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
            <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vector-effect="non-scaling-stroke"></path>
          </svg>
        </div>
      </li>

      <li className={listItem({ active: currentStep === 4 })}>
        <button
          onClick={() => setCurrentStep(4)}
          className="group flex h-full w-full items-center gap-4 py-4 pl-8 pr-6 text-sm"
        >
          <div
            className={step({
              active: currentStep === 4,
              disabled: currentStep !== 4,
            })}
          >
            <div>04</div>
          </div>
          <div
            className={label({
              active: currentStep === 4,
            })}
          >
            <div className="font-medium">{t("Reproductive phase")}</div>
            <div>{t("Morphological characteristics")}</div>
          </div>
        </button>
        <div className="absolute inset-0 left-0 top-0 w-3">
          <svg className="h-full w-full text-slate-200" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
            <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vector-effect="non-scaling-stroke"></path>
          </svg>
        </div>
      </li>

      <li className={listItem({ active: currentStep === 5 })}>
        <button
          onClick={() => setCurrentStep(5)}
          className="group flex h-full w-full items-center gap-4 py-4 pl-8 pr-6 text-sm"
        >
          <div
            className={step({
              active: currentStep === 5,
              disabled: currentStep !== 5,
            })}
          >
            <div>05</div>
          </div>
          <div
            className={label({
              active: currentStep === 5,
            })}
          >
            <div className="font-medium">{t("Images")}</div>
          </div>
        </button>
        <div className="absolute inset-0 left-0 top-0 w-3">
          <svg className="h-full w-full text-slate-200" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
            <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vector-effect="non-scaling-stroke"></path>
          </svg>
        </div>
      </li>
    </ol>
  );
};

export default Steps;
