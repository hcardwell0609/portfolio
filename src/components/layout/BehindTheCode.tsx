const highlights = [
    {
        title: "Modern Stack",
        description: "Built with Next.js, TypeScript, PostgreSQL, and modern development tools.",
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="m12 3 8 4-8 4-8-4 8-4Z" />
                <path d="m4 12 8 4 8-4" />
                <path d="m4 17 8 4 8-4" />
            </svg>
        )
    },
    {
        title: "Clean Architecture",
        description: "Organized components, reusable patterns, and maintainable structure.",
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
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
        title: "Production Mindset",
        description: "Focused on scalability, reliability, and long-term maintainability.",
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="M4.5 16.5c-1.5 1.25-2 4-2 4s2.75-.5 4-2c.7-.85.7-2.15-.1-2.95-.8-.8-2.1-.8-2.9-.05Z" />
                <path d="m12 15-3-3c.8-2.1 2.05-4 3.7-5.65C15.25 3.8 18.55 2.15 22 2c-.15 3.45-1.8 6.75-4.35 9.3A15.3 15.3 0 0 1 12 15Z" />
                <circle cx="16" cy="8" r="1.5" />
            </svg>
        )
    },
    {
        title: "Continuous Growth",
        description: "Always learning new technologies and improving my engineering skills.",
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="M3 17h18" />
                <path d="m7 13 4-4 3 3 5-6" />
                <path d="M18 6h1v1" />
            </svg>
        )
    }
]

const fileTree = [
    { name: "src", icon: "folder", depth: 0 },
    { name: "app", icon: "folder", depth: 1 },
    { name: "layout.tsx", icon: "file", depth: 2 },
    { name: "page.tsx", icon: "file", depth: 2 },
    { name: "globals.css", icon: "css", depth: 2 },
    { name: "components", icon: "folder", depth: 1 },
    { name: "layout", icon: "folder", depth: 2 },
    { name: "Navbar.tsx", icon: "ts", depth: 3 },
    { name: "Header.tsx", icon: "ts", depth: 3 },
    { name: "AboutMe.tsx", icon: "ts", depth: 3 },
    { name: "Experience.tsx", icon: "ts", depth: 3 },
    { name: "BehindTheCode.tsx", icon: "ts", depth: 3 },
    { name: "data", icon: "folder", depth: 1 },
    { name: "projects.ts", icon: "ts", depth: 2 },
    { name: "lib", icon: "folder", depth: 1 },
    { name: "utils.ts", icon: "ts", depth: 2 },
    { name: "types", icon: "folder", depth: 1 },
    { name: "project.ts", icon: "ts", depth: 2 },
    { name: "public", icon: "folder", depth: 0 },
    { name: "images", icon: "folder", depth: 1 },
    { name: "profile_picture.jpg", icon: "image", depth: 2 },
    { name: "FacilityNerd Logo.png", icon: "image", depth: 2 },
    { name: "package.json", icon: "node", depth: 0 },
    { name: "next.config.ts", icon: "ts", depth: 0 },
    { name: "tsconfig.json", icon: "file", depth: 0 }
]

function FileIcon({ type }: { type: string }) {
    if (type === "folder") {
        return (
            <svg
                aria-hidden="true"
                className="h-5 w-5 fill-orange-400"
                viewBox="0 0 24 24"
            >
                <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h5l2 2h6A2.5 2.5 0 0 1 21 8.5v10A2.5 2.5 0 0 1 18.5 21h-13A2.5 2.5 0 0 1 3 18.5v-12Z" />
            </svg>
        )
    }

    return (
        <span className="grid h-5 w-8 place-items-center text-xs font-bold text-orange-400">
            {type === "ts" ? "TS" : type === "css" ? "CSS" : type === "node" ? "N" : type === "image" ? "IMG" : "F"}
        </span>
    )
}

export default function BehindTheCode() {
    return (
        <section
            id="code"
            className="relative isolate overflow-hidden bg-[#080d10] px-6 py-24 text-white sm:px-10 lg:px-12"
        >
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-white/10" />

            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 xl:grid-cols-[0.88fr_1.55fr]">
                    <div>
                        <div className="inline-flex items-center gap-3 rounded-[8px] border border-orange-400/50 bg-white/[0.03] px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-orange-400">
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5"
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
                            Behind The Code
                        </div>

                        <h2 className="mt-8 text-5xl font-semibold leading-tight tracking-normal text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.12)] sm:text-6xl">
                            See how I build software.
                            <span className="block text-orange-400">Explore my code.</span>
                        </h2>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                            This portfolio is built as a real full-stack application,
                            showcasing the same principles I use in production projects:
                            clean architecture, reusable components, type safety, and
                            maintainable code.
                        </p>

                        <a
                            href="https://github.com/hcardwell0609/portfolio"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 inline-flex min-h-14 items-center gap-5 rounded-[8px] border border-orange-300/50 bg-orange-500 px-8 text-lg font-semibold text-white shadow-[0_0_34px_rgba(249,115,22,0.35)] transition duration-300 hover:bg-orange-400"
                        >
                            <svg
                                aria-hidden="true"
                                className="h-7 w-7"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.5-4.1-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.7 2.6 3.5 1.9.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                            </svg>
                            <span>Explore Repository</span>
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M15 3h6v6" />
                                <path d="M10 14 21 3" />
                                <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                            </svg>
                        </a>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {highlights.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_22px_60px_rgba(0,0,0,0.18)]"
                                >
                                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-orange-400/10 text-orange-400">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-base leading-7 text-white/70">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[8px] border border-white/15 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_28px_80px_rgba(0,0,0,0.32)] sm:p-8">
                        <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-4">
                                <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-[#080d10]">
                                    <svg
                                        aria-hidden="true"
                                        className="h-9 w-9"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.5-4.1-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.7 2.6 3.5 1.9.1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                                    </svg>
                                </div>
                                <p className="text-xl font-semibold text-white sm:text-2xl">
                                    hcardwell0609 / <span className="text-orange-400">portfolio</span>
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <div className="grid grid-cols-[1fr_auto] overflow-hidden rounded-[8px] border border-white/10 text-white">
                                    <div className="flex items-center gap-2 px-4 py-3 font-semibold">
                                        <svg
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="m12 2 3 6 6.5.9-4.7 4.6 1.1 6.5-5.9-3.1L6.1 20l1.1-6.5L2.5 8.9 9 8l3-6Z" />
                                        </svg>
                                        <span>Star</span>
                                    </div>
                                    <div className="border-l border-white/10 px-5 py-3 font-bold">
                                        0
                                    </div>
                                </div>
                                <div className="grid grid-cols-[1fr_auto] overflow-hidden rounded-[8px] border border-white/10 text-white">
                                    <div className="flex items-center gap-2 px-4 py-3 font-semibold">
                                        <svg
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="6" cy="5" r="2" />
                                            <circle cx="18" cy="5" r="2" />
                                            <circle cx="12" cy="19" r="2" />
                                            <path d="M6 7v3a6 6 0 0 0 6 6v1" />
                                            <path d="M18 7v3a6 6 0 0 1-6 6" />
                                        </svg>
                                        <span>Fork</span>
                                    </div>
                                    <div className="border-l border-white/10 px-5 py-3 font-bold">
                                        0
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.6fr]">
                            <div className="rounded-[8px] border border-white/10 bg-black/10 p-5">
                                <div className="space-y-3 text-base text-white/90">
                                    {fileTree.map((file) => (
                                        <div
                                            key={file.name + file.depth}
                                            className="flex items-center gap-3"
                                            style={{ paddingLeft: `${file.depth * 18}px` }}
                                        >
                                            {file.depth > 0 && (
                                                <span className="text-white/35">|-</span>
                                            )}
                                            <FileIcon type={file.icon} />
                                            {file.name}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-[8px] border border-white/10 bg-black/20">
                                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">
                                    <div className="flex items-center gap-4">
                                        <span className="rounded-[8px] bg-sky-400/10 px-3 py-2 font-semibold text-sky-400">
                                            TS
                                        </span>
                                        <span className="text-white/80">page.tsx</span>
                                    </div>
                                    <span className="text-white/50">[]</span>
                                </div>

                                <div className="overflow-x-auto p-5 font-mono text-sm leading-8 text-white/[0.82] sm:text-base">
                                    <pre>
                                        <code>{`1   import Navbar from '@/components/layout/Navbar'
2   import Header from '@/components/layout/Header'
3   import AboutMe from '@/components/layout/AboutMe'
4   import Experience from '@/components/layout/Experience'
5   import BehindTheCode from '@/components/layout/BehindTheCode'
6
7   export default function Home() {
8       return (
9           <>
10              <Navbar />
11              <Header />
12              <AboutMe />
13              <Experience />
14              <BehindTheCode />
15          </>
16
17      )
18  }`}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
