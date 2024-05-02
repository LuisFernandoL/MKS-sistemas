import { render, screen } from '@testing-library/react';
import { ProductCard } from '.';

const productMock = {
    id: 8,
    photo: "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp",
    name: "Headset Cloud Stinger",
    description: "O HyperX Cloud Stinger™ é o headset ideal para j.",
    price: 600.00,
    brand: "HyperX",
}

describe("ProductCard", () => {
    it("should check that all items are being rendered correctly", () => {
        render(<ProductCard product={productMock} />);

        expect(screen.getByText(productMock.name)).toBeInTheDocument();
        expect(screen.getByText(productMock.description)).toBeInTheDocument();

    });
});
