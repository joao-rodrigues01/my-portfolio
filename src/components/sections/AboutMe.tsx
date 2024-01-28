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
              Olá! 👋 Sou um desenvolvedor full stack com dois anos de
              experiência apaixonado por criar soluções de alto desempenho e
              inovadoras. Minha jornada no mundo da tecnologia me levou a
              especializar-me em SpringBoot, React e Node, onde encontrei minha
              paixão por construir aplicativos web de última geração.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-justify mt-2">
              Sou proficientemente versado em React e Springboot, o que me
              permite abordar desafios técnicos com confiança e precisão.
              Acredito firmemente na importância da inovação e estou sempre
              ansioso para aprender e colaborar com equipes talentosas. Minha
              resiliência e proatividade são características que me definem,
              especialmente quando estou enfrentando projetos desafiadores.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-justify mt-2">
              Tenho um compromisso inabalável com a excelência e busco
              constantemente superar expectativas. Se você está em busca de um
              talento técnico dedicado, apaixonado por tecnologia e focado em
              entregar soluções de alto desempenho, estou pronto para contribuir
              e fazer a diferença. Vamos trabalhar juntos e transformar ideias
              em realidade!
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
