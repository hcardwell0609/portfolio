import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Header from "./Header";

const scrollIntoViewMock = vi.fn();

beforeEach(() => {

    vi.clearAllMocks();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

});

describe("Header", () => {

    it("renders the hero content", () => {

        render(<Header />);

        expect(screen.getByText("Hi, I'm")).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Hunter Cardwell" })).toBeInTheDocument();
        expect(screen.getByText("Full Stack Engineer & Problem Solver")).toBeInTheDocument();

    });

    it("uses the home id for section navigation", () => {

        render(<Header />);

        expect(document.querySelector("#home")).toBeInTheDocument();

    });

    it("scrolls to the projects section when view work is clicked", () => {

        render(
            <>
                <Header />
                <section id="projects">Projects Section</section>
            </>
        );

        const button = screen.getByRole("button", { name: "View my work" });

        fireEvent.click(button);

        expect(button).toHaveTextContent("View My Work");
        expect(scrollIntoViewMock).toHaveBeenCalledWith({
            behavior: "smooth"
        });

    });

});
