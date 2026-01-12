import { Mail, Phone, Linkedin, Github, Award, BookOpen, Briefcase, Code, Cpu, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-transparent min-h-screen">
            <div className="max-w-[210mm] mx-auto px-4 sm:px-0">

                {/* Controls Removed */}

                {/* Professional Document Paper */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-black shadow-2xl text-white font-sans border border-white/10"
                    style={{ minHeight: '297mm' }} // A4 Height
                >
                    {/* Header Section */}
                    <div className="bg-neutral-900 text-white p-12 border-b border-white/10">
                        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
                            <div className="text-center md:text-left">
                                <h1 className="text-3xl md:text-4xl font-bold font-serif tracking-wide mb-2 whitespace-nowrap">VIGNESHWARAN .M</h1>
                                <p className="text-lg text-gray-300 font-light tracking-wider uppercase">B.Tech AI-DS Student</p>
                            </div>
                            <div className="flex flex-col gap-2 text-sm text-gray-300">
                                <a href="mailto:saivigneshas@arcpairstudio.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Mail size={16} /> saivigneshas@arcpairstudio.com
                                </a>
                                <span className="flex items-center gap-2">
                                    <Phone size={16} /> +91 9360826971
                                </span>
                                <a href="https://www.linkedin.com/in/vigneshwaran-m-442673254/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Linkedin size={16} /> LinkedIn Profile
                                </a>
                                <a href="https://github.com/Vignesh58728" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Github size={16} /> github.com/Vignesh58728
                                </a>
                                <a href="https://www.naukri.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <Briefcase size={16} /> Naukri Profile
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="p-12 space-y-10">

                        {/* Professional Summary */}
                        <section>
                            <div className="flex items-center gap-3 mb-4 border-b-2 border-white/10 pb-2">
                                <div className="p-2 bg-white/10 rounded-lg text-primary">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider text-white font-serif">Professional Summary</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-justify text-sm">
                                Aspiring Artificial Intelligence and Data Science engineer with a strong foundation in machine learning, web development, and cloud computing. Passionate about leveraging AI to solve real-world problems and creating efficient, user-centric solutions. Proven ability to lead projects, work collaboratively in diverse teams, and adapt quickly to new technologies. Seeking an entry-level position to apply technical skills and contribute to innovative software development projects.
                            </p>
                        </section>

                        {/* Education */}
                        <section>
                            <div className="flex items-center gap-3 mb-6 border-b-2 border-white/10 pb-2">
                                <div className="p-2 bg-white/10 rounded-lg text-primary">
                                    <BookOpen size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider text-white font-serif">Education</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-start group hover:bg-white/5 p-3 rounded-lg transition-colors -mx-3">
                                    <div>
                                        <h4 className="font-bold text-lg text-white">M.I.E.T Engineering College</h4>
                                        <p className="text-gray-400">B.Tech - Artificial Intelligence and Data Science</p>
                                    </div>
                                    <div className="text-right mt-1 sm:mt-0">
                                        <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold mb-1">2022 - 2026</span>
                                        <p className="text-sm font-semibold text-gray-300">CGPA: 8.1 (6th Sem)</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                                        <span className="text-xs font-bold text-gray-500 uppercase">2021-2022</span>
                                        <h4 className="font-bold text-white">Government Higher Secondary School</h4>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-sm text-gray-400">HSC</span>
                                            <span className="font-bold text-primary">65%</span>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                                        <span className="text-xs font-bold text-gray-500 uppercase">2019-2020</span>
                                        <h4 className="font-bold text-white">Government Higher Secondary School</h4>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-sm text-gray-400">SSLC</span>
                                            <span className="font-bold text-primary">75%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Technical Skills */}
                        <section>
                            <div className="flex items-center gap-3 mb-6 border-b-2 border-white/10 pb-2">
                                <div className="p-2 bg-white/10 rounded-lg text-primary">
                                    <Cpu size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider text-white font-serif">Technical Skills</h3>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-gray-300 mb-2 text-sm uppercase tracking-wide">Programming Languages</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Python', 'Java', 'C', 'HTML/CSS', 'JavaScript', 'SQL', 'Dart'].map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-white/5 text-gray-300 rounded-md text-sm font-medium border border-white/10">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-300 mb-2 text-sm uppercase tracking-wide">Technologies & Domains</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'GenAI', 'LLM', 'NLP', 'Data Science', 'Cloud Computing', 'Web Development', 'DevOps'].map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium border border-primary/20">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-300 mb-2 text-sm uppercase tracking-wide">Tools & Libraries</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['VS Code', 'GitHub', 'Google Colab', 'Jupyter', 'Power BI', 'Tableau', 'Figma', 'AWS', 'Docker', 'Postman', 'Pandas', 'Numpy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'Matplotlib', 'React.js', 'Tailwind CSS', 'Node.js', 'MySQL', 'MongoDB'].map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-white/5 text-gray-400 rounded-md text-xs border border-white/10">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Soft Skills */}
                        <section>
                            <div className="flex items-center gap-3 mb-6 border-b-2 border-white/10 pb-2">
                                <div className="p-2 bg-white/10 rounded-lg text-primary">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider text-white font-serif">Soft Skills</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {['Leadership & Team Management', 'Problem Solving & Critical Thinking', 'Effective Communication', 'Time Management', 'Adaptability', 'Creative Thinking', 'Project Planning'].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-green-900/20 text-green-400 rounded-md text-sm font-medium border border-green-900/30">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Internships */}
                        <section>
                            <div className="flex items-center gap-3 mb-6 border-b-2 border-white/10 pb-2">
                                <div className="p-2 bg-white/10 rounded-lg text-primary">
                                    <Briefcase size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider text-white font-serif">Experience</h3>
                            </div>

                            <div className="space-y-8">
                                <div className="relative pl-6 border-l-2 border-white/10">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-black shadow-sm"></div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-lg text-white">Web Design Intern</h4>
                                        <span className="text-sm font-bold text-gray-400 bg-white/10 px-2 py-1 rounded">2024</span>
                                    </div>
                                    <h5 className="text-primary font-medium mb-3">DLK Technologies</h5>
                                    <ul className="list-disc list-outside text-gray-400 text-sm leading-relaxed text-justify ml-4 space-y-1">
                                        <li>Designed and developed responsive user interfaces using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and mobile responsiveness.</li>
                                        <li>Collaborated effectively with the design team to translate UI/UX wireframes into interactive and functional web pages.</li>
                                        <li>Implemented SEO best practices, optimizing website performance and improving search engine visibility.</li>
                                        <li>Managed content updates and maintenance using WordPress CMS, ensuring website accuracy and up-to-date information.</li>
                                    </ul>
                                </div>

                                <div className="relative pl-6 border-l-2 border-white/10">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-600 border-4 border-black"></div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-lg text-white">Infosys Springboard Trainee</h4>
                                        <span className="text-sm font-bold text-gray-400 bg-white/10 px-2 py-1 rounded">2024</span>
                                    </div>
                                    <h5 className="text-primary font-medium mb-3">Infosys</h5>
                                    <ul className="list-disc list-outside text-gray-400 text-sm leading-relaxed text-justify ml-4 space-y-1">
                                        <li>Completed comprehensive training modules focused on digital skills, including Python programming, data structures, and algorithms.</li>
                                        <li>Enhanced problem-solving abilities through rigorous coding exercises and technical assessments.</li>
                                        <li>Participated in soft skills workshops, improving business communication, leadership, and teamwork capabilities suitable for a corporate environment.</li>
                                    </ul>
                                </div>

                                <div className="relative pl-6 border-l-2 border-white/10">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-600 border-4 border-black"></div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-lg text-white">Diploma In Computer Application (DCA)</h4>
                                        <span className="text-sm font-bold text-gray-400 bg-white/10 px-2 py-1 rounded">2022</span>
                                    </div>
                                    <ul className="list-disc list-outside text-gray-400 text-sm leading-relaxed text-justify ml-4 space-y-1 mt-2">
                                        <li>Acquired advanced proficiency in Microsoft Office Suite (Word, Excel, PowerPoint) for effective documentation, data analysis, and checking presentations.</li>
                                        <li>Gained practical knowledge in operating system installation, configuration, and troubleshooting for Windows and Linux environments.</li>
                                        <li>Learned fundamental hardware concepts and basic network troubleshooting techniques.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <div className="flex items-center gap-3 mb-6 border-b-2 border-white/10 pb-2">
                                <div className="p-2 bg-white/10 rounded-lg text-primary">
                                    <Code size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider text-white font-serif">Key Projects</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:shadow-lg transition-shadow">
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="font-bold text-white leading-tight">AI Based Intrusion Detection</h4>
                                        <span className="text-xs font-bold bg-white/10 text-white px-2 py-1 rounded border border-white/10 shadow-sm">2025</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mb-4 leading-relaxed text-justify">
                                        Developed a real-time rogue Wi-Fi detection system using microcontrollers and AI. Integrated TensorFlow for malware analysis and a Flask dashboard for monitoring.
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        <span className="text-[10px] font-mono bg-black/30 px-2 py-1 rounded border border-white/10 text-primary">Python</span>
                                        <span className="text-[10px] font-mono bg-black/30 px-2 py-1 rounded border border-white/10 text-primary">Flask</span>
                                        <span className="text-[10px] font-mono bg-black/30 px-2 py-1 rounded border border-white/10 text-primary">TensorFlow</span>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:shadow-lg transition-shadow">
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="font-bold text-white leading-tight">AI Movie Recommendation</h4>
                                        <span className="text-xs font-bold bg-white/10 text-white px-2 py-1 rounded border border-white/10 shadow-sm">2024</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mb-4 leading-relaxed text-justify">
                                        Engineered a system using NLP and cosine similarity to analyze movie descriptions and provide personalized rankings based on user preferences.
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        <span className="text-[10px] font-mono bg-black/30 px-2 py-1 rounded border border-white/10 text-primary">NLP</span>
                                        <span className="text-[10px] font-mono bg-black/30 px-2 py-1 rounded border border-white/10 text-primary">Streamlit</span>
                                        <span className="text-[10px] font-mono bg-black/30 px-2 py-1 rounded border border-white/10 text-primary">ML</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Achievements */}
                        <section>
                            <div className="flex items-center gap-3 mb-6 border-b-2 border-white/10 pb-2">
                                <div className="p-2 bg-white/10 rounded-lg text-primary">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider text-white font-serif">Achievements</h3>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { title: "LeetCode: Solved 200+ Problems | Contest Rating 1600", year: "" },
                                    { title: "Finalist - Kochi Hackathon (Netstrum Company, Kerala)", year: "2025" },
                                    { title: "Final Round - Hack Hustle (Saveetha Engineering College)", year: "2025" },
                                    { title: "Participant - MSME SAP Hack Fest", year: "2024" },
                                    { title: "Finalist - Bit-AI-MI National Level Hackathon", year: "2024" },
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 bg-white/5 border border-white/10 rounded-lg hover:border-primary/30 transition-colors">
                                        <span className="font-medium text-gray-300 text-sm">{item.title}</span>
                                        {item.year && <span className="text-xs font-bold text-gray-500">{item.year}</span>}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Certifications */}
                        <section>
                            <div className="flex items-center gap-3 mb-6 border-b-2 border-white/10 pb-2">
                                <div className="p-2 bg-white/10 rounded-lg text-primary">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider text-white font-serif">Certifications</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    { name: "Advancing in AI & Cloud Computing", issuer: "LinkedIn", year: "2025" },
                                    { name: "AI Agent & AI Cloud Computing", issuer: "Microsoft", year: "2025" },
                                    { name: "Python for Data Science", issuer: "IBM", year: "2025" },
                                    { name: "Web Development", issuer: "Alagappa University", year: "2025" },
                                    { name: "Programming in Java (Score: 88)", issuer: "NPTEL", year: "2025" },
                                    { name: "Cloud Computing (Score: 67)", issuer: "NPTEL", year: "2025" },
                                    { name: "Ethical Hacking (Score: 90)", issuer: "NPTEL", year: "2025" },
                                    { name: "C Language (Score: 78)", issuer: "NPTEL", year: "2025" },
                                    { name: "Business Email", issuer: "HP", year: "2024" },
                                    { name: "Python Essentials", issuer: "GUVI", year: "2024" },
                                    { name: "Cloud Computing", issuer: "IBM", year: "2024" },
                                ].map((cert, i) => (
                                    <div key={i} className="flex justify-between items-baseline border-b border-white/10 pb-1">
                                        <span className="text-sm font-medium text-gray-300 truncate pr-2" title={cert.name}>{cert.name}</span>
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <span className="text-xs text-gray-500">{cert.issuer}</span>
                                            <span className="text-xs font-bold text-primary bg-primary/10 px-1.5 rounded">{cert.year}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>
                </motion.div>

                <div className="text-center mt-12 text-gray-500 text-sm">
                    <p>Designed by Vignesh</p>
                </div>

            </div>
        </section>
    );
};
