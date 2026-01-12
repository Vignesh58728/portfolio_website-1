import { useState, useEffect } from 'react';
import { Award, BookOpen, Users, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import event3 from '../assets/event3.jpg';
import trophy from '../assets/event1.jpg';
import cyberfest from '../assets/cyberfest.jpg';

const StatCard = ({ number, label, icon: Icon }: { number: string; label: string; icon: any }) => (
  <motion.div
    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
    className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 group"
  >
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <h3 className="font-serif font-bold text-4xl text-white group-hover:text-primary transition-colors">{number}</h3>
        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
          <Icon className="text-gray-400 group-hover:text-primary w-6 h-6 transition-colors" />
        </div>
      </div>
      <p className="font-sans font-medium text-xs text-gray-400 uppercase tracking-widest group-hover:text-gray-200 transition-colors">{label}</p>
    </div>
  </motion.div>
);

export const Milestones = () => {
  const images = [
    trophy,
    event3,
    cyberfest
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-0.5 w-12 bg-primary"></div>
            <span className="text-primary font-sans font-bold tracking-widest uppercase text-sm">Achievements</span>
          </div>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white tracking-tight">Event Highlights</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left Side - Image Slideshow */}
          <div className="lg:w-5/12 w-full h-[500px] relative overflow-hidden rounded-3xl group">
            {/* Glass Frame */}
            <div className="absolute inset-0 border border-white/10 rounded-3xl z-20 pointer-events-none"></div>

            <AnimatePresence mode='wait'>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Event Highlight"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover object-center brightness-75 group-hover:brightness-100 transition-all duration-500"
              />
            </AnimatePresence>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-30">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'bg-primary w-8' : 'bg-white/30 w-2 hover:bg-white/50'}`}
                />
              ))}
            </div>

            <div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
              <p className="text-white font-sans text-xs font-bold tracking-widest uppercase mb-2 text-primary">Featured</p>
              <p className="text-white font-serif text-2xl leading-tight">Celebrating milestones & <br /> technical excellence.</p>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <StatCard number="10+" label="Course Certificates" icon={BookOpen} />
            <StatCard number="85+" label="Symposium Awards" icon={Users} />
            <StatCard number="10+" label="Workshop Certificates" icon={Award} />
            <StatCard number="10+" label="Sports & Cultural Events" icon={Trophy} />
          </div>

        </div>
      </div>
    </section>
  );
};
