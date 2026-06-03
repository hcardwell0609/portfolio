import Image from "next/image";

const stats = [
    {
        title: "Production SaaS",
        description: "Built and maintained real-world software",
        icon: (
            <svg
                aria-hidden="true"
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <rect height="14" rx="2" width="20" x="2" y="6" />
                <path d="M2 12h20" />
            </svg>
        )
    },
    {
        title: "Full Stack Ownership",
        description: "Frontend, backend, databases, deployment",
        icon: (
            <svg
                aria-hidden="true"
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="m8 9-4 3 4 3" />
                <path d="m16 9 4 3-4 3" />
                <path d="m14 5-4 14" />
            </svg>
        )
    },
    {
        title: "Real Users",
        description: "Software used by actual businesses",
        icon: (
            <svg
                aria-hidden="true"
                className="h-9 w-9"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        )
    }
]

const jobs = [
    {
        dates: "2023 - Present",
        title: "Founder & Full Stack Developer",
        company: "Facility Nerds",
        logo: "facility-nerds",
        summary: "Built a SaaS access control platform that automates facility operations, reservations, and smart lock management for real customers.",
        tools: ["JavaScript", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Docker", "REST APIs"],
        details: [
            "Designed and developed a production SaaS platform from the ground up",
            "Built REST APIs connecting frontend applications, PostgreSQL databases, and third-party services",
            "Created scalable database structures with optimized queries, relationships, and permission systems",
            "Developed role-based access control for companies, facilities, users, and resources",
            "Integrated smart lock hardware APIs and scheduling platforms to automate customer workflows",
            "Built background processing systems to improve reliability and handle asynchronous tasks",
            "Improved performance through database optimization, caching, and backend improvements",
            "Managed deployments using Docker and cloud infrastructure",
            "Debugged and resolved production issues affecting real customers"
        ]
    },
    {
        dates: "2021 - Present",
        title: "Full Stack Developer",
        company: "DreamCo / Client Software",
        logo: "code",
        summary: "Developed custom applications and automation tools to help businesses improve their workflows and operations.",
        tools: ["JavaScript", "Python", "PostgreSQL", "HTML", "CSS", "APIs"],
        details: [
            "Built custom web applications based on business requirements",
            "Developed frontend interfaces and backend systems",
            "Designed database structures for business applications",
            "Created APIs and integrations between software platforms",
            "Automated manual processes to improve efficiency",
            "Worked directly with clients to understand problems and create solutions",
            "Maintained and improved existing applications"
        ]
    }
]

function JobIcon({ name }: { name: string }) {
    if (name === "facility-nerds") {
        return (
            <Image
                src="/images/FacilityNerd Logo.png"
                alt="Facility Nerds logo"
                width={112}
                height={112}
                className="h-20 w-20 rounded-[8px] object-cover lg:h-28 lg:w-28"
            />
        )
    }

    return (
        <svg
            aria-hidden="true"
            className="h-16 w-16"
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

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative isolate overflow-hidden bg-[#080d10] px-6 py-24 text-white sm:px-10 lg:px-12"
        >
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-white/10" />

            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.12em] text-orange-400 sm:text-base">
                        Experience
                    </p>
                    <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-normal text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.12)] sm:text-6xl">
                        Building software that solves real problems.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-white/70 sm:text-xl">
                        From idea to production, I&apos;ve designed, built, and
                        maintained full-stack applications used by real businesses.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-3">
                    {stats.map((stat) => (
                        <div
                            key={stat.title}
                            className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_22px_60px_rgba(0,0,0,0.18)]"
                        >
                            <div className="mb-5 w-fit text-orange-400">
                                {stat.icon}
                            </div>
                            <p className="text-xl font-bold leading-tight text-white">
                                {stat.title}
                            </p>
                            <p className="mt-3 text-base leading-7 text-white/70">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 space-y-8">
                    {jobs.map((job) => (
                        <article
                            key={job.title + job.company}
                            className="overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_22px_60px_rgba(0,0,0,0.18)]"
                        >
                            <div className="grid gap-8 border-b border-white/10 p-6 lg:grid-cols-[180px_1fr] lg:p-8">
                                <div className="flex items-center gap-5 lg:block">
                                    <div className="grid h-24 w-24 shrink-0 place-items-center rounded-[8px] border border-white/10 bg-black/10 text-white/[0.92] lg:h-32 lg:w-32">
                                        <JobIcon name={job.logo} />
                                    </div>

                                    <p className="text-base font-bold text-orange-400 lg:mt-5">
                                        {job.dates}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                                        <div>
                                            <h3 className="text-3xl font-semibold leading-tight text-white">
                                                {job.title}
                                            </h3>
                                            <p className="mt-2 text-xl font-semibold text-orange-400">
                                                {job.company}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="mt-6 max-w-4xl text-lg leading-8 text-white/75">
                                        {job.summary}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {job.tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-8 p-6 lg:grid-cols-[220px_1fr] lg:p-8">
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-[0.12em] text-orange-400">
                                        What I Owned
                                    </p>
                                    <p className="mt-4 text-base leading-7 text-white/60">
                                        Practical work across product, backend systems,
                                        databases, infrastructure, and customer-facing fixes.
                                    </p>
                                </div>

                                <ul className="grid gap-4 text-base leading-7 text-white/[0.78] md:grid-cols-2">
                                    {job.details.map((detail) => (
                                        <li key={detail} className="flex gap-4">
                                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}
