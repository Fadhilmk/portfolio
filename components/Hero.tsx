const Hero = () => {
  return (
    <section className="relative h-screen bg-[url('/images/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-blue-600 bg-opacity-50"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-white">
          Hello, I&apos;m Muhammed Fadhil M.K
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-white">
          A passionate Full Stack Web Developer crafting beautiful and efficient web experiences.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
