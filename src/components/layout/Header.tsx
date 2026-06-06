"use client";

export default function Header() {

    const scrollToExperience = () => {

        const element = document.querySelector("#experience");

        element?.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <header
            id="home"
            className="relative isolate min-h-screen overflow-hidden bg-[#0b1115] px-6 pt-32 text-white sm:px-10 lg:px-12"
        >
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_43%,rgba(255,255,255,0.16),transparent_22%),linear-gradient(115deg,rgba(251,146,60,0.5)_0%,rgba(251,146,60,0.2)_18%,transparent_39%),linear-gradient(145deg,#141b20_0%,#23282c_45%,#0a0f12_100%)]" />
            <div className="absolute inset-0 -z-10 backdrop-blur-[2px]" />
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,transparent_28%,rgba(0,0,0,0.28)_100%)]" />
            <div className="absolute left-[-8rem] top-[35%] -z-10 h-72 w-[34rem] rotate-[-18deg] bg-orange-300/35 blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 -z-10 h-52 bg-gradient-to-b from-transparent via-[#080d10]/75 to-[#080d10]" />

            <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col items-center justify-center text-center">
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.26em] text-orange-400 sm:text-base">
                    Hi, I&apos;m
                </p>
                <h1 className="max-w-5xl text-5xl font-semibold leading-none tracking-normal text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.22)] sm:text-7xl lg:text-8xl">
                    Hunter Cardwell
                </h1>
                <p className="mt-6 text-xl font-medium tracking-normal text-white/65 sm:text-3xl">
                    Full Stack Engineer &amp; Problem Solver
                </p>

                <div className="my-10 h-px w-28 bg-gradient-to-r from-transparent via-orange-400 to-transparent shadow-[0_0_18px_rgba(251,146,60,0.95)]" />

                <button
                    type="button"
                    onClick={scrollToExperience}
                    className="group inline-flex min-h-14 items-center gap-5 rounded-full border border-white/20 bg-white/5 px-8 text-lg font-semibold text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_42px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:border-orange-300/50 hover:bg-white/10 hover:text-white hover:cursor-pointer sm:min-h-16 sm:px-10 sm:text-xl"
                    aria-label="View my work"
                >
                    <span>View My Work</span>
                    <svg
                        aria-hidden="true"
                        className="h-5 w-5 transition duration-300 group-hover:translate-y-1"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                    </svg>
                </button>
            </section>
        </header>
    )
}
