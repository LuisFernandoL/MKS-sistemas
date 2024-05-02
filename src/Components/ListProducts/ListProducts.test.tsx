import { expect, it, describe } from "vitest";
import { render, screen } from '@testing-library/react';
import { ListProduct } from '.';

describe("ListProduct", () => {
    it("should render the list of products", () => {
        render(<ListProduct />);
        
        expect(screen.getByRole("list")).toBeInTheDocument();
    });
});
