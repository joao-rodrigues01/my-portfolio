import { langagues } from "../../utils/lang/translations";
import { DropDownMenu } from "./DropDownMenu";

interface LanguageSelectorProps {
  onLanguageChange(lang: string): void;
}

export function LanguageSelector({ onLanguageChange }: LanguageSelectorProps) {
  return (
    <DropDownMenu.Root buttonLabel="Language">
      {langagues.map((lang) => (
        <DropDownMenu.Item key={lang.name}>
          <button
            type="button"
            className="flex items-center justify-start gap-2 w-full px-4 py-2"
            onClick={() => onLanguageChange(lang.name)}
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
