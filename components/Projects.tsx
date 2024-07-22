// components/Projects.tsx
const projects = [
  {
    title: 'Newsletter Platform',
    description: 'A platform for sending bulk newsletter messages to subscribers, with features for adding subscribers through forms, Excel files, or manually.',
    link: 'https://newsletters-platform.vercel.app/',
    tech: 'Next.js, Node.js, MUI, Tailwind, Firebase',
    image: '/images/newsletter-platform.png', // Add your image path here
  },
  {
    title: 'XRF Analyzer Middle East',
    description: 'A lead-generating site for XRF products where users can view products, download datasheet catalogues, and request quotes.',
    link: 'https://www.xrfanalyzermiddleeast.com/',
    tech: 'Node.js, Firebase, Next.js, Tailwind, Bootstrap',
    image: '/images/xrf-analyzer.png', // Add your image path here
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-blue-600">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="relative">
                {/* Project Image */}
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent opacity-70"></div>
                <div className="p-6 relative z-10 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg mb-4">{project.description}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-300 hover:text-blue-400 font-semibold transition-colors"
                  >
                    View Project
                  </a>
                  <p className="mt-2 text-gray-200 text-sm">{project.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
