import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { translations } from '../i18n/translations';
import { LanguageContext } from './LanguageContextObject';
const STORAGE_KEY = 'doganin-sesi-language';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return storedLanguage === 'en' ? 'en' : 'tr';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
