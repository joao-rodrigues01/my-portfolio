/* eslint-disable react-refresh/only-export-components */
import { useContext } from "react";
import moonIcon from "../../../assets/icons/moon.svg";
import sunIcon from "../../../assets/icons/sun.svg";
import { ThemeContext } from "../../../context/ThemeContext";
import { Button } from "../../ui/Button";
import { LanguageSelector } from "../../ui/LanguageSelector";

interface MobileMenuProps {
  isOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MobileDropdownProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  setMobileMenuOpen,
}) => {
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((state) => !state);
  };

  return (
    <div className="lg:hidden">
      <Button variant="ghost" onClick={handleMobileMenuToggle} className="px-0">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        )}
      </Button>
    </div>
  );
};

const MobileDropdown: React.FC<MobileDropdownProps> = ({ isOpen }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }

  return (
    <nav
      className={`fixed z-10 top-16 w-full bg-opacity-10 backdrop-filter backdrop-blur-lg border-b-2 left-0 right-0 items-center space-y-2 ${
        isOpen ? "py-6 flex flex-col animate-slide-down" : "hidden"
      }`}
    >
      <a href="#home">Home</a>
      <a href="#about">About Me</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experiences</a>
      <a href="#contact">Contact me</a>
      <LanguageSelector />

      <div className="flex items-center justify-center">
        <button onClick={handleToggleTheme}>
          {theme === "light" ? (
            <img src={sunIcon} alt="Light Mode" className="w-7 h-7" />
          ) : (
            <img src={moonIcon} alt="Dark Mode" className="w-7 h-7" />
          )}
        </button>
      </div>
    </nav>
  );
};

export const Mobile = { Menu: MobileMenu, Dropdown: MobileDropdown };
