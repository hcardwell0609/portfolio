import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Navbar from "./Navbar";

const scrollIntoViewMock = vi.fn();
const requestAnimationFrameMock = vi.fn((callback: FrameRequestCallback) => {
    callback(0);
    return 1;
});
const cancelAnimationFrameMock = vi.fn();

function setSectionTop(id: string, top: number) {

    const section = document.getElementById(id);

    if (!section) {
        throw new Error(`Missing section #${id}`);
    }

    Object.defineProperty(section, "getBoundingClientRect", {
        configurable: true,
        value: () =>
            ({
                top,
                bottom: top + 100,
                left: 0,
                right: 0,
                width: 0,
                height: 100,
                x: 0,
                y: top,
                toJSON: () => ({})
            }) as DOMRect
    });
}

function renderNavbarWithSections() {

    render(
        <>
            <Navbar />
            <section id="home">Home Section</section>
            <section id="about">About Section</section>
            <section id="experience">Experience Section</section>
            <section id="code">Code Section</section>
        </>
    );
}

function expectActiveDot(path: string) {

    expect(screen.getByTestId(`dot-${path}`)).toHaveClass("bg-orange-500");
}

beforeEach(() => {

    vi.clearAllMocks();

    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    vi.stubGlobal("requestAnimationFrame", requestAnimationFrameMock);
    vi.stubGlobal("cancelAnimationFrame", cancelAnimationFrameMock);
    Object.defineProperty(window, "innerHeight", {
        configurable: true,
        value: 1000
    });

});

describe("Navbar", () => {

    it("renders navigation buttons", () => {

        render(<Navbar />);

        expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "About" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Experience" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Code" })).toBeInTheDocument();

    });

    it("shows the home indicator by default", () => {

        renderNavbarWithSections();
        setSectionTop("home", 0);
        setSectionTop("about", 450);
        setSectionTop("experience", 900);
        setSectionTop("code", 1350);

        fireEvent.scroll(window);

        expectActiveDot("#home");
        expect(screen.getByTestId("dot-#about")).toHaveClass("bg-orange-500/0");

    });

    it("scrolls to a section and marks it active when a nav button is clicked", () => {

        renderNavbarWithSections();

        fireEvent.click(screen.getByRole("button", { name: "About" }));

        expect(scrollIntoViewMock).toHaveBeenCalledWith({
            behavior: "smooth",
        });
        expectActiveDot("#about");
        expect(screen.getByTestId("dot-#home")).toHaveClass("bg-orange-500/0");

    });

    it("updates the active section based on scroll position", () => {

        renderNavbarWithSections();
        setSectionTop("home", 0);
        setSectionTop("about", 500);
        setSectionTop("experience", 900);
        setSectionTop("code", 1300);

        fireEvent.scroll(window);

        expectActiveDot("#home");

        setSectionTop("about", 200);
        setSectionTop("experience", 650);
        fireEvent.scroll(window);

        expectActiveDot("#about");

        setSectionTop("experience", 150);
        setSectionTop("code", 700);
        fireEvent.scroll(window);

        expectActiveDot("#experience");

    });

    it("recalculates the active section on resize", () => {

        renderNavbarWithSections();
        setSectionTop("home", 0);
        setSectionTop("about", 200);
        setSectionTop("experience", 800);
        setSectionTop("code", 1200);

        fireEvent.scroll(window);
        expectActiveDot("#about");

        setSectionTop("about", 500);
        setSectionTop("experience", 900);
        setSectionTop("code", 1300);
        fireEvent.resize(window);

        expectActiveDot("#home");

    });

});

