import profileImg from './assets/profile.png';
import jsImg from './assets/js.svg';
import tsImg from './assets/ts.svg';
import reactImg from './assets/react.svg';

import javaImg from './assets/java.svg';
import springImg from './assets/springboot.svg';
import viteImg from './assets/vite.svg';
import tailwindImg from './assets/tailwind.svg';
import styledImg from './assets/styled.svg';
import nodeImg from './assets/node.svg';
import nestImg from './assets/nest.svg';
import prismaImg from './assets/prisma.svg';
import postgresImg from './assets/postgres.svg';
import oracleImg from './assets/oracle.svg';
import angularImg from './assets/angular.svg';
import expressImg from './assets/express.svg';

function App() {
	return (
		<div className="h-full w-full bg-background">
			<header className="container fixed top-0 left-0 right-0 mx-auto flex items-center justify-between px-6 py-4 lg:p-6">
				<h1 className="text-2xl font-bold">João V. Rodrigues</h1>

				<nav className="flex items-center gap-6 font-medium">
					<a href="#home">Home</a>
					<a href="#about">About Me</a>
					<a href="#projects">Projects</a>
					<a href="#experience">Experiences</a>
					<a href="#contact">Contact me</a>
					<div>
						<button></button>
					</div>
				</nav>
			</header>

			<section id="home" className="min-h-screen flex items-center text-center">
				<div className="container flex items-center justify-center flex-col gap-4">
					<div className="">
						<img
							src={profileImg}
							className="w-full h-full max-w-[144px] max-h-[144px] rounded-[77px]"
						/>
					</div>

					<span className="font-bold font-mono text-lg">
						Hello World! I'm João V. Rodrigues
					</span>

					<h1 className="text-6xl">I'm a Fullstack Developer</h1>

					<h2 className="text-lg">
						Always ready to the next step. Checkout some of my works 👇
					</h2>

					<div className="flex gap-4">
						<a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full lg:w-auto hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 cursor-pointer">
							See projects
						</a>
						<a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full lg:w-auto cursor-pointer">
							Contact me
						</a>
					</div>
				</div>
			</section>

			<hr className="border-gray-200 dark:border-gray-700" />

			<section
				id="about"
				className="bg-gray-100 dark:bg-gray-900 py-12 lg:py-16"
			>
				<div className="container mx-auto">
					<h1 className="text-center text-3xl lg:text-4xl font-bold mb-6">
						About me
					</h1>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div>
							<h1 className="text-center text-2xl font-semibold mb-4">
								Presentation
							</h1>
							<p className="text-gray-700 dark:text-gray-300 text-justify">
								Olá! 👋 Sou um desenvolvedor full stack com dois anos de
								experiência apaixonado por criar soluções de alto desempenho e
								inovadoras. Minha jornada no mundo da tecnologia me levou a
								especializar-me em SpringBoot, React e Node, onde encontrei
								minha paixão por construir aplicativos web de última geração.
								Sou proficientemente versado em React e Springboot, o que me
								permite abordar desafios técnicos com confiança e precisão.
								Acredito firmemente na importância da inovação e estou sempre
								ansioso para aprender e colaborar com equipes talentosas. Minha
								resiliência e proatividade são características que me definem,
								especialmente quando estou enfrentando projetos desafiadores.
								Tenho um compromisso inabalável com a excelência e busco
								constantemente superar expectativas. Se você está em busca de um
								talento técnico dedicado, apaixonado por tecnologia e focado em
								entregar soluções de alto desempenho, estou pronto para
								contribuir e fazer a diferença. Vamos trabalhar juntos e
								transformar ideias em realidade!
							</p>
						</div>

						<div>
							<h1 className="text-center text-2xl font-semibold mb-4">
								Techs i oftenly work with
							</h1>

							<div className="flex flex-wrap  justify-center lg:justify-start gap-2">
								<img
									src={jsImg}
									title="Javascript"
									alt="Javascript"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
								<img
									src={tsImg}
									alt="Typescript"
									title="Typescript"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
								<img
									src={reactImg}
									alt="React"
									title="React"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
								<img
									src={javaImg}
									alt="Java"
									title="Java"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
								<img
									src={springImg}
									alt="SpringBoot"
									title="SpringBoot"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>

								<img
									src={angularImg}
									alt="Angular"
									title="Angular"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
								<img
									src={viteImg}
									alt="Vite"
									title="Vite"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
								<img
									src={tailwindImg}
									alt="Tailwind"
									title="Tailwind"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
								<img
									src={styledImg}
									alt="Styled Components"
									title="Styled Components"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
								<img
									src={nodeImg}
									alt="NodeJS"
									title="NodeJS"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
								<img
									src={expressImg}
									alt="Express"
									title="Express"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
								<img
									src={nestImg}
									alt="NestJS"
									title="NestJS"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
								<img
									src={prismaImg}
									alt="PrismaJS"
									title="PrismaJS"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
								<img
									src={postgresImg}
									alt="PostgresSQL"
									title="PostgresSQL"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
								<img
									src={oracleImg}
									alt="Oracle SQL"
									title="Oracle SQL"
									className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<hr className="border-gray-200 dark:border-gray-700" />

			<section id="projects">
				<div className="container mx-auto">
					<h1 className="text-center text-3xl lg:text-4xl font-bold mb-6">
						Projects
					</h1>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						<div>
							<img src="" alt="" />
							<div>
								<h1>MyContacts</h1>
								<span>November 2023</span>
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<hr className="border-gray-200 dark:border-gray-700" />

			<section id="experience">
				<div className="container mx-auto">
					<h1 className="text-center text-3xl lg:text-4xl font-bold mb-6">
						Education & Experiences
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
									Fullstack Junior Developer
								</h3>
								<p className="flex items-center text-gray-700 dark:text-gray-300">
									Memora - Processos Inovadores
								</p>
								<time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
									May 2021 - July 2023
								</time>
								<p className="mb-4 text-small lg:text-base text-justify font-normal text-gray-500 dark:text-gray-400">
									<span>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Debitis officiis eligendi quibusdam beatae incidunt autem
										culpa, architecto fuga ad similique, ea qui nemo dicta.
										Beatae, saepe incidunt. Ab, deleniti fuga!
									</span>
								</p>
							</li>
						</ol>
					</div>
				</div>
			</section>

			<hr className="border-gray-200 dark:border-gray-700" />

			<section
				id="contact"
				className="min-h-[75vh] lg:min-h-screen flex items-center text-center"
			>
				<div className="container mx-auto">
					<h1>Contact Me</h1>

					<div>
						{/* github linkedin */}

						<div>{/* email */}</div>

						{/* butto to download cv */}
					</div>
				</div>
			</section>

			<footer>© 2024 Created by João Victor R. using React and Tailwind</footer>
		</div>
	);
}

export default App;
