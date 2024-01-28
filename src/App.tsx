import profileImg from "./assets/images/profile.png";
import { AboutMe } from "./components/sections/AboutMe";
import { ContactMe } from "./components/sections/ContactMe";
import { Experience } from "./components/sections/Experience";

import { Header } from "./components/sections/Header";
import { Projects } from "./components/sections/Projects";

function App() {
  return (
    <div className="h-full w-full bg-background">
      <Header />

      <section id="home" className="min-h-screen flex items-center text-center">
        <div className="container mx-auto">
          <div className="relative inline-block">
            <div className="p-1 rounded-[77px] overflow-hidden bg-gradient-to-tl from-primary to-cyan-200 dark:to-green-200 animate-gradient-flow ">
              <img
                alt="Profile"
                src={profileImg}
                className="rounded-[77px] lg:w-36 lg:h-36 object-cover border-[6px] border-background"
                style={{ color: "transparent" }}
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="flex justify-center items-center space-x-7 mt-3 lg:mt-4">
            <span className="font-bold font-mono text-lg">
              Hello World! I'm João V. Rodrigues
            </span>
          </div>

          <h1 className="text-6xl py-4">I'm a Fullstack Developer! 💻</h1>

          <h2 className="text-lg">
            Always ready to the next step. Checkout some of my works 👇
          </h2>

          <div className="flex justify-center items-center gap-4 mt-8">
            <a
              href="#projects"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full lg:w-auto hover:dark:bg-primary/10 hover:dark:text-primary dark:hover:bg-primary/20 cursor-pointer"
            >
              See projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full lg:w-auto cursor-pointer"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>

      <hr className="border-gray-200 dark:border-gray-700" />

      <AboutMe />

      <hr className="border-gray-200 dark:border-gray-700" />

      <Projects />

      <hr className="border-gray-200 dark:border-gray-700" />

      <Experience />

      <hr className="border-gray-200 dark:border-gray-700" />

      <ContactMe />

      <hr className="border-gray-200 dark:border-gray-700" />

      <footer className="container flex flex-col lg:flex-row items-center space-y-2 lg:space-x-2 justify-center px-6 py-4 lg:py-3.5 ">
        <span className="text-sm text-center">
          © 2024 Created by{" "}
          <a
            href="https://github.com/Joao-Rodrigues01"
            className="underline text-primary"
            target="_blank"
          >
            João Victor R.
          </a>{" "}
        </span>
      </footer>
    </div>
  );
}

export default App;
