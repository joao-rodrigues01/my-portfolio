import { FormattedMessage } from "react-intl";

export function Experience() {
  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-bold mb-6">
          <FormattedMessage id="educationTitle" />
        </h1>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <ol className="relative border-r-2 border-gray-200 dark:border-gray-700 ms-4 lg:me-4 my-auto">
            <li className="mb-10 ms-8 lg:me-8">
              <span className="absolute flex items-center justify-center w-7 h-7 bg-cyan-100 rounded-full -end-3.5 ring-8 ring-background  dark:bg-cyan-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-cyan-500 dark:text-cyan-300"
                >
                  <path d="M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120ZM128,87.57,57.3,64,128,40.43,198.7,64Z"></path>
                </svg>
              </span>
              <h3 className="flex items-center justify-start lg:justify-end text-left lg:text-right lg:text-lg font-semibold text-gray-900 dark:text-white">
                ITEHS (Integrated Technical Education to High School) -
                Technical Degree in Computing
              </h3>
              <p className="flex items-center justify-start lg:justify-end text-left lg:text-right text-gray-700 dark:text-gray-300">
                ETEC - Cidade Tiradentes - SP
              </p>
              <time className="flex justify-start lg:justify-end text-sm mt-1 mb-1.5 font-normal leading-none text-gray-400 dark:text-gray-500">
                January 2019 - December 2021
              </time>
            </li>
          </ol>

          <ol className="relative border-s border-gray-200 dark:border-gray-700 ms-4">
            <li className="mb-10 ms-8">
              <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -start-3.5 ring-8 ring-background dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-primary dark:text-blue-300"
                >
                  <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm64,24V200H96V72ZM40,72H80V200H40ZM216,200H176V72h40V200Z"></path>
                </svg>
              </span>
              <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                Front-End Developer
              </h3>
              <p className="flex items-center text-gray-700 dark:text-gray-300">
                GFT - Technologies
              </p>
              <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Feb 2024 - At the moment
              </time>
              <span className="mb-4 text-small lg:text-base text-justify font-normal text-gray-500 dark:text-gray-400">
                <div className="mt-2 flex flex-col gap-4">
                  {/* <p>
                    • Working at Memora developing NFe management applications,
                    EFD, a web portal for citizens to register NFes to compete
                    for benefits.
                  </p>
                  <p>
                    • Building APIs with integration with other SEFAZ
                    registration systems.
                  </p> */}
                </div>
              </span>
            </li>

            <li className="mb-10 ms-8">
              <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -start-3.5 ring-8 ring-background dark:bg-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-primary dark:text-blue-300"
                >
                  <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm64,24V200H96V72ZM40,72H80V200H40ZM216,200H176V72h40V200Z"></path>
                </svg>
              </span>
              <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                Fullstack Junior Developer
              </h3>
              <p className="flex items-center text-gray-700 dark:text-gray-300">
                Memora - Processos Inovadores
              </p>
              <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                May 2021 - July 2023
              </time>
              <span className="mb-4 text-small lg:text-base text-justify font-normal text-gray-500 dark:text-gray-400">
                <div className="mt-2 flex flex-col gap-4">
                  <p>
                    • Working at Memora developing NFe management applications,
                    EFD, a web portal for citizens to register NFes to compete
                    for benefits.
                  </p>
                  <p>
                    • Building APIs with integration with other SEFAZ
                    registration systems.
                  </p>
                </div>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
