import { render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it, vi } from "vitest";
import AboutMe from "./AboutMe";

vi.mock("next/image", () => ({
    default: ({ src, alt, fill, sizes, ...props }: {
        src: string;
        alt: string;
        fill?: boolean;
        sizes?: string;
        [key: string]: unknown;
    }) => {

        void fill;
        void sizes;

        return createElement("img", {
            src,
            alt,
            ...props
        });
    }
}));

describe("AboutMe", () => {

    it("renders the about section content", () => {

        render(<AboutMe />);

        expect(screen.getByText("About Me")).toBeInTheDocument();
        expect(screen.getByRole("heading", {
            name: "I build software that creates real impact."
        })).toBeInTheDocument();
        expect(screen.getByText(/I'm a full-stack developer/i)).toBeInTheDocument();
        expect(screen.getByText(/From idea to deployment/i)).toBeInTheDocument();

    });

    it("uses the about id for section navigation", () => {

        render(<AboutMe />);

        expect(document.querySelector("#about")).toBeInTheDocument();

    });

    it("renders the profile image and location details", () => {

        render(<AboutMe />);

        const image = screen.getByRole("img", { name: "Hunter Cardwell" });

        expect(image).toHaveAttribute("src", "/images/profile_picture.jpg");
        expect(screen.getByText("Based in Taneyville, USA")).toBeInTheDocument();
        expect(screen.getByText("Available for new opportunities")).toBeInTheDocument();

    });

    it("renders the focus cards", () => {

        render(<AboutMe />);

        expect(screen.getByText("What I Focus On")).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Full Stack Development" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Reliable Systems" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Real World Impact" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Always Improving" })).toBeInTheDocument();

    });

});
