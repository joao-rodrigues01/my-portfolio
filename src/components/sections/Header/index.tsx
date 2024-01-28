import { useCallback, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import moonIcon from "../../../assets/icons/moon.svg";
import sunIcon from "../../../assets/icons/sun.svg";
import useMobile from "../../../hooks/useMobile";
import { Mobile } from "./Mobile";

export function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isMobile } = useMobile();

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 0;

    setScrolled(isScrolled);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header
        className={`transition-all w-full bg-opacity-90 backdrop-filter backdrop-blur-lg fixed top-0 left-0 right-0 z-20 mx-auto flex items-center justify-between  border-b-2 ${
          scrolled
            ? "border-gray-200 dark:border-gray-700"
            : "border-transparent"
        }`}
      >
        <div className="container relative mx-auto flex items-center justify-between px-6 py-4 lg:p-6">
          <h1 className="text-2xl font-bold">João V. Rodrigues</h1>

          {isMobile ? (
            <Mobile.Menu
              isOpen={isMobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
            />
          ) : (
            <nav className="flex items-center gap-6 font-medium">
              <a href="#home">Home</a>
              <a href="#about">About Me</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experiences</a>
              <a href="#contact">Contact me</a>
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
          )}
        </div>
      </header>
      <Mobile.Dropdown isOpen={isMobileMenuOpen} />
    </>
  );
}
