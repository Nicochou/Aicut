import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationFR from '../locales/fr/translation.json'
import translationEN from '../locales/en/translation.json'
import translationAR from '../locales/ar/translation.json'
import translationCH from '../locales/ch/translation.json'
import translationSP from '../locales/sp/translation.json'
import translationRU from '../locales/ru/translation.json'

const fallbackLng = ['fr'];
const availableLanguages = ['en', 'fr', 'ar', 'ch', 'ru', 'sp'];

const resources = {
    en: {
      translation: translationEN
    },
    fr: {
      translation: translationFR
    },
    sp: {
        translation: translationSP
    },
    ru: {
        translation: translationRU
    },
    ch: {
        translation: translationCH
    },
    ar: {
        translation: translationAR
    } 
  };

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng, 
    detection: {
      checkWhitelist: true, 
    },
    debug: false,
    whitelist: availableLanguages,
  });

export default i18n;