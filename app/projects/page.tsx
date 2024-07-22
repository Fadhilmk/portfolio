// components/Projects.tsx
const projects = [
    {
      title: 'Newsletter Platform',
      description: 'A platform for sending bulk newsletter messages to subscribers, with features for adding subscribers through forms, Excel files, or manually.',
      link: 'https://newsletters-platform.vercel.app/',
      tech: 'Next.js, Node.js, MUI, Tailwind, Firebase',
    },
    {
      title: 'XRF Analyzer Middle East',
      description: 'A lead-generating site for XRF products where users can view products, download datasheet catalogues, and request quotes.',
      link: 'https://www.xrfanalyzermiddleeast.com/',
      tech: 'Node.js, Firebase, Next.js, Tailwind, Bootstrap',
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  View Project
                </a>
                <p className="mt-2 text-gray-500">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  