import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it, vi } from "vitest";
import Experience from "./Experience";

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

describe("Experience", () => {

    it("renders the experience section header", () => {

        render(<Experience />);

        expect(screen.getByText("Experience")).toBeInTheDocument();
        expect(screen.getByRole("heading", {
            name: "Building software that solves real problems."
        })).toBeInTheDocument();
        expect(screen.getByText(/From idea to production/i)).toBeInTheDocument();

    });

    it("uses the experience id for section navigation", () => {

        render(<Experience />);

        expect(document.querySelector("#experience")).toBeInTheDocument();

    });

    it("renders the summary cards", () => {

        render(<Experience />);

        expect(screen.getByText("Production SaaS")).toBeInTheDocument();
        expect(screen.getByText("Full Stack Ownership")).toBeInTheDocument();
        expect(screen.getByText("Real Users")).toBeInTheDocument();

    });

    it("renders the Facility Nerds experience", () => {

        render(<Experience />);

        const logo = screen.getByRole("img", { name: "Facility Nerds logo" });

        expect(logo).toHaveAttribute("src", "/images/FacilityNerd Logo.png");
        expect(screen.getByText("2023 - Present")).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Founder & Full Stack Developer" })).toBeInTheDocument();
        expect(screen.getByText("Facility Nerds")).toBeInTheDocument();
        expect(screen.getByText(/Built a SaaS access control platform/i)).toBeInTheDocument();
        expect(screen.getByText("Debugged and resolved production issues affecting real customers")).toBeInTheDocument();

    });

    it("renders the DreamCo client software experience", () => {

        render(<Experience />);

        expect(screen.getByText("2021 - Present")).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Full Stack Developer" })).toBeInTheDocument();
        expect(screen.getByText("DreamCo / Client Software")).toBeInTheDocument();
        expect(screen.getByText(/Developed custom applications and automation tools/i)).toBeInTheDocument();
        expect(screen.getByText("Worked directly with clients to understand problems and create solutions")).toBeInTheDocument();

    });

    it("renders the technology badges", () => {

        render(<Experience />);

        expect(screen.getByText("TypeScript")).toBeInTheDocument();
        expect(screen.getAllByText("PostgreSQL")).toHaveLength(2);
        expect(screen.getByText("Docker")).toBeInTheDocument();
        expect(screen.getByText("Python")).toBeInTheDocument();
        expect(screen.getByText("APIs")).toBeInTheDocument();

    });

});
