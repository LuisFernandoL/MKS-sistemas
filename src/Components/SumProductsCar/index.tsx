import { useContext } from "react";
import { ProductContext } from "../../Provider/ProductContext";
import { SumProducts } from "./style";

export const SumProductsCar = () => {
    const { carts } = useContext(ProductContext);

    const sumTotal = () => {
        const total = carts.reduce((total, product) => total + parseFloat(product.price.toString()), 0);
        return total.toFixed(2);
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


