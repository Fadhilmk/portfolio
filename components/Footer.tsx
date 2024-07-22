import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-600 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-3">Feel free to get in touch with me through any of the following:</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="mailto:fadhilmk04@gmail.com" 
            className="text-white hover:text-gray-300 transition"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/Fadhilmk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 transition"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://twitter.com/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 transition"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Muhammed Fadhil M.K. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
