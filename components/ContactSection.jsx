// components/ContactSection.js
import 'daisyui/dist/full.css';
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 bg-black pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row">
        {/* Social Media Links */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-4">Connect with me</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="https://twitter.com/yourprofile"
                className="text-gray-400 hover:text-white flex items-center"
              >
                <FaTwitter className="mr-2" /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-gray-400 hover:text-white flex items-center"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourprofile"
                className="text-gray-400 hover:text-white flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/yourprofile"
                className="text-gray-400 hover:text-white flex items-center"
              >
                <FaFacebook className="mr-2" /> Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="md:w-2/3 bg-gray-800 p-8 rounded shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 bg-gray-900 text-white rounded border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 bg-gray-900 text-white rounded border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 bg-gray-900 text-white rounded border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
