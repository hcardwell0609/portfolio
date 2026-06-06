import Image from "next/image";

type Project = {
    name: string;
    type: string;
    description: string;
    highlights: string[];
    stack: string[];
    problem?: string;
    solution?: string;
    featured?: boolean;
    logo?: boolean;
    github?: string;
}

const projects: Project[] = [
    {
        name: "Facility Nerds",
        type: "SaaS Access Control Platform",
        description: "A production SaaS platform that automates facility access by connecting reservation systems, customers, permissions, and smart lock hardware.",
        problem: "Sports facilities needed a way to automatically control facility access without manually creating door codes or managing customer entry.",
        solution: "Built a full-stack platform that integrates scheduling software, smart lock APIs, background processing, and permission systems to automate access management.",
        highlights: [
            "Designed and built the complete application architecture from the ground up",
            "Developed REST APIs connecting frontend, database, and third-party services",
            "Created PostgreSQL database structures supporting companies, facilities, locks, users, and permissions",
            "Built role-based access control with resource-level permissions",
            "Implemented background job processing for automated lock code creation and synchronization",
            "Integrated external hardware APIs and scheduling platforms",
            "Improved API performance through query optimization and caching strategies",
            "Deployed and maintained production systems using Docker and cloud infrastructure"
        ],
        stack: ["TypeScript", "JavaScript", "Node.js", "Express", "PostgreSQL", "Redis", "Docker", "REST APIs"],
        featured: true,
        logo: true
    },
    {
        name: "Boerman Management Platform",
        type: "Business Operations & Job Management System",
        description: "A custom business management platform built to centralize customers, jobs, locations, expenses, and invoicing.",
        problem: "The company needed a better way to organize job information, track dump expenses, calculate profitability, and manage customer billing.",
        solution: "Built a full-stack internal application that tracks the complete lifecycle of jobs from customer creation through completion and invoicing.",
        highlights: [
            "Created customer and job management workflows",
            "Designed relational database structures connecting customers, jobs, locations, and expenses",
            "Built systems to track dump usage, costs, and job profitability",
            "Automated invoice generation when jobs are completed",
            "Created dashboards to make business information easier to access",
            "Replaced manual tracking processes with centralized software"
        ],
        stack: ["JavaScript", "Node.js", "PostgreSQL", "REST APIs", "HTML/CSS"]
    },
    {
        name: "Healthcare Management Platform",
        type: "Scheduling, Payments & Customer Tracking System",
        description: "A custom healthcare business application designed to automate memberships, payments, and customer visit tracking.",
        problem: "The business needed a way to manage customers, track remaining visits, and handle recurring payments more efficiently.",
        solution: "Developed software to automate customer management, payment tracking, and usage monitoring.",
        highlights: [
            "Built customer account management systems",
            "Implemented visit tracking logic",
            "Created automated payment workflows",
            "Designed database relationships for customers, memberships, and usage history",
            "Created business dashboards for daily operations"
        ],
        stack: ["JavaScript", "PostgreSQL", "Payment Integrations", "REST APIs"]
    },
    {
        name: "Inventory Management Systems",
        type: "Business Automation Software",
        description: "Custom inventory applications built for service-based businesses including construction and trade industries.",
        problem: "Businesses were relying on manual inventory tracking methods that were difficult to maintain and scale.",
        solution: "Built custom systems to organize inventory, track usage, and improve visibility into business resources.",
        highlights: [
            "Created inventory tracking workflows",
            "Designed searchable databases",
            "Built user-friendly dashboards",
            "Developed custom business logic based on company needs",
            "Improved manual processes through automation"
        ],
        stack: ["JavaScript", "PostgreSQL", "REST APIs"]
    },
    {
        name: "Developer Portfolio Platform",
        type: "Full Stack Engineering Showcase",
        description: "A portfolio application built to demonstrate modern software development practices, architecture, testing, and deployment.",
        highlights: [
            "Built using Next.js and TypeScript",
            "Created reusable component architecture",
            "Implemented automated testing with Vitest and React Testing Library",
            "Containerized application using Docker",
            "Deployed using production workflows",
            "Managed development using Git branching strategies"
        ],
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vitest", "Docker"],
        github: "https://github.com/hcardwell0609/portfolio"
    }
]

function ProjectIcon() {
    return (
        <svg
            aria-hidden="true"
            className="h-12 w-12"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <path d="m8 8-4 4 4 4" />
            <path d="m16 8 4 4-4 4" />
            <path d="m14 4-4 16" />
        </svg>
    )
}

function ProjectStack({ stack }: { stack: string[] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {stack.map((tool) => (
                <span
                    key={tool}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                >
                    {tool}
                </span>
            ))}
        </div>
    )
}

export default function Projects() {

    const featuredProject = projects.find((project) => project.featured);
    const otherProjects = projects.filter((project) => !project.featured);

    return (
        <section
            id="projects"
            className="relative isolate overflow-hidden bg-[#080d10] px-6 py-24 text-white sm:px-10 lg:px-12"
        >
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-white/10" />

            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.12em] text-orange-400 sm:text-base">
                        Projects
                    </p>
                    <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-normal text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.12)] sm:text-6xl">
                        Featured Projects
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-white/70 sm:text-xl">
                        Real applications I&apos;ve designed, built, deployed, and
                        maintained to solve business problems.
                    </p>
                </div>

                {featuredProject && (
                    <article className="mt-12 overflow-hidden rounded-[8px] border border-orange-400/30 bg-orange-400/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_80px_rgba(0,0,0,0.32)]">
                        <div className="grid gap-8 border-b border-white/10 p-6 lg:grid-cols-[180px_1fr] lg:p-8">
                            <div className="flex items-center gap-5 lg:block">
                                <div className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-[8px] border border-white/10 bg-black/20 text-white/[0.92] lg:h-32 lg:w-32">
                                    {featuredProject.logo ? (
                                        <Image
                                            src="/images/FacilityNerd Logo.png"
                                            alt="Facility Nerds logo"
                                            width={112}
                                            height={112}
                                            className="h-20 w-20 rounded-[8px] object-cover lg:h-28 lg:w-28"
                                        />
                                    ) : (
                                        <ProjectIcon />
                                    )}
                                </div>
                                <p className="text-base font-bold text-orange-400 lg:mt-5">
                                    Primary Case Study
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.12em] text-orange-400">
                                    {featuredProject.type}
                                </p>
                                <h3 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                                    {featuredProject.name}
                                </h3>
                                <p className="mt-6 max-w-4xl text-lg leading-8 text-white/75">
                                    {featuredProject.description}
                                </p>

                                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                                    <div className="rounded-[8px] border border-white/10 bg-black/10 p-5">
                                        <p className="text-sm font-bold uppercase tracking-[0.12em] text-orange-400">
                                            Problem
                                        </p>
                                        <p className="mt-3 text-base leading-7 text-white/70">
                                            {featuredProject.problem}
                                        </p>
                                    </div>
                                    <div className="rounded-[8px] border border-white/10 bg-black/10 p-5">
                                        <p className="text-sm font-bold uppercase tracking-[0.12em] text-orange-400">
                                            Solution
                                        </p>
                                        <p className="mt-3 text-base leading-7 text-white/70">
                                            {featuredProject.solution}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <ProjectStack stack={featuredProject.stack} />
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-8 p-6 lg:grid-cols-[220px_1fr] lg:p-8">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.12em] text-orange-400">
                                    Engineering Highlights
                                </p>
                                <p className="mt-4 text-base leading-7 text-white/60">
                                    Architecture, integrations, permissions, background
                                    processing, deployment, and production reliability.
                                </p>
                            </div>

                            <ul className="grid gap-4 text-base leading-7 text-white/[0.78] md:grid-cols-2">
                                {featuredProject.highlights.map((highlight) => (
                                    <li key={highlight} className="flex gap-4">
                                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                )}

                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    {otherProjects.map((project) => (
                        <article
                            key={project.name}
                            className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_22px_60px_rgba(0,0,0,0.18)]"
                        >
                            <div className="flex items-start gap-5">
                                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-orange-400/10 text-orange-400">
                                    <ProjectIcon />
                                </div>

                                <div>
                                    <p className="text-sm font-bold uppercase tracking-[0.12em] text-orange-400">
                                        {project.type}
                                    </p>
                                    <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">
                                        {project.name}
                                    </h3>
                                    <p className="mt-4 text-base leading-7 text-white/70">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            {(project.problem || project.solution) && (
                                <details className="group mt-6 rounded-[8px] border border-white/10 bg-black/10 p-5">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold uppercase tracking-[0.12em] text-orange-400">
                                        Architecture Notes
                                        <span className="text-xl leading-none transition duration-300 group-open:rotate-45">
                                            +
                                        </span>
                                    </summary>

                                    <div className="mt-5 space-y-5 text-base leading-7 text-white/70">
                                        {project.problem && (
                                            <div>
                                                <p className="font-semibold text-white">Problem</p>
                                                <p className="mt-2">{project.problem}</p>
                                            </div>
                                        )}
                                        {project.solution && (
                                            <div>
                                                <p className="font-semibold text-white">Solution</p>
                                                <p className="mt-2">{project.solution}</p>
                                            </div>
                                        )}
                                    </div>
                                </details>
                            )}

                            <div className="mt-6">
                                <ProjectStack stack={project.stack} />
                            </div>

                            <div className="mt-6">
                                <p className="text-sm font-bold uppercase tracking-[0.12em] text-orange-400">
                                    Engineering Highlights
                                </p>
                                <ul className="mt-4 space-y-3 text-base leading-7 text-white/[0.78]">
                                    {project.highlights.map((highlight) => (
                                        <li key={highlight} className="flex gap-4">
                                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-[8px] border border-orange-400 px-5 text-base font-semibold text-orange-400 transition duration-300 hover:bg-orange-400 hover:text-white"
                                >
                                    View Repository
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
