import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBRTranslation from "../lang/pt-BR/translations.json";
import esTranslation from "../lang/es/translations.json";
import enTranslation from "../lang/en/translations.json";

const resources = {
  "pt-BR": {
    translation: ptBRTranslation,
  },
  es: {
    translation: esTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "pt-BR",
  fallbackLng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
