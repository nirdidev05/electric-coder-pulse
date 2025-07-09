import { useLanguage } from '@/contexts/LanguageContext';
import { translations, type Translation } from '@/translations';

export const useTranslation = (): Translation => {
  const { language } = useLanguage();
  return translations[language] || translations.en;
};