"use client";

import { useEffect, useState } from "react";

const navItems = [
    {
        name: "Home",
        path: "#home",
        icon: (
            <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="m3 11 9-8 9 8" />
                <path d="M5 10v10h14V10" />
                <path d="M9 20v-6h6v6" />
            </svg>
        )
    },
    {
        name: "About",
        path: "#about",
        icon: (
            <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21a8 8 0 0 1 16 0" />
            </svg>
        )
    },
    {
        name: "Experience",
        path: "#experience",
        icon: (
            <svg
                aria-hidden="true"
                className="h-6 w-6"
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
        name: "Code",
        path: "#code",
        icon: (
            <svg
                aria-hidden="true"
                className="h-6 w-6"
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
    },
]

export default function Navbar() {

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {

        const sections = navItems
            .map((item) => document.querySelector(item.path))
            .filter((section) => section !== null);

        const updateActiveSection = () => {

            let currentSection = "home";
            const targetPosition = window.innerHeight * 0.35;

            sections.forEach((section) => {

                const sectionTop = section.getBoundingClientRect().top;

                if (sectionTop <= targetPosition) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        }

        updateActiveSection();

        let frame: number | null = null;

        const handleScroll = () => {

            if (frame) {
                cancelAnimationFrame(frame);
            }

            frame = requestAnimationFrame(updateActiveSection);
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            if (frame) {
                cancelAnimationFrame(frame);
            }

            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };

    }, []);

    const scrollToSection = (path: string) => {

        const element = document.querySelector(path);

        setActiveSection(path.replace("#", ""));

        element?.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <nav className="fixed z-[10000] w-full px-4">
            <div className="mx-auto mt-[10px] flex w-fit max-w-full gap-5 rounded-full border border-white/20 bg-white/5 px-5 py-[10px] shadow-lg backdrop-blur-md sm:gap-[40px] sm:px-[30px]">
                
                {navItems.map((item) => {

                    const active = activeSection === item.path.replace("#", "");

                    return (

                    <button
                        className={`
                        group 
                        flex 
                        h-fit 
                        min-w-10 
                        flex-col 
                        items-center 
                        text-sm 
                        font-medium 
                        transition 
                        duration-300 
                        hover:cursor-pointer 
                        hover:text-orange-400
                        sm:min-w-0
                        sm:text-base
                        ${
                            active
                             ? "text-orange-400"
                             : "text-white"
                        }
                        `}
                        key={item.path}
                        onClick={() => scrollToSection(item.path)}
                        aria-label={item.name}
                    >
                        <div className="grid h-8 place-items-center sm:hidden">
                            {item.icon}
                        </div>
                        <span className="hidden sm:block">
                            {item.name}
                        </span>
                        <div data-testid={`dot-${item.path}`} 
                        className={`
                        h-[10px] 
                        w-[10px] 
                        rounded-full 
                        transition 
                        duration-300 
                        group-hover:bg-orange-500/70
                        ${
                            active
                             ? "bg-orange-500"
                             : "bg-orange-500/0"
                        }
                        `}></div>
                    </button>

                    )
                })}

            </div>
        </nav>
    )
}
