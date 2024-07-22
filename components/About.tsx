const About = () => {
    return (
      <section id="about" className="relative py-20 bg-white-smoke text-dim-gray">
        <div className="absolute inset-0  bg-cover bg-center opacity-40"></div>
        <div className="relative container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-steel-blue">About Me</h2>
              <p className="text-lg md:text-xl mb-6">
                I’m Fadhil, a self-taught Full Stack Web Developer with a deep passion for coding and a commitment to continuous learning. My journey in web development has equipped me with a diverse skill set, enabling me to create innovative and effective web solutions.
              </p>
              <p className="text-lg md:text-xl mb-6">
                I am experienced in both front-end and back-end technologies, and I thrive on challenges that allow me to leverage these skills to solve complex problems and deliver high-quality results.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-slate-gray p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-black">Skills</h3>
                <ul className="list-disc pl-5">
                  <li>JavaScript, TypeScript</li>
                  <li>React, Next.js</li>
                  <li>Node.js, Express</li>
                  <li>HTML, CSS, Tailwind CSS</li>
                  <li>Git, Deployment (Vercel, Netlify)</li>
                </ul>
              </div>
              <div className="bg-slate-gray p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-black">Experience</h3>
                <p>
                  With several years of freelance experience, I have developed and maintained web applications that focus on performance and usability. My work involves leveraging the latest technologies to meet client needs and deliver high-quality results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  