import { useEffect, useState } from 'react';
import { Github, Star, GitFork, ExternalLink, Loader2 as Loader } from 'lucide-react';
import { motion } from 'framer-motion';
import { fetchGithubProjects, GithubRepo } from '../services/github';

const ProjectCard = ({ project }: { project: GithubRepo }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-2xl opacity-20 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"></div>
      <div className="relative h-full bg-black rounded-xl p-8 border border-white/10 flex flex-col hover:bg-white/5 transition-colors">

        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors shadow-inner">
            <Github size={24} className="text-white group-hover:text-primary transition-colors" />
          </div>
          <div className="flex gap-2">
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/10 rounded-full"
                title="View Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/10 rounded-full"
              title="View Code"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 font-serif tracking-tight line-clamp-1 group-hover:text-primary transition-colors">
          {project.name}
        </h3>

        <p className="text-gray-400 text-sm mb-8 font-sans line-clamp-3 flex-grow leading-relaxed">
          {project.description || "No description available for this project."}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 font-sans pt-6 border-t border-white/10">
          <div className="flex items-center gap-4">
            {project.language && (
              <span className="flex items-center gap-2 font-medium text-gray-400">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {project.language}
              </span>
            )}
            <span className="flex items-center gap-1 text-gray-400">
              <Star size={14} className="text-gray-500" />
              {project.stargazers_count}
            </span>
            <span className="flex items-center gap-1 text-gray-400">
              <GitFork size={14} className="text-gray-500" />
              {project.forks_count}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [projects, setProjects] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchGithubProjects('Vignesh58728');
        setProjects(data);
      } catch (error) {
        console.error('Failed to load projects', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-gray-900 mb-4 tracking-tight">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
            <p className="text-gray-600 font-sans text-lg max-w-xl leading-relaxed">
              Explore my latest open source contributions and experiments, fetched directly from GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Vignesh58728"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm tracking-wide bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md border border-gray-100"
          >
            View Github Profile <ExternalLink size={16} />
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {projects.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-12">
                No projects found or failed to load. Please check back later.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
