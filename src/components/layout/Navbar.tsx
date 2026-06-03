"use client";

import { useEffect, useState } from "react";

const navItems = [
    {
        name: "Home",
        path: "#home"
    },
    {
        name: "About",
        path: "#about"
    },
    {
        name: "Experience",
        path: "#experience"
    },
    {
        name: "Code",
        path: "#code"
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
        <nav className="w-full fixed z-[10000]">
            <div className="mx-auto w-fit bg-white/5 py-[10px] px-[30px] mt-[10px] flex gap-[40px] rounded-full backdrop-blur-md border border-white/20 shadow-lg">
                
                {navItems.map((item) => {

                    const active = activeSection === item.path.replace("#", "");

                    return (

                    <button className="group hover:cursor-pointer h-fit" 
                        key={item.path}
                        onClick={() => scrollToSection(item.path)}
                    >
                        <div className="h-[10px] w-[10px]"></div>
                        {item.name}
                        <div className={`
                        h-[10px] 
                        w-[10px] 
                        rounded-full 
                        justify-self-center 
                        transition duration-400 
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
