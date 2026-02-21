import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import JSON files
import en from '../src/en.json';
import ja from '../src/ja.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ja: { translation: ja },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    returnObjects: true 
  });

export default i18n;