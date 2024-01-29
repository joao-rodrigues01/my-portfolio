export function ContactMe() {
  return (
    <section
      id="contact"
      className="min-h-[75vh] lg:min-h-screen flex items-center text-center"
    >
      <div className="container mx-auto">
        <h1 className="text-center text-3xl lg:text-4xl font-bold mb-6">
          Contact Me
        </h1>

        <div>
          <div className="flex items-center justify-center mb-6 gap-4 ">
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-victor-rodrigues-169a111a4/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-primary"
              >
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
            </a>

            <a href="https://github.com/joao-rodrigues01" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
              </svg>
            </a>
          </div>

          <p className="text-lg mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="inline-block mr-2 "
            >
              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
            </svg>
            <a href="mailto:j2003.victir@gmail.com" className="underline">
              j2003.victir@gmail.com
            </a>
          </p>

          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            href="/docs/CV-Joao-Victor-Rodrigues-Costa%20-%20EN.pdf"
            download="CV-Joao-Victor-Rodrigues-Costa-EN.pdf"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="inline-block mr-2"
            >
              <path d="M252,128a91.18,91.18,0,0,1-18.41,55.21,12,12,0,0,1-19.18-14.42A68,68,0,1,0,92,128a12,12,0,0,1-24,0,91.7,91.7,0,0,1,2.19-20A44,44,0,0,0,72,196H96a12,12,0,0,1,0,24H72A68,68,0,1,1,79,84.37,92,92,0,0,1,252,128Zm-76.49,39.51L164,179V128a12,12,0,0,0-24,0v51l-11.51-11.52a12,12,0,1,0-17,17l32,32a12,12,0,0,0,17,0l32-32a12,12,0,0,0-17-17Z"></path>
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
