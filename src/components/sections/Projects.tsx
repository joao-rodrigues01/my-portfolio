import fincheck from "../../assets/images/fincheck.png";
// import swapplay from "../../assets/images/swapplay.png";
import jobplus from "../../assets/images/job+.png";
import nativemovies from "../../assets/images/nativemovies.png";
import nextmovies from "../../assets/images/nextmovies.png";
import mycontacts from "../../assets/images/mycontacts.png";

interface Project {
  id: number;
  name: string;
  description: string;
  img_url: string;
  date: string;
  techs: string[];
  preview_url?: string;
  source_url: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Fincheck",
      date: "October 2023",
      description:
        "A Finance App to manage all incoming and outcoming transactions from your bank accounts. Develop on JStack Course.",
      img_url: fincheck,
      techs: [
        "React",
        "Tailwind",
        "Typescript",
        "NodeJS",
        "NestJS",
        "Prisma",
        "JWT",
      ],
      source_url: "https://github.com/joao-rodrigues01",
    },
    {
      id: 2,
      name: "MyContacts",
      date: "August 2023",
      description:
        "A simple App to manage all your contacts. Using a lot of SOLID principels, API calls and almost no library installed.",
      img_url: mycontacts,
      techs: ["React", "Styled Components", "NodeJS", "Express"],
      source_url: "https://github.com/joao-rodrigues01/mycontacts-react",
    },

    {
      id: 3,
      name: "Next Movies",
      date: "November 2023",
      description:
        "A Entertainment App to see all the movies, animes and TV Shows ongoing right now. Connected with TMDB API.",
      img_url: nextmovies,
      techs: ["React", "Styled Components", "NextJS"],
      source_url: "https://github.com/joao-rodrigues01/next-movies",
      preview_url: "https://next-movies-pi.vercel.app",
    },
    // {
    //   id: 4,
    //   name: "Swap Play",
    //   date: "December 2023",
    //   description:
    //     "SwapPlay it's a mobile application directly focused on gamers, you can trade your physical copy of the game into a another game on a easy way.",
    //   img_url: swapplay,
    //   techs: [
    //     "React Native",
    //     "Typescript",
    //     "NodeJS",
    //     "NestJS",
    //     "Prisma",
    //     "JWT",
    //   ],
    //   source_url: "https://github.com/swap-play/swap-app",
    // },
    {
      id: 5,
      name: "Job+ - Etec TCC",
      date: "November 2021",
      description:
        "Job+ it's the final project that we made on ETEC to conclude the course. The App is a solution on pandemic moment to self employers get a job and contact a person who need his services.",
      img_url: jobplus,
      techs: ["React Native", "Typescript", "NodeJS", "JWT"],
      source_url: "https://github.com/CycleCorporation/cycle-mobile",
    },
    {
      id: 6,
      name: "Nattive Movies",
      date: "November 2023",
      description:
        "A mobile App very similar to Next Movies but developed in React Native.",
      img_url: nativemovies,
      techs: ["React Native", "Expo", "Lottie"],
      source_url: "https://github.com/joao-rodrigues01/react-native-movies",
    },
  ];

  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-bold mb-8">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="relative bg-white dark:bg-gray-900 border-2 border-gray-200
           dark:border-gray-700 rounded-lg overflow-hidden dark:hover:shadow-blue-900 transition-all hover:border-primary hover:dark:border-primary hover:shadow-2xl hover:dark:shadow-2xl hover:shadow-blue-300 hover:dark:shadow-blue-900 hover:mt-[-1.5rem] hover:mb-[1.5rem]"
            >
              <img
                className="w-full h-32 lg:h-40 object-cover"
                src={project.img_url}
                alt={project.name}
              />
              <div className="p-4 lg:p-6">
                <h2 className="text-xl font-bold mb-1">{project.name}</h2>
                <span className="text-sm text-gray-800 dark:text-gray-300">
                  {project.date}
                </span>
                <p className="text-sm text-justify mb-3 text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 font-medium px-2 py-0.5 text-xs rounded-[0.25rem] whitespace-nowrap me-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="absolute inset-0 bg-white dark:bg-black bg-opacity-40
              dark:bg-opacity-60 hover:backdrop-filter hover:backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-center"
              >
                {project.preview_url && (
                  <a
                    href={project.preview_url}
                    target="_blank"
                    className="flex text-xl font-bold mt-4 hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="mr-2"
                    >
                      <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path>
                    </svg>
                    Live Preview
                  </a>
                )}
                <a
                  href={project.source_url}
                  target="_blank"
                  className="flex text-xl font-bold mt-4 hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="mr-2"
                  >
                    <path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"></path>
                  </svg>
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
