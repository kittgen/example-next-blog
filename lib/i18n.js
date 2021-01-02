import i18n from 'i18next';
import { initReactI18next, useTranslation as useTranslationNext } from 'react-i18next';
import { resources } from '../locales'

// todo evaluate http backend
// current i18next for next is not integreated with next router functionality

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'en',
        defaultNS: 'homepage',
        debug: false, // TODO config
        interpolation: {
            escapeValue: false,
        },
        resources
    })

export const useTranslation = (locale, ns = 'common') => {
    const { t, i18n } = useTranslationNext(ns)
    if (i18n.language != locale) {
        i18n.changeLanguage(locale)
    }
    return t
}

export default i18n