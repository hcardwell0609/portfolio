"use client";
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

    const scrollToSection = (path: string) => {

        const element = document.querySelector(path);

        element?.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <nav className="w-full fixed z-[10000]">
            <div className="mx-auto w-fit bg-white/5 py-[10px] px-[30px] mt-[10px] flex gap-[40px] rounded-full backdrop-blur-md border border-white/20 shadow-lg">
                
                {navItems.map((item) => (
                    <button className="group hover:cursor-pointer h-fit" 
                        key={item.path}
                        onClick={() => scrollToSection(item.path)}
                    >
                        <div className="h-[10px] w-[10px]"></div>
                        {item.name}
                        <div className="h-[10px] w-[10px] rounded-full justify-self-center transition duration-400 group-hover:bg-orange-500/70"></div>
                    </button>
                ))}

            </div>
        </nav>
    )
}