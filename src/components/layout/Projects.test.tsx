import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it, vi } from "vitest";
import Projects from "./Projects";

vi.mock("next/image", () => ({
    default: ({ src, alt, width, height, ...props }: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
        [key: string]: unknown;
    }) => {

        void width;
        void height;

        return createElement("img", {
            src,
            alt,
            ...props
        });
    }
}));

describe("Projects", () => {

    it("renders the projects section header", () => {

        render(<Projects />);

        expect(screen.getByText("Projects")).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Featured Projects" })).toBeInTheDocument();
        expect(screen.getByText(/Real applications I've designed/i)).toBeInTheDocument();

    });

    it("uses the projects id for section navigation", () => {

        render(<Projects />);

        expect(document.querySelector("#projects")).toBeInTheDocument();

    });

    it("renders Facility Nerds as the primary case study", () => {

        render(<Projects />);

        const logo = screen.getByRole("img", { name: "Facility Nerds logo" });

        expect(logo).toHaveAttribute("src", "/images/FacilityNerd Logo.png");
        expect(screen.getByText("Primary Case Study")).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Facility Nerds" })).toBeInTheDocument();
        expect(screen.getByText("SaaS Access Control Platform")).toBeInTheDocument();
        expect(screen.getByText(/automates facility access/i)).toBeInTheDocument();
        expect(screen.getByText(/Built role-based access control/i)).toBeInTheDocument();

    });

    it("renders the remaining project case studies", () => {

        render(<Projects />);

        expect(screen.getByRole("heading", { name: "Boerman Management Platform" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Healthcare Management Platform" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Inventory Management Systems" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Developer Portfolio Platform" })).toBeInTheDocument();

    });

    it("renders important technology badges", () => {

        render(<Projects />);

        expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0);
        expect(screen.getAllByText("PostgreSQL").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Docker").length).toBeGreaterThan(0);
        expect(screen.getByText("Vitest")).toBeInTheDocument();
        expect(screen.getAllByText("REST APIs").length).toBeGreaterThan(0);

    });

    it("only renders a repository button for the public portfolio project", () => {

        render(<Projects />);

        const links = screen.getAllByRole("link", { name: "View Repository" });

        expect(links).toHaveLength(1);
        expect(links[0]).toHaveAttribute("href", "https://github.com/hcardwell0609/portfolio");

    });

});
