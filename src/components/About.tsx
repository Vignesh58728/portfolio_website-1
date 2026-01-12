import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import aboutImg from '../assets/about-profile-final.png'; // Final user provided image

export const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative w-full h-[450px] flex items-center justify-center">
              {/* No effects, just the image as requested */}
              <img
                src={aboutImg}
                alt="About Me"
                className="h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-8 text-center md:text-left"
          >
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white tracking-tight">About Me</h2>
            <div className="font-sans text-base md:text-lg text-gray-300 leading-relaxed space-y-6 text-justify">
              <p>
                Motivated and results-driven student pursuing a B.Tech in Artificial Intelligence and Data Science, with strong technical skills and hands-on project experience. I have actively participated in 35+ inter-college events and earned multiple certifications, including 5 NPTEL certifications, demonstrating my commitment to continuous learning.
              </p>
              <p>
                Proficient in Python, Java, and front-end technologies, with additional expertise in UI/UX design and various industry-standard design and development tools. I have successfully completed 10+ freelance projects, delivering high-quality solutions for clients.
              </p>
              <p>
                I aim to apply my technical knowledge, creativity, and practical experience to contribute effectively to real-world software and AI-driven solutions.
              </p>
            </div>

            <div className="pt-4 flex justify-center md:justify-start">
              <Link to="resume" smooth={true} duration={500}>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 font-medium transition-transform active:scale-95 shadow-lg shadow-primary/25 cursor-pointer">
                  View Resume
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
