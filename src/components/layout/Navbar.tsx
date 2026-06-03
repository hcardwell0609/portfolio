import Link from "next/link";

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
        name: "Contact",
        path: "#contact"
    },
]

export default function Navbar() {
    return (
        <nav className="w-full fixed">
            <div className="mx-auto w-fit bg-white/30 py-[10px] px-[30px] mt-[10px] flex gap-[40px] rounded-full backdrop-blur-md border border-white/20 shadow-lg">
                
                {navItems.map((item) => (
                    <div className="group h-fit">
                        <div className="h-[10px] w-[10px]"></div>
                        <Link
                            key={item.path}
                            href={item.path}
                        >
                            {item.name}
                        </Link>
                        <div className="h-[10px] w-[10px] rounded-full justify-self-center transition duration-400 group-hover:bg-orange-500/70"></div>
                    </div>
                ))}

            </div>
        </nav>
    )
}