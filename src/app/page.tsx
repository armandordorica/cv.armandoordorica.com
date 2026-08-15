import { PrintButton } from "@/components/print-button";
import { getRecentProjects } from "@/lib/github";

const focusAreas = [
  "Reinforcement learning",
  "Contextual bandits",
  "Recommender systems",
  "Long-term value",
  "Ranking & relevance",
  "Applied research",
];

const experience = [
  {
    period: "2026 — now",
    role: "Staff Scientist · Personalization Algorithms Tech Lead",
    company: "Pinterest",
    description:
      "Leading explore/exploit algorithms for recommendation ranking and long-term value using MDPs, contextual bandits, and reinforcement learning.",
    current: true,
  },
  {
    period: "2023 — 2026",
    role: "Senior Data Scientist · Algorithms",
    company: "Pinterest",
    description:
      "Redesigned ranking toward long-term value across organic and paid surfaces, contributing to 1.5M incremental weekly active users and eight launched experiments.",
  },
  {
    period: "2021 — now",
    role: "Adjunct Professor · Applied Machine Learning",
    company: "University of Toronto",
    description:
      "Teaching data science, machine learning, algorithmic trading, and blockchain fundamentals to the next generation of practitioners.",
    current: true,
  },
  {
    period: "2021 — 2022",
    role: "Machine Learning Scientist · Risk Algorithms",
    company: "Jumio",
    description:
      "Led aggregate fraud scoring research across contextual, image, clustering, and NLP signals for a global identity-verification platform.",
  },
  {
    period: "2017 — 2021",
    role: "Data Science · Risk, Fraud & Optimization",
    company: "Capital One · Flexiti",
    description:
      "Built decision systems spanning fraud detection, credit policy, anomaly detection, and yield optimization at billion-dollar scale.",
  },
];

const publications = [
  {
    year: "2026",
    venue: "ACM RecSys",
    title:
      "Long-term User Engagement Optimization through Model-agnostic Downstream Rewards Learning",
    description:
      "A framework for finding and evaluating downstream reward signals that improve long-term outcomes in large-scale recommendation.",
    url: "https://arxiv.org/abs/2607.14192",
  },
  {
    year: "2026",
    venue: "AAAI",
    title:
      "Save, Revisit, Retain: A Scalable Framework for Enhancing User Retention in Large-Scale Recommender Systems",
    description:
      "A scalable recommender-system framework connecting meaningful user actions to retention.",
    url: "https://arxiv.org/abs/2511.18013",
  },
  {
    year: "2025",
    venue: "KDD Workshop",
    title:
      "Detection and Measurement of Near-Policy-Violating Content in Online Platforms",
    description:
      "Methods for measuring borderline content and its effects across online ecosystems.",
    url: "https://scholar.google.com/citations?user=WGI9WWQAAAAJ",
  },
];

const patents = [
  "Recommending content items based on a long-term objective",
  "Identifying image-based content items using a large language model",
  "Fraud detection using aggregate fraud scores",
  "Optimizing authentication workflows and risk scoring",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function formatUpdatedAt(updatedAt: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(updatedAt));
}

export default async function Home() {
  const recentProjects = await getRecentProjects();

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Armando Ordorica home">
          AO<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#research">Research</a>
          <a href="#lately">Lately</a>
        </nav>
        <a
          className="header-link"
          href="https://www.linkedin.com/in/armando-o-28711973"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
          <ArrowIcon />
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="orb orb-one" aria-hidden="true" />
          <div className="orb orb-two" aria-hidden="true" />
          <div className="hero-inner">
            <p className="eyebrow fade-in">
              <span className="status-dot" />
              Staff Scientist · New York
            </p>
            <h1 className="fade-in delay-one">
              I build intelligent systems that learn what matters{" "}
              <em>over time.</em>
            </h1>
            <p className="hero-copy fade-in delay-two">
              I&apos;m Armando Ordorica—a machine learning scientist working at
              the intersection of reinforcement learning, personalization, and
              human behavior. I lead personalization algorithms at Pinterest
              and teach applied ML at the University of Toronto.
            </p>
            <div className="hero-actions fade-in delay-three">
              <a className="primary-button" href="#work">
                Explore my work
                <ArrowIcon />
              </a>
              <PrintButton />
            </div>
          </div>
          <div className="scroll-note" aria-hidden="true">
            <span>Scroll to explore</span>
            <i />
          </div>
        </section>

        <section className="intro-section section-shell">
          <div className="section-label">01 · Practice</div>
          <div className="intro-content">
            <p className="statement">
              The best recommendation isn&apos;t always the next click.
              Sometimes it&apos;s the reason someone comes back next week.
            </p>
            <p className="supporting-copy">
              My work focuses on moving machine learning beyond short-term
              proxies—designing systems that explore responsibly, understand
              delayed outcomes, and create durable value for people and
              platforms.
            </p>
            <div className="focus-grid">
              {focusAreas.map((area, index) => (
                <div className="focus-item" key={area}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section" id="work">
          <div className="section-shell">
            <div className="section-heading">
              <div className="section-label light">02 · Experience</div>
              <div>
                <h2>Work with consequence.</h2>
                <p>
                  Research translated into products, policy, and measurable
                  impact.
                </p>
              </div>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.role}-${item.period}`}>
                  <div className="timeline-period">{item.period}</div>
                  <div className="timeline-role">
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <p className="timeline-description">{item.description}</p>
                  {item.current && <span className="current-pill">Current</span>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="research-section section-shell" id="research">
          <div className="section-heading">
            <div className="section-label">03 · Research</div>
            <div>
              <h2>Ideas, tested at scale.</h2>
              <p>
                Publications and inventions spanning long-term engagement,
                responsible ranking, and risk.
              </p>
            </div>
          </div>

          <div className="publication-list">
            {publications.map((publication) => (
              <a
                className="publication-card"
                href={publication.url}
                key={publication.title}
                target="_blank"
                rel="noreferrer"
              >
                <div className="publication-meta">
                  <span>{publication.year}</span>
                  <span>{publication.venue}</span>
                </div>
                <div>
                  <h3>{publication.title}</h3>
                  <p>{publication.description}</p>
                </div>
                <span className="round-arrow">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>

          <details className="patent-drawer">
            <summary>
              <span>
                <strong>Selected patents</strong>
                <small>{patents.length} filings across recommendation and risk</small>
              </span>
              <span className="plus">+</span>
            </summary>
            <ol>
              {patents.map((patent) => (
                <li key={patent}>{patent}</li>
              ))}
            </ol>
          </details>

          <a
            className="text-link"
            href="https://scholar.google.com/citations?user=WGI9WWQAAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            View Google Scholar profile
            <ArrowIcon />
          </a>
        </section>

        <section className="lately-section" id="lately">
          <div className="section-shell">
            <div className="section-heading">
              <div className="section-label light">04 · Lately</div>
              <div>
                <div className="live-label">
                  <span className="status-dot" />
                  Synced from GitHub
                </div>
                <h2>What I&apos;ve been up to.</h2>
                <p>
                  Recent public experiments, teaching material, and code from
                  outside the day job.
                </p>
              </div>
            </div>
            <div className="project-grid">
              {recentProjects.map((project, index) => (
                <a
                  className="project-card"
                  href={project.url}
                  key={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="project-topline">
                    <span>0{index + 1}</span>
                    <ArrowIcon />
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-meta">
                    <span>{project.language}</span>
                    <span>Updated {formatUpdatedAt(project.updatedAt)}</span>
                  </div>
                </a>
              ))}
            </div>
            <a
              className="text-link light-link"
              href="https://github.com/armandordorica"
              target="_blank"
              rel="noreferrer"
            >
              Explore all 80+ repositories
              <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="education-section section-shell">
          <div className="section-label">05 · Education</div>
          <div className="education-content">
            <h2>Engineer by training.<br />Scientist by curiosity.</h2>
            <div className="degree-list">
              <div>
                <span>University of Toronto</span>
                <strong>PhD · Reinforcement Learning</strong>
                <small>Sequence prediction in sparse signal spaces</small>
              </div>
              <div>
                <span>University of Toronto</span>
                <strong>MEng · Electrical & Computer Engineering</strong>
                <small>Analytics, anomaly detection, and deep learning</small>
              </div>
              <div>
                <span>McGill University</span>
                <strong>BEng · Electrical Engineering</strong>
                <small>Minor in Software Engineering</small>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-orb" aria-hidden="true" />
          <div className="section-shell contact-inner">
            <p className="eyebrow">Open to thoughtful conversations</p>
            <h2>Let&apos;s think further<br />than the next click.</h2>
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/armando-o-28711973"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
                <ArrowIcon />
              </a>
              <a
                href="https://github.com/armandordorica"
                target="_blank"
                rel="noreferrer"
              >
                Follow on GitHub
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>Armando Ordorica</span>
        <span>New York · 2026</span>
        <span>Built as a living CV</span>
      </footer>
    </>
  );
}
