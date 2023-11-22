import { CheckIcon } from "@heroicons/react/24/solid";
import { t } from "i18next";
import { Dispatch, SetStateAction } from "react";
import { tv } from "tailwind-variants";

const Steps = ({
  currentStep,
  setCurrentStep,
}: {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}) => {
  const listItem = tv({
    base: "relative flex-1",
    variants: {
      selected: {
        true: "border-b-4 border-blue-600",
      },
    },
  });

  const step = tv({
    base: "flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0",
    variants: {
      selected: {
        true: "bg-blue-600 text-white",
      },
      active: {
        true: "border-2 border-blue-600 font-medium text-blue-600",
      },
      disabled: {
        true: "border-2 border-gray-300 text-gray-600",
      },
    },
  });

  const label = tv({
    base: "text-left",
    variants: {
      active: {
        true: "text-blue-600",
      },
      disabled: {
        true: "text-gray-600",
      },
    },
  });

  return (
    <ol className="flex w-full bg-white rounded-lg shadow">
      <li className={listItem({ selected: currentStep >= 1 })}>
        <button onClick={() => setCurrentStep(1)} className="flex items-center gap-4 w-full h-full px-6 py-4 text-sm">
          <div
            className={step({
              selected: currentStep > 1,
              active: currentStep === 1,
              disabled: currentStep < 1,
            })}
          >
            {currentStep > 1 ? <CheckIcon className="h-4 w-4" /> : <div>01</div>}
          </div>
          <div
            className={label({
              active: currentStep === 1,
              disabled: currentStep < 1,
            })}
          >
            <div className="font-medium">{t("Collection location")}</div>
          </div>
        </button>
      </li>

      <li className={listItem({ selected: currentStep >= 2 })}>
        <button
          onClick={() => setCurrentStep(2)}
          className="flex items-center gap-4 w-full h-full py-4 pl-8 pr-6 text-sm"
        >
          <div
            className={step({
              selected: currentStep > 2,
              active: currentStep === 2,
              disabled: currentStep < 2,
            })}
          >
            {currentStep > 2 ? <CheckIcon className="h-4 w-4" /> : <div>02</div>}
          </div>
          <div
            className={label({
              active: currentStep === 2,
              disabled: currentStep < 2,
            })}
          >
            <div className="font-medium">{t("Seedling phase")}</div>
            <div>{t("Morphological characteristics")}</div>
          </div>
        </button>
        <div className="absolute inset-0 left-0 top-0 w-3">
          <svg className="h-full w-full text-gray-200" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
            <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vector-effect="non-scaling-stroke"></path>
          </svg>
        </div>
      </li>

      <li className={listItem({ selected: currentStep >= 3 })}>
        <button
          onClick={() => setCurrentStep(3)}
          className="flex items-center gap-4 w-full h-full py-4 pl-8 pr-6 text-sm"
        >
          <div
            className={step({
              selected: currentStep > 3,
              active: currentStep === 3,
              disabled: currentStep < 3,
            })}
          >
            {currentStep > 3 ? <CheckIcon className="h-4 w-4" /> : <div>03</div>}
          </div>
          <div
            className={label({
              active: currentStep === 3,
              disabled: currentStep < 3,
            })}
          >
            <div className="font-medium">{t("Vegetative phase")}</div>
            <div>{t("Morphological characteristics")}</div>
          </div>
        </button>
        <div className="absolute inset-0 left-0 top-0 w-3">
          <svg className="h-full w-full text-gray-200" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
            <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vector-effect="non-scaling-stroke"></path>
          </svg>
        </div>
      </li>

      <li className={listItem({ selected: currentStep >= 4 })}>
        <button
          onClick={() => setCurrentStep(4)}
          className="flex items-center gap-4 w-full h-full py-4 pl-8 pr-6 text-sm"
        >
          <div
            className={step({
              selected: currentStep > 4,
              active: currentStep === 4,
              disabled: currentStep < 4,
            })}
          >
            {currentStep > 4 ? <CheckIcon className="h-4 w-4" /> : <div>04</div>}
          </div>
          <div
            className={label({
              active: currentStep === 4,
              disabled: currentStep < 4,
            })}
          >
            <div className="font-medium">{t("Reproductive phase")}</div>
            <div>{t("Morphological characteristics")}</div>
          </div>
        </button>
        <div className="absolute inset-0 left-0 top-0 w-3">
          <svg className="h-full w-full text-gray-200" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
            <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vector-effect="non-scaling-stroke"></path>
          </svg>
        </div>
      </li>

      <li className={listItem({ selected: currentStep >= 5 })}>
        <button
          onClick={() => setCurrentStep(5)}
          className="flex items-center gap-4 w-full h-full py-4 pl-8 pr-6 text-sm"
        >
          <div
            className={step({
              selected: currentStep > 5,
              active: currentStep === 5,
              disabled: currentStep < 5,
            })}
          >
            {currentStep > 5 ? <CheckIcon className="h-4 w-4" /> : <div>05</div>}
          </div>
          <div
            className={label({
              active: currentStep === 5,
              disabled: currentStep < 5,
            })}
          >
            <div className="font-medium">{t("Images")}</div>
          </div>
        </button>
        <div className="absolute inset-0 left-0 top-0 w-3">
          <svg className="h-full w-full text-gray-200" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
            <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vector-effect="non-scaling-stroke"></path>
          </svg>
        </div>
      </li>
    </ol>
  );
};

export default Steps;
