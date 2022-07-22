import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export default function initializeTranslation(translationTR, translationEng) {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: translationTR,
      },
      tr: {
        translation: translationEng,
      },
    },
    lng: "tr",
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false,
    },
  });
}
