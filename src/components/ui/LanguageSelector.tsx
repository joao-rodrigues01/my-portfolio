import { useLanguage } from "../../hooks/useLanguage";
import { langagues } from "../../utils/lang/translations";
import { DropDownMenu } from "./DropDownMenu";

export function LanguageSelector() {
  const { locale, handleLanguageChange } = useLanguage();

  const currentLanguage = langagues.find((l) => l.name === locale);

  const FlagComponent = () => (
    <img
      src={`https://flagcdn.com/w40/${currentLanguage?.flag}.png`}
      srcSet={`https://flagcdn.com/w60/${currentLanguage?.flag}.png 2x`}
      width="30"
      alt={currentLanguage?.title}
    />
  );

  return (
    <DropDownMenu.Root buttonLabel={<FlagComponent />}>
      {langagues.map((lang) => (
        <DropDownMenu.Item key={lang.name}>
          <button
            type="button"
            className="flex items-center justify-start gap-2 w-full px-4 py-2"
            onClick={() => handleLanguageChange(lang.name)}
          >
            <img
              src={`https://flagcdn.com/w20/${lang.flag}.png`}
              srcSet={`https://flagcdn.com/w40/${lang.flag}.png 2x`}
              width="20"
              alt={lang.title}
            />
            <span>{lang.title}</span>
          </button>
        </DropDownMenu.Item>
      ))}
    </DropDownMenu.Root>
  );
}
