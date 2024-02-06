import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FormattedMessage } from "react-intl";

export function AboutMe() {
  const { theme } = useContext(ThemeContext);

  const icons = [
    {
      title: "Javascript",
      techName: "js",
    },
    {
      title: "Typescript",
      techName: "ts",
    },
    {
      title: "React",
      techName: "react",
    },
    {
      title: "Java",
      techName: "java",
    },
    {
      title: "SpringBoot",
      techName: "spring",
    },
    {
      title: "Angular",
      techName: "angular",
    },
    {
      title: "Vite",
      techName: "vite",
    },
    {
      title: "Tailwind",
      techName: "tailwind",
    },
    {
      title: "Styled Components",
      techName: "styledcomponents",
    },
    {
      title: "NodeJS",
      techName: "nodejs",
    },
    {
      title: "Express",
      techName: "express",
    },
    {
      title: "NestJS",
      techName: "nestjs",
    },
    {
      title: "Prisma",
      techName: "prisma",
    },
    {
      title: "Postgres",
      techName: "postgres",
    },
    {
      title: "Oracle",
      techName: "oracle",
    },
  ];

  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-900 py-12 lg:py-16">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-bold mb-6">
          <FormattedMessage id="aboutTitle" />
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-center text-2xl font-semibold mb-4">
              <FormattedMessage id="presetationTitle" />
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-justify">
              <FormattedMessage id="presentationText1" />
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-justify mt-2">
              <FormattedMessage id="presentationText2" />
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-justify mt-2">
              <FormattedMessage id="presentationText3" />
            </p>
          </div>

          <div>
            <h1 className="text-center text-2xl font-semibold mb-4">
              <FormattedMessage id="techsTitle" />
            </h1>

            <div className="flex flex-wrap  justify-center lg:justify-start gap-2">
              {icons.map((icon, index) => (
                <img
                  key={icon.techName + index}
                  alt={icon.title}
                  title={icon.title}
                  src={`https://skillicons.dev/icons?i=${icon.techName}&theme=${theme}`}
                  className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
