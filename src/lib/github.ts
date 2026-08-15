export type GitHubProject = {
  name: string;
  description: string;
  url?: string;
  language: string;
  stars: number;
  updatedAt: string;
  isPrivate?: boolean;
};

type GitHubRepository = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

const fallbackProjects: GitHubProject[] = [
  {
    name: "Portfolio Optimization",
    description:
      "Experiments in portfolio construction, allocation, and quantitative optimization.",
    url: "https://github.com/armandordorica/Portfolio_Optimization",
    language: "Python",
    stars: 1,
    updatedAt: "2025-05-09T00:00:00Z",
  },
  {
    name: "APS1070 Anomaly Detection",
    description:
      "Anomaly detection using Gaussian mixture models and probabilistic methods.",
    url: "https://github.com/armandordorica/APS1070_Anomaly_Detection",
    language: "Jupyter Notebook",
    stars: 4,
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    name: "Adversarial Training",
    description:
      "Exploring CNN decision boundaries through adversarial training on MNIST.",
    url: "https://github.com/armandordorica/ECE1513_A5_Adversarial_training",
    language: "Jupyter Notebook",
    stars: 1,
    updatedAt: "2024-01-01T00:00:00Z",
  },
];

const selectedPrivateProjects: GitHubProject[] = [
  {
    name: "sentiment learn to rank paper",
    description:
      "Private research build. The project name and activity are public; implementation details remain confidential.",
    language: "Jupyter Notebook",
    stars: 0,
    updatedAt: "2026-08-13T16:48:23Z",
    isPrivate: true,
  },
  {
    name: "local llama macOS",
    description:
      "Private local-AI systems project. Source code and technical details are not publicly accessible.",
    language: "Systems",
    stars: 0,
    updatedAt: "2026-08-13T03:27:51Z",
    isPrivate: true,
  },
  {
    name: "vision cam app",
    description:
      "Private computer-vision application. Source code and technical details are not publicly accessible.",
    language: "Python",
    stars: 0,
    updatedAt: "2026-07-12T18:43:09Z",
    isPrivate: true,
  },
];

export async function getRecentProjects(): Promise<GitHubProject[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/armandordorica/repos?sort=updated&per_page=30",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "cv.armandoordorica.com",
        },
        next: { revalidate: 21600 },
      },
    );

    if (!response.ok) {
      return [...selectedPrivateProjects, ...fallbackProjects.slice(0, 3)];
    }

    const repositories = (await response.json()) as GitHubRepository[];

    const publicProjects = repositories
      .filter(
        (repository) =>
          !repository.fork &&
          !repository.archived &&
          Boolean(repository.description),
      )
      .slice(0, 3)
      .map((repository) => ({
        name: repository.name.replaceAll("_", " "),
        description: repository.description ?? "A recent experiment.",
        url: repository.html_url,
        language: repository.language ?? "Code",
        stars: repository.stargazers_count,
        updatedAt: repository.updated_at,
      }));

    return [...selectedPrivateProjects, ...publicProjects];
  } catch {
    return [...selectedPrivateProjects, ...fallbackProjects.slice(0, 3)];
  }
}
