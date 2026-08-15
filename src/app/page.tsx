import { PrintButton } from "@/components/print-button";
import { getRecentProjects } from "@/lib/github";

const focusAreas = [
  "Reinforcement learning",
  "Contextual bandits",
  "Recommender systems",
  "Causal inference",
  "Offline evaluation",
  "Stochastic optimization",
];

const experience = [
  {
    period: "2022 to present",
    role: "Staff Scientist · Ranking & Recommender Systems Tech Lead",
    company: "Pinterest",
    description:
      "Leading ranking across HomeFeed, Search, and Related Pins. Pioneered offline replay and contextual-bandit feedback loops; long-term reward work drove +1.5M weekly active users across 8+ experiments.",
    current: true,
  },
  {
    period: "2021 to 2022",
    role: "Senior Data Scientist · Risk Scoring Lead",
    company: "Jumio",
    description:
      "Led aggregate fraud scoring for 10,000+ clients across 40+ countries, unifying contextual, image, clustering, and NLP models while reducing human-labeling costs by roughly 40%.",
  },
  {
    period: "2021 to 2023",
    role: "Adjunct Professor · Applied Machine Learning",
    company: "University of Toronto",
    description:
      "Taught approximately 150 students across machine learning in finance, deep learning, databases, cloud computing, and blockchain.",
  },
  {
    period: "2020 to 2021",
    role: "Data Science Manager · Risk Algorithms & Fraud",
    company: "Flexiti Financial",
    description:
      "Replaced rule-based fraud decisions with adaptive ML systems, improving F1-score by more than 400% and uncovering fraud through anomaly detection and NLP.",
  },
  {
    period: "2017 to 2020",
    role: "Senior Data Scientist · Credit Risk & Fraud",
    company: "Capital One",
    description:
      "Led high-risk authorization strategy, generating $7M annual NIBT; designed policies across $37B in credit exposure and uncovered $20M/month in potential fraud recovery.",
  },
  {
    period: "2016 to 2017",
    role: "Data Scientist · Cerebral Cortex Research",
    company: "Montreal Neurological Institute",
    description:
      "Developed a Python framework to simulate electrical brain activity from histological data in support of research into epilepsy and Alzheimer’s disease.",
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
    url: "https://arxiv.org/pdf/2607.14192",
  },
  {
    year: "2026",
    venue: "AAAI",
    title:
      "Save, Revisit, Retain: A Scalable Framework for Enhancing User Retention in Large-Scale Recommender Systems",
    description:
      "A scalable recommender-system framework connecting meaningful user actions to retention.",
    url: "https://ojs.aaai.org/index.php/AAAI/article/download/41434/45395",
  },
  {
    year: "2025",
    venue: "KDD Workshop",
    title:
      "Detection and Measurement of Near-Policy-Violating Content in Online Platforms",
    description:
      "Methods for measuring borderline content and its effects across online ecosystems.",
    url: "/papers/detection-near-policy-violating-content.pdf",
  },
  {
    year: "2025",
    venue: "ACM ToRS · Submitted",
    title:
      "A Review of Reinforcement Learning Applications in Ad Policy Optimization for Large-Scale Recommender Systems",
    description:
      "A review of sequential decision-making methods for optimizing advertising policy within large-scale recommendation ecosystems.",
    url: "/papers/rl-ad-policy-optimization-review.pdf",
  },
];

const patents = [
  {
    application: "US 18/678,748",
    year: "2024",
    area: "Recommender systems",
    title: "Recommending Content Items Based on a Long-Term Objective",
    description:
      "Recommendation methods that use subscriber and content embeddings to optimize toward durable, long-term outcomes rather than immediate interaction alone.",
    url: "https://patents.google.com/patent/US20250139683A1/en",
  },
  {
    application: "US 18/499,984",
    year: "2023",
    area: "Generative AI",
    title: "Identifying Image Based Content Items Using a Large Language Model",
    description:
      "A system for using large language models to generate semantic representations and identify image-based content at scale.",
    url: "https://patents.google.com/patent/US20250139353A1/en",
  },
  {
    application: "US 17/564,377",
    year: "2023",
    area: "Identity fraud",
    title:
      "Fraud Detection Using Aggregate Fraud Score for Confidence of Liveness and Similarity Decisions",
    description:
      "Machine learning models that combine device, network, geographic, and identity signals into an aggregate score for more robust verification decisions.",
    url: "https://scholar.google.com/citations?view_op=view_citation&user=WGI9WWQAAAAJ&citation_for_view=WGI9WWQAAAAJ:u5HHmVD_uO8C",
  },
  {
    application: "US 17/941,343",
    year: "2022",
    area: "Risk scoring",
    title:
      "System and Method for Optimizing Authentication Workflows, Risk Scoring, and Decision Points",
    description:
      "Context-aware risk scoring that helps authentication systems select verification requirements and optimize decision points.",
    url: "https://scholar.google.com/citations?view_op=view_citation&user=WGI9WWQAAAAJ&citation_for_view=WGI9WWQAAAAJ:d1gkVwhDpl0C",
  },
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
              I&apos;m Armando Ordorica, a staff scientist and PhD researcher
              with 10+ years building production ML systems at the intersection
              of reinforcement learning, causal inference, ranking, and
              recommendation. I lead ranking and recommender systems at
              Pinterest.
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
              proxies by designing systems that explore responsibly, understand
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
            <div className="profile-details">
              <div>
                <span>Toolbox</span>
                <p>
                  Python · SQL · PyTorch · TensorFlow · AWS · NumPy/SciPy ·
                  scikit-learn
                </p>
              </div>
              <div>
                <span>Languages</span>
                <p>
                  English · French · Spanish
                  <small>Native fluency</small>
                </p>
              </div>
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
                  <span>Read PDF</span>
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

          <div className="patent-section">
            <div className="patent-heading">
              <div>
                <span className="section-label">Patent portfolio</span>
                <h3>Inventions across recommendation, AI, and risk.</h3>
              </div>
              <p>
                {patents.length} United States patent applications listed on
                Google Scholar.
              </p>
            </div>
            <div className="patent-grid">
              {patents.map((patent, index) => (
                <a
                  className="patent-card"
                  href={patent.url}
                  key={patent.application}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="patent-card-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{patent.area}</span>
                  </div>
                  <h4>{patent.title}</h4>
                  <p>{patent.description}</p>
                  <div className="patent-number">
                    <span>{patent.application}</span>
                    <span>{patent.year}</span>
                    <ArrowIcon />
                  </div>
                </a>
              ))}
            </div>
          </div>

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
              {recentProjects.map((project, index) => {
                const content = (
                  <>
                  <div className="project-topline">
                    <span>0{index + 1}</span>
                    {project.isPrivate ? (
                      <span className="private-label">
                        <svg viewBox="0 0 20 20" aria-hidden="true">
                          <rect x="4" y="8" width="12" height="9" rx="2" />
                          <path d="M7 8V6a3 3 0 0 1 6 0v2" />
                        </svg>
                        Private
                      </span>
                    ) : (
                      <ArrowIcon />
                    )}
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-meta">
                    <span>{project.language}</span>
                    <span>Updated {formatUpdatedAt(project.updatedAt)}</span>
                  </div>
                  </>
                );

                return project.isPrivate ? (
                  <article
                    className="project-card private-card"
                    key={project.name}
                  >
                    {content}
                  </article>
                ) : (
                  <a
                    className="project-card"
                    href={project.url}
                    key={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content}
                  </a>
                );
              })}
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
                <strong>PhD · Operations Research / Computer Science</strong>
                <small>Offline RL in large-scale recommender systems · 2023 to present</small>
              </div>
              <div>
                <span>University of Toronto</span>
                <strong>MEng · Electrical & Computer Engineering</strong>
                <small>Analytics and cloud-scale anomaly detection · 2019 to 2020</small>
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
              <a href="mailto:armandordorica@gmail.com">
                Send an email
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
