import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header";

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

    it("renders the view work link", () => {

        render(<Header />);

        const link = screen.getByRole("link", { name: "View my work" });

        expect(link).toHaveAttribute("href", "#projects");
        expect(link).toHaveTextContent("View My Work");

    });

});
