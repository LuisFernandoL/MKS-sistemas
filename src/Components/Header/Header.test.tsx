import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from ".";



describe("renders logo", () => {
    it("should render all elements correctly", () => {
        render(<Header />);
        const logos = screen.getAllByAltText("Logo da mks");
        logos.forEach((logo) => {
            expect(logo).toBeInTheDocument();
        });

        describe("modal button working correctly", () => {

            it("shoul be able to render button and fire clicl event", () => {
                render(<Header />);

                const button = screen.getByRole("button")
                expect(button).toBeInTheDocument();

                fireEvent.click(button);

                const openModal = screen.getByText("Seu carrinho está vazio");
                expect(openModal).toBeInTheDocument()
            })

        })
    });
});
