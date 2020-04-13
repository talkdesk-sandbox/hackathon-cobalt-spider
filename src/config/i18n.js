import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import getEnv from './env'

export default async function configI18n() {
  return await i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      lng: 'pt',
      fallbackLng: 'en',
      ns: ['common', 'app'],
      defaultNS: 'app',
      fallbackNS: 'common',
      // debug: true,
      backend: {
        crossDomain: true,
        loadPath: `${getEnv('LOCALE_PUBLIC_URL')}/locales/{{lng}}/{{ns}}.json`
      },  

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    });
}
