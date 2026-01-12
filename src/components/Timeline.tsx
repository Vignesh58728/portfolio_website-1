import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const TimelineItem = ({ role, date, company, description, isLast, icon: Icon }: { role: string, date: string, company: string, description: string, isLast?: boolean, icon: any }) => (
  <div className="flex gap-6 group">
    {/* Line & Dot */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center z-10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-[0_0_15px_-5px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_-5px_var(--primary)]">
        <Icon size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
      </div>
      {!isLast && <div className="w-0.5 bg-gradient-to-b from-white/10 to-transparent h-full min-h-[120px] -mt-2 group-hover:from-primary/30 transition-colors"></div>}
    </div>

    {/* Content */}
    <div className="pb-12 pt-2">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
        <h3 className="font-serif font-bold text-2xl text-white group-hover:text-primary transition-colors">{role}</h3>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono">
          <Calendar size={12} />
          {date}
        </span>
      </div>
      <h4 className="font-sans font-medium text-lg text-gray-300 mb-4 flex items-center gap-2">
        {company}
      </h4>
      <p className="font-sans text-gray-500 leading-relaxed max-w-2xl group-hover:text-gray-400 transition-colors">
        {description}
      </p>
    </div>
  </div>
);

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-4 tracking-tight">Career & Education</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-0">
          <TimelineItem
            role="Full Stack & AI Developer"
            date="2026"
            company="Freelance & Projects"
            icon={Briefcase}
            description="Architecting high-performance web applications integrated with Generative AI and n8n automation agents. Specializing in Modern UI/UX Design (Figma to Code) and deploying scalable solutions on Cloud infrastructure."
          />
          <TimelineItem
            role="Bachelor of Engineering (CSE)"
            date="2022 - 2026"
            company="M.I.E.T. Engineering College"
            icon={GraduationCap}
            description="Pursuing deep expertise in Computer Science including Cloud Computing, Machine Learning, and Data Science. Leading innovation teams in Hackathons to solve real-world problems using Thinking & AI."
          />
          <TimelineItem
            role="Higher Secondary (HSC)"
            date="2020 - 2022"
            company="State Board"
            icon={Briefcase}
            description="Completed higher secondary education with a focus on Computer Science and Mathematics, building a strong foundation for engineering."
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};
