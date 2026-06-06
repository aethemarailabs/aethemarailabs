import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  ko: () => import('./ko.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'ko') => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
