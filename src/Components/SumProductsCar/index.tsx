import { useContext } from "react";
import { ProductContext } from "../../Provider/ProductContext";
import { SumProducts } from "./style";

export const SumProductsCar = () => {
    const { carts, productQtd } = useContext(ProductContext);

    const sumTotal = () => {
        const total = carts.reduce((accumulator, product) => {
            const quantity = productQtd[product.id] || 1;
            const subtotal = parseFloat(product.price.toString()) * quantity;
            return accumulator + subtotal;
        }, 0).toFixed(2);
        return parseFloat(total);
    };

    return (
        <SumProducts>
            <span>
                <h2>Total:</h2>
                <h3>{`R$${sumTotal()}`}</h3>
            </span>
            <div className="btn-final">
                <button>Finalizar Compra</button>
            </div>
        </SumProducts>
    );
};
