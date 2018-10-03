import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js'
import en from './lang/en.json';
import es from './lang/es.json';

i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.defaultLocale = 'es';
i18n.translations = {es, en};

export default i18n;