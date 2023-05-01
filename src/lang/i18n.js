import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LocalStorageBackend from 'i18next-localstorage-backend';
import en from "./en.json";
import ko from "./ko.json";


i18n
    .use(LocalStorageBackend)
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation:en},
            ko: {translation:ko},
        },
        lng: localStorage.getItem('lang') || "ko",
        fallbackLng: "ko",
        debug: true,
        // defaultNS: "trans",
        // ns: "trans",
        keySeparator: false,
        interpolation: {
            escapeValue: true,
        },
        react: {
            useSuspense: true,
        },
    });

export default i18n;