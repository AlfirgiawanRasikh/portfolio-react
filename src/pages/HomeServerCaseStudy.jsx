import { lazy, Suspense } from "react";
import Reveal from "../components/Reveal";
import dashboardScreenshot from "../assets/home-server-dashboard.png";
import hermesTelegramScreenshot from "../assets/hermes-telegram-operations.png";

const GlobalVisual = lazy(() =>
    import("../components/GlobalVisual")
);

function HomeServerCaseStudy() {
    return (
        <div className="site">
            <Suspense fallback={null}>
                <GlobalVisual />
            </Suspense>

            <main className="content">
                <section
                    id="home-server"
                    className="section home-section"
                >
                    <a
                        href="/#projects"
                        className="project-link home-server-back"
                        aria-label="Back to projects"
                    >
                        <span
                            aria-hidden="true"
                            className="project-arrow"
                        >
                            ←
                        </span>

                        <span>Back to projects</span>
                    </a>

                    <span className="section-number">
                        05
                    </span>

                    <div className="home-content">
                        <div className="home-heading">
                            <Reveal>
                                <p className="eyebrow">
                                    INFRASTRUCTURE / DEVOPS
                                </p>
                            </Reveal>

                            <Reveal delay={90}>
                                <h1>
                                    <span>Self-Hosted</span>
                                    <span>Home Server</span>
                                </h1>
                            </Reveal>
                        </div>

                        <div className="home-bottom">
                            <Reveal delay={170}>
                                <p className="home-description">
                                    Production-oriented bare-metal Linux
                                    infrastructure built from repurposed
                                    hardware for hosting applications,
                                    APIs, databases, private storage,
                                    automated deployments, encrypted
                                    backups, monitoring, and AI-assisted
                                    server operations.
                                </p>
                            </Reveal>

                            <Reveal delay={230}>
                                <div className="home-focus">
                                    <span className="home-meta-label">
                                        Platform
                                    </span>

                                    <p>
                                        Linux Mint
                                        <br />
                                        Bare Metal
                                        <br />
                                        Repurposed Hardware
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={290}>
                                <div className="home-location">
                                    <span className="home-meta-label">
                                        Built for
                                    </span>

                                    <p>
                                        Self Hosting
                                        <br />
                                        DevOps
                                        <br />
                                        Infrastructure
                                    </p>
                                </div>
                            </Reveal>

                            <a
                                href="#overview"
                                className="home-scroll"
                                aria-label="Scroll to overview"
                            >
                                <span>Explore</span>

                                <span className="home-scroll-arrow">
                                    ↓
                                </span>
                            </a>
                        </div>
                    </div>
                </section>

                <section
                    id="overview"
                    className="section standard-section"
                >
                    <span className="section-number">
                        01
                    </span>

                    <div className="section-content">
                        <Reveal>
                            <h2>
                                Overview
                            </h2>
                        </Reveal>

                        <div className="section-text">
                            <Reveal delay={100}>
                                <p>
                                    The project started by repurposing an
                                    older laptop into a dedicated Linux
                                    server instead of leaving the hardware
                                    unused.
                                </p>
                            </Reveal>

                            <Reveal delay={170}>
                                <p>
                                    It evolved into a private infrastructure
                                    environment capable of running web
                                    applications, backend APIs, PostgreSQL,
                                    network storage, automated deployments,
                                    monitoring, and off-site backups.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </section>

                <section className="section standard-section">
                    <span className="section-number">
                        02
                    </span>

                    <div className="projects-wrapper">
                        <div className="projects-header">
                            <Reveal>
                                <h2>
                                    Architecture
                                </h2>
                            </Reveal>

                            <Reveal delay={120}>
                                <p>
                                    Public applications, private
                                    administration, storage, databases,
                                    backups, and monitoring are separated
                                    into clearly defined responsibilities.
                                </p>
                            </Reveal>
                        </div>

                        <Reveal delay={160}>
                            <div
                                className="architecture-map"
                                aria-label="Home server system architecture"
                            >
                                <div className="architecture-lane">
                                    <div className="architecture-lane-label">
                                        <span>01</span>
                                        <strong>Public</strong>
                                    </div>

                                    <div className="architecture-flow">
                                        <div className="architecture-node">
                                            <span>Entry</span>
                                            <strong>Internet</strong>
                                        </div>

                                        <span
                                            className="architecture-arrow"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>

                                        <div className="architecture-node">
                                            <span>Edge</span>
                                            <strong>Cloudflare Tunnel</strong>
                                        </div>

                                        <span
                                            className="architecture-arrow"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>

                                        <div className="architecture-node">
                                            <span>Gateway</span>
                                            <strong>Nginx</strong>
                                        </div>

                                        <span
                                            className="architecture-arrow"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>

                                        <div className="architecture-node architecture-node-wide">
                                            <span>Workloads</span>
                                            <strong>
                                                Portfolio / FastAPI / Node.js
                                            </strong>
                                        </div>
                                    </div>
                                </div>

                                <div className="architecture-lane">
                                    <div className="architecture-lane-label">
                                        <span>02</span>
                                        <strong>Private</strong>
                                    </div>

                                    <div className="architecture-flow">
                                        <div className="architecture-node">
                                            <span>Operator</span>
                                            <strong>Admin Device</strong>
                                        </div>

                                        <span
                                            className="architecture-arrow"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>

                                        <div className="architecture-node">
                                            <span>Private Network</span>
                                            <strong>Tailscale</strong>
                                        </div>

                                        <span
                                            className="architecture-arrow"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>

                                        <div className="architecture-node architecture-node-wide">
                                            <span>Administration</span>
                                            <strong>
                                                SSH / Cockpit / Dashboard / Samba
                                            </strong>
                                        </div>
                                    </div>
                                </div>

                                <div className="architecture-lane">
                                    <div className="architecture-lane-label">
                                        <span>03</span>
                                        <strong>Data</strong>
                                    </div>

                                    <div className="architecture-flow">
                                        <div className="architecture-node">
                                            <span>Applications</span>
                                            <strong>Services</strong>
                                        </div>

                                        <span
                                            className="architecture-arrow"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>

                                        <div className="architecture-node">
                                            <span>Database</span>
                                            <strong>PostgreSQL</strong>
                                        </div>

                                        <span
                                            className="architecture-divider"
                                            aria-hidden="true"
                                        />

                                        <div className="architecture-node">
                                            <span>File Storage</span>
                                            <strong>Samba NAS</strong>
                                        </div>

                                        <span
                                            className="architecture-arrow"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>

                                        <div className="architecture-node">
                                            <span>Disk</span>
                                            <strong>Internal HDD</strong>
                                        </div>
                                    </div>
                                </div>

                                <div className="architecture-lane">
                                    <div className="architecture-lane-label">
                                        <span>04</span>
                                        <strong>Operations</strong>
                                    </div>

                                    <div className="architecture-flow">
                                        <div className="architecture-node">
                                            <span>Monitoring</span>
                                            <strong>Health Scripts</strong>
                                        </div>

                                        <span
                                            className="architecture-arrow"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>

                                        <div className="architecture-node">
                                            <span>Alerts</span>
                                            <strong>Telegram</strong>
                                        </div>

                                        <span
                                            className="architecture-divider"
                                            aria-hidden="true"
                                        />

                                        <div className="architecture-node">
                                            <span>Backups</span>
                                            <strong>rclone + age</strong>
                                        </div>

                                        <span
                                            className="architecture-arrow"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>

                                        <div className="architecture-node">
                                            <span>Off-Site</span>
                                            <strong>Google Drive</strong>
                                        </div>

                                        <span
                                            className="architecture-divider"
                                            aria-hidden="true"
                                        />

                                        <div className="architecture-node architecture-node-wide">
                                            <span>AI Operations</span>
                                            <strong>
                                                Hermes / Restricted Actions
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <div className="projects-list">
                            <Reveal>
                                <article className="project-item">
                                    <div className="project-top">
                                        <span className="project-number">
                                            01
                                        </span>

                                        <span className="project-type">
                                            Public Access
                                        </span>

                                        <span className="project-year">
                                            Web
                                        </span>
                                    </div>

                                    <div className="project-main">
                                        <h3>
                                            Cloudflare Tunnel
                                        </h3>

                                        <div className="project-info">
                                            <p>
                                                Public traffic reaches
                                                hosted applications through
                                                Cloudflare Tunnel without
                                                exposing router ports or a
                                                public SSH endpoint.
                                            </p>

                                            <div className="project-tech">
                                                <span>Cloudflare</span>
                                                <span>Nginx</span>
                                                <span>HTTPS</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>

                            <Reveal>
                                <article className="project-item">
                                    <div className="project-top">
                                        <span className="project-number">
                                            02
                                        </span>

                                        <span className="project-type">
                                            Private Access
                                        </span>

                                        <span className="project-year">
                                            Network
                                        </span>
                                    </div>

                                    <div className="project-main">
                                        <h3>
                                            Tailscale
                                        </h3>

                                        <div className="project-info">
                                            <p>
                                                Administration services such
                                                as SSH, Cockpit, and the
                                                internal server dashboard
                                                remain accessible through a
                                                private Tailscale network.
                                            </p>

                                            <div className="project-tech">
                                                <span>Tailscale</span>
                                                <span>OpenSSH</span>
                                                <span>UFW</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>

                            <Reveal>
                                <article className="project-item">
                                    <div className="project-top">
                                        <span className="project-number">
                                            03
                                        </span>

                                        <span className="project-type">
                                            Application Layer
                                        </span>

                                        <span className="project-year">
                                            Runtime
                                        </span>
                                    </div>

                                    <div className="project-main">
                                        <h3>
                                            Nginx & systemd
                                        </h3>

                                        <div className="project-info">
                                            <p>
                                                Nginx routes requests to
                                                independently managed
                                                FastAPI, Node.js, and static
                                                frontend workloads while
                                                systemd handles lifecycle
                                                and restart behavior.
                                            </p>

                                            <div className="project-tech">
                                                <span>Nginx</span>
                                                <span>systemd</span>
                                                <span>FastAPI</span>
                                                <span>Node.js</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>

                            <Reveal>
                                <article className="project-item">
                                    <div className="project-top">
                                        <span className="project-number">
                                            04
                                        </span>

                                        <span className="project-type">
                                            Persistence
                                        </span>

                                        <span className="project-year">
                                            Data
                                        </span>
                                    </div>

                                    <div className="project-main">
                                        <h3>
                                            PostgreSQL & NAS
                                        </h3>

                                        <div className="project-info">
                                            <p>
                                                PostgreSQL provides
                                                application persistence while
                                                the secondary internal drive
                                                is used as Samba-backed
                                                network storage.
                                            </p>

                                            <div className="project-tech">
                                                <span>PostgreSQL</span>
                                                <span>Samba</span>
                                                <span>HDD Storage</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        </div>
                    </div>
                </section>

                <section
                    id="live-infrastructure"
                    className="section standard-section"
                >
                    <span className="section-number">
                        03
                    </span>

                    <div className="projects-wrapper">
                        <div className="projects-header">
                            <Reveal>
                                <h2>
                                    Live Infrastructure
                                </h2>
                            </Reveal>

                            <Reveal delay={120}>
                                <p>
                                    A private dashboard provides a quick
                                    operational view of the physical server,
                                    including uptime, temperature, memory,
                                    load, storage usage, and disk health.
                                </p>
                            </Reveal>
                        </div>

                        <Reveal delay={160}>
                            <figure className="case-study-visual">
                                <div className="case-study-visual-frame">
                                    <img
                                        src={dashboardScreenshot}
                                        alt="Miruzen Home Server dashboard showing operational status, CPU temperature, memory usage, system load, storage usage, and SMART disk health"
                                    />
                                </div>

                                <figcaption className="case-study-visual-caption">
                                    <span>
                                        Private monitoring dashboard
                                    </span>

                                    <p>
                                        Live system health overview generated
                                        from the home server monitoring stack.
                                    </p>
                                </figcaption>
                            </figure>
                        </Reveal>
                    </div>
                </section>

                <section className="section standard-section">
                    <span className="section-number">
                        04
                    </span>

                    <div className="section-content">
                        <Reveal>
                            <h2>
                                Operations
                            </h2>
                        </Reveal>

                        <div className="section-text">
                            <Reveal delay={100}>
                                <p>
                                    Application deployments are automated
                                    from GitHub updates through deployment
                                    scripts that pull changes, install
                                    dependencies, create production builds,
                                    validate Nginx, and perform local health
                                    checks.
                                </p>
                            </Reveal>

                            <Reveal delay={170}>
                                <p>
                                    systemd timers handle recurring server
                                    tasks including backups, health checks,
                                    SMART verification, maintenance, and
                                    monitoring.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </section>

                <section className="section standard-section">
                    <span className="section-number">
                        05
                    </span>

                    <div className="projects-wrapper">
                        <div className="projects-header">
                            <Reveal>
                                <h2>
                                    Reliability
                                </h2>
                            </Reveal>

                            <Reveal delay={120}>
                                <p>
                                    Monitoring and recovery were treated as
                                    part of the infrastructure rather than
                                    something added after deployment.
                                </p>
                            </Reveal>
                        </div>

                        <div className="projects-list">
                            <Reveal>
                                <article className="project-item">
                                    <div className="project-top">
                                        <span className="project-number">
                                            01
                                        </span>

                                        <span className="project-type">
                                            Monitoring
                                        </span>

                                        <span className="project-year">
                                            Health
                                        </span>
                                    </div>

                                    <div className="project-main">
                                        <h3>
                                            Server Health
                                        </h3>

                                        <div className="project-info">
                                            <p>
                                                Custom monitoring tracks
                                                memory, storage, temperature,
                                                network state, service
                                                availability, backup status,
                                                and SMART disk health.
                                            </p>

                                            <div className="project-tech">
                                                <span>smartmontools</span>
                                                <span>lm-sensors</span>
                                                <span>Telegram</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>

                            <Reveal>
                                <article className="project-item">
                                    <div className="project-top">
                                        <span className="project-number">
                                            02
                                        </span>

                                        <span className="project-type">
                                            Backup
                                        </span>

                                        <span className="project-year">
                                            Recovery
                                        </span>
                                    </div>

                                    <div className="project-main">
                                        <h3>
                                            Off-Site Backups
                                        </h3>

                                        <div className="project-info">
                                            <p>
                                                PostgreSQL dumps,
                                                configuration snapshots, and
                                                encrypted credentials are
                                                retained locally and copied
                                                off-site with automated
                                                integrity verification.
                                            </p>

                                            <div className="project-tech">
                                                <span>rclone</span>
                                                <span>Google Drive</span>
                                                <span>age</span>
                                                <span>pg_restore</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        </div>
                    </div>
                </section>

                <section className="section standard-section">
                    <span className="section-number">
                        06
                    </span>

                    <div className="section-content">
                        <Reveal>
                            <h2>
                                AI Operations
                            </h2>
                        </Reveal>

                        <div className="section-text">
                            <Reveal delay={100}>
                                <p>
                                    Hermes Agent runs locally on the server
                                    and is accessible through a restricted
                                    Telegram integration for operational
                                    assistance.
                                </p>
                            </Reveal>

                            <Reveal delay={170}>
                                <p>
                                    Instead of unrestricted shell access,
                                    the agent uses read-only monitoring tools
                                    and explicitly whitelisted administrative
                                    actions for operations such as health
                                    checks, selected service restarts, and
                                    portfolio deployment.
                                </p>
                            </Reveal>
                        </div>
                    </div>

                    <div className="projects-wrapper">
                        <Reveal delay={220}>
                            <figure className="case-study-agent-visual">
                                <figcaption className="case-study-agent-copy">
                                    <span className="case-study-agent-label">
                                        TELEGRAM / HERMES AGENT
                                    </span>

                                    <h3>
                                        Operational context without
                                        unrestricted shell access.
                                    </h3>

                                    <p>
                                        The agent can answer natural-language
                                        questions about CPU load, memory,
                                        temperature, storage, services,
                                        SMART health, and backup status using
                                        a restricted monitoring layer.
                                    </p>

                                    <div className="project-tech">
                                        <span>Telegram</span>
                                        <span>Hermes Agent</span>
                                        <span>Read-only tools</span>
                                        <span>Whitelisted actions</span>
                                    </div>
                                </figcaption>

                                <div className="case-study-agent-frame">
                                    <img
                                        src={hermesTelegramScreenshot}
                                        alt="Telegram conversation with Hermes Agent showing a natural-language home server health request and a structured response with CPU, memory, temperature, fan speed, and storage information"
                                    />
                                </div>
                            </figure>
                        </Reveal>
                    </div>
                </section>

                <section
                    className="case-study-exit"
                    aria-label="Return to projects"
                >
                    <div className="case-study-exit-inner">
                        <Reveal>
                            <span className="case-study-exit-label">
                                END OF CASE STUDY
                            </span>
                        </Reveal>

                        <Reveal delay={90}>
                            <a
                                href="/#projects"
                                className="case-study-exit-link"
                                aria-label="Back to projects"
                            >
                                <span>Back to Projects</span>

                                <span
                                    className="case-study-exit-arrow"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </a>
                        </Reveal>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default HomeServerCaseStudy;
