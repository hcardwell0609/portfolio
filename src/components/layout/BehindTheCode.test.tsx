import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BehindTheCode from "./BehindTheCode";

describe("BehindTheCode", () => {

    it("renders the section header and intro copy", () => {

        render(<BehindTheCode />);

        expect(screen.getByText("Behind The Code")).toBeInTheDocument();
        expect(screen.getByRole("heading", {
            name: "See how I build software. Explore my code."
        })).toBeInTheDocument();
        expect(screen.getByText(/This portfolio is built as a real full-stack application/i)).toBeInTheDocument();

    });

    it("uses the code id for section navigation", () => {

        render(<BehindTheCode />);

        expect(document.querySelector("#code")).toBeInTheDocument();

    });

    it("renders the repository links", () => {

        render(<BehindTheCode />);

        const exploreLink = screen.getByRole("link", { name: /Explore Repository/i });

        expect(exploreLink).toHaveAttribute("href", "https://github.com/hcardwell0609/portfolio");
        expect(exploreLink).toHaveAttribute("target", "_blank");

    });

    it("renders the highlight cards", () => {

        render(<BehindTheCode />);

        expect(screen.getByRole("heading", { name: "Modern Stack" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Clean Architecture" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Production Mindset" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Continuous Growth" })).toBeInTheDocument();

    });

    it("renders the real project file tree", () => {

        render(<BehindTheCode />);

        expect(screen.getByText("src")).toBeInTheDocument();
        expect(screen.getByText("app")).toBeInTheDocument();
        expect(screen.getByText("Navbar.tsx")).toBeInTheDocument();
        expect(screen.getByText("BehindTheCode.tsx")).toBeInTheDocument();
        expect(screen.getByText("profile_picture.jpg")).toBeInTheDocument();
        expect(screen.getByText("FacilityNerd Logo.png")).toBeInTheDocument();
        expect(screen.getByText("next.config.ts")).toBeInTheDocument();

    });

    it("renders the page code preview", () => {

        render(<BehindTheCode />);

        expect(screen.getAllByText("page.tsx")).toHaveLength(2);
        expect(screen.getByText(/import Navbar from/i)).toBeInTheDocument();
        expect(screen.getByText(/<BehindTheCode \/>/i)).toBeInTheDocument();
        expect(screen.getByText(/import Projects from/i)).toBeInTheDocument();

    });

});
