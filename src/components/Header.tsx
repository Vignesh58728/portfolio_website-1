import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Resume', to: 'resume' },
    { name: 'Projects', to: 'projects' },
    { name: 'About us', to: 'about' },
    { name: 'Contact Us', to: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex flex-col">
              <h1 className="font-serif font-bold text-2xl text-white tracking-tight">VK</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="font-sans text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition-colors tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Vignesh58728"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vigneshwaran-m-442673254/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0A66C2] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black border-b border-white/10 overflow-hidden shadow-lg"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer font-sans transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Social Links */}
            <div className="flex gap-6 px-3 py-4 mt-4 border-t border-white/10">
              <a href="https://github.com/Vignesh58728" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/vigneshwaran-m-442673254/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};
