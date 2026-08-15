export type GitHubProject = {
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  updatedAt: string;
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
      return fallbackProjects;
    }

    const repositories = (await response.json()) as GitHubRepository[];

    return repositories
      .filter(
        (repository) =>
          !repository.fork &&
          !repository.archived &&
          Boolean(repository.description),
      )
      .slice(0, 4)
      .map((repository) => ({
        name: repository.name.replaceAll("_", " "),
        description: repository.description ?? "A recent experiment.",
        url: repository.html_url,
        language: repository.language ?? "Code",
        stars: repository.stargazers_count,
        updatedAt: repository.updated_at,
      }));
  } catch {
    return fallbackProjects;
  }
}
