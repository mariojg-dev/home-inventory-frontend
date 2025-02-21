import { createI18n } from 'vue-i18n';
import en from './translations/en.json';
import es from './translations/es.json';
import de from './translations/de.json';

const messages = {
  en,
  es,
  de,
};

const browserLanguage = navigator.language.split('-')[0];

const availableLanguages = Object.keys(messages);
const defaultLang = availableLanguages.includes(browserLanguage) ? browserLanguage : 'en';

const i18n = createI18n({
  locale: defaultLang,          
  fallbackLocale: 'en',  
  messages,              
});

export default i18n;