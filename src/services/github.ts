export interface GithubRepo {
   id: number;
   name: string;
   description: string | null;
   html_url: string;
   homepage: string | null;
   language: string | null;
   stargazers_count: number;
   forks_count: number;
   topics: string[];
}

export const fetchGithubProjects = async (username: string): Promise<GithubRepo[]> => {
   try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=100`);
      if (!response.ok) {
         throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      // Filter out forks if desired, for now keeping everything
      return data.filter((repo: any) => !repo.fork);
   } catch (error) {
      console.error('Error fetching GitHub projects:', error);
      return [];
   }
};
