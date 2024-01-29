import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

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
          About me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-center text-2xl font-semibold mb-4">
              Presentation
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-justify">
              Hello! 👋 I'm a FullStack developer writting code for about two
              years and i love create high level and innovative solutions. My
              journey in technology world let me to specialize in Node, React
              and SpringBoot, where i found my passion on build web
              applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-justify mt-2">
              I am proficiently versed on Web Development, which allows me to
              approach technical challenges with confidence and precision. I
              firmly believe on innovation importance and i'm always excited to
              learn and collaborate to a tallent teams. My resilliance and
              proactivity are characteristics that define me, especially when
              i'm handling with challenging projects.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-justify mt-2">
              I have a unshakable appointment with excelence and i consistently
              search to exceed my expetations. If you are searching for a
              dedicated talent, focused on solve high level solutions, i'm ready
              to contributte and make the difference. Let's work together and
              transform new ideas in reality!
            </p>
          </div>

          <div>
            <h1 className="text-center text-2xl font-semibold mb-4">
              Techs i oftenly work with
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
