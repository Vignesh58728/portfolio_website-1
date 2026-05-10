import { Button } from './ui/Button';
import { Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import profileImg from '../assets/hero-profile-v2.png';
import { TypingAnimation } from './ui/typing-animation';

export const Hero = () => {


  return (
    <section id="home" className="relative pt-32 min-h-screen flex flex-col justify-center overflow-hidden bg-transparent">
      {/* Abstract Background Removed */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Clean background without blobs */}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-row items-center justify-between gap-4 md:gap-12">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[55%] md:w-1/2 space-y-4 md:space-y-8 text-left"
        >
          <div>
            <TypingAnimation className="font-serif font-medium text-sm sm:text-lg text-primary tracking-wide mb-2 md:mb-4 uppercase leading-normal">
              Hello, I'm VIGNESHWARAN
            </TypingAnimation>
            <div className="flex flex-col gap-2">
              <h1 className="font-serif font-bold text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
                Full-Stack Developer <br />
                <span className="text-white/80">& AI & Cloud.</span>
              </h1>
            </div>
          </div>

          <p className="text-gray-200 text-sm sm:text-lg md:text-xl font-light max-w-lg leading-relaxed font-sans">
            AI & Data Science Student @ M.I.E.T. Engineering College. <br className="hidden md:block" />
            Building intelligent systems with AI & n8n / Cloud.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-start pt-2 md:pt-4">
            <Link to="contact" smooth={true} duration={500}>
              <Button variant="primary" className="hidden md:inline-flex w-full sm:w-auto rounded-full px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base shadow-lg shadow-primary/20 hover:shadow-xl transition-all cursor-pointer">
                Hire Me
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <Button variant="outline" className="w-full sm:w-auto rounded-full px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-base border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all cursor-pointer">
                Contact Me <Mail className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[45%] md:w-1/2 flex justify-end relative"
        >
          <div className="relative w-full aspect-[3/4] md:w-[380px] md:h-[500px] group">
            {/* Main Image */}
            <img
              src={profileImg}
              alt="Vignesh"
              className="relative z-10 w-full h-full object-cover rounded-3xl transition-all duration-500"
            />

            {/* Mobile Floating Hire Me Button (Body Position) */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute bottom-20 right-10 md:hidden z-20"
            >
              <Link to="contact" smooth={true} duration={500}>
                <button className="bg-primary text-black font-bold text-xs px-4 py-2 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] animate-bounce">
                  Hire Me 👋
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-white/50 text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase">Scroll Now</span>
        <ChevronDown className="text-primary/80 w-5 h-5 md:w-6 md:h-6" />
      </motion.div>

    </section>
  );
};
