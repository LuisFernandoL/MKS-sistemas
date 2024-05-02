import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from '.';


describe("Footer", () => {
    it("must check if text is being rendered", () => {
        render(<Footer />)

        expect(screen.getByText("MKS sistemas © Todos os direitos reservados")).toBeInTheDocument()
    })

})