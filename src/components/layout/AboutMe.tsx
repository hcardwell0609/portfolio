import Image from "next/image";

const focusItems = [
    {
        title: "Full Stack Development",
        description: "Building end-to-end applications with modern technologies.",
        icon: (
            <svg
                aria-hidden="true"
                className="h-7 w-7"
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
        title: "Reliable Systems",
        description: "Creating secure, scalable, and maintainable backend solutions.",
        icon: (
            <svg
                aria-hidden="true"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <ellipse cx="12" cy="5" rx="8" ry="3" />
                <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
            </svg>
        )
    },
    {
        title: "Real World Impact",
        description: "Building software used by real users that solves real problems.",
        icon: (
            <svg
                aria-hidden="true"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="M4.5 16.5c-1.5 1.25-2 4-2 4s2.75-.5 4-2c.7-.85.7-2.15-.1-2.95-.8-.8-2.1-.8-2.9-.05Z" />
                <path d="m12 15-3-3c.8-2.1 2.05-4 3.7-5.65C15.25 3.8 18.55 2.15 22 2c-.15 3.45-1.8 6.75-4.35 9.3A15.3 15.3 0 0 1 12 15Z" />
                <path d="M9 12H4s.55-2.95 2-4c1.6-1.15 5 0 5 0" />
                <path d="M12 15v5s2.95-.55 4-2c1.15-1.6 0-5 0-5" />
                <circle cx="16" cy="8" r="1.5" />
            </svg>
        )
    },
    {
        title: "Always Improving",
        description: "Continuously learning and refining my skills to build better products.",
        icon: (
            <svg
                aria-hidden="true"
                className="h-7 w-7"
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

export default function AboutMe() {
    return (
        <section
            id="about"
            className="relative isolate overflow-hidden bg-[#080d10] px-6 py-24 text-white sm:px-10 lg:px-12"
        >
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-white/10" />

            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.86fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.12em] text-orange-400 sm:text-base">
                            About Me
                        </p>

                        <h2 className="mt-8 max-w-2xl text-4xl font-semibold leading-tight tracking-normal text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.14)] sm:text-6xl">
                            I build software that creates{" "}
                            <span className="text-orange-400">real impact.</span>
                        </h2>

                        <div className="my-8 h-px w-44 bg-gradient-to-r from-orange-400 via-orange-400/70 to-transparent shadow-[0_0_16px_rgba(251,146,60,0.8)]" />

                        <div className="max-w-2xl space-y-6 text-lg leading-8 text-white/70 sm:text-xl">
                            <p>
                                I&apos;m a full-stack developer who enjoys building scalable,
                                reliable applications that help businesses automate and
                                improve their workflows.
                            </p>

                            <p>
                                From idea to deployment, I focus on writing clean code,
                                solving complex problems, and delivering great user
                                experiences.
                            </p>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-[560px]">
                        <div className="relative aspect-[1.02/1] overflow-hidden rounded-[8px] border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
                            <Image
                                src="/images/profile_picture.jpg"
                                alt="Hunter Cardwell"
                                fill
                                sizes="(min-width: 1024px) 560px, calc(100vw - 48px)"
                                className="origin-left-top scale-110 object-cover object-left-top"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,transparent_58%,rgba(0,0,0,0.38)_100%)]" />
                        </div>

                        <div className="absolute bottom-7 left-6 right-6 rounded-[8px] border border-white/10 bg-black/45 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-md sm:left-8 sm:right-8">
                            <div className="flex items-center gap-4">
                                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white/10 text-orange-400">
                                    <svg
                                        aria-hidden="true"
                                        className="h-7 w-7"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 10c0 4.9-8 12-8 12S4 14.9 4 10a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-base font-semibold text-white sm:text-lg">
                                        Based in Taneyville, USA
                                    </p>
                                    <p className="mt-1 text-sm text-white/70 sm:text-base">
                                        Available for new opportunities
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex items-center gap-8">
                    <div className="h-px flex-1 bg-white/[0.12]" />
                    <p className="shrink-0 text-sm font-bold uppercase tracking-[0.12em] text-orange-400 sm:text-base">
                        What I Focus On
                    </p>
                    <div className="h-px flex-1 bg-white/[0.12]" />
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {focusItems.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-[8px] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_22px_60px_rgba(0,0,0,0.18)] backdrop-blur-md"
                        >
                            <div className="flex items-start gap-5">
                                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/10 bg-white/10 text-orange-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold leading-snug text-white">
                                        {item.title}
                                    </h3>
                                    <p className="mt-5 text-base leading-7 text-white/[0.68]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
