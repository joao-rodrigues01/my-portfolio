import { createContext, useState } from "react";
import { translations } from "../utils/lang/translations";
import { IntlProvider } from "react-intl";

interface LanguageContextProps {
  locale: "en" | "pt-br";
  handleLanguageChange(selectedLocale: string): void;
}

export const LanguageContext = createContext({} as LanguageContextProps);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<"en" | "pt-br">("en");

  const handleLanguageChange = (selectedLocale: "en" | "pt-br") => {
    setLocale(selectedLocale);
  };

  const messages = translations[locale];
  return (
    <LanguageContext.Provider value={{ locale, handleLanguageChange }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}
