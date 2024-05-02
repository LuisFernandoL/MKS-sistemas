import { IProduct } from "../../Provider/@types"
import { StyleCard } from "./style";
import btn from "../../assets/Group 2.png"
import { useContext } from "react";
import { ProductContext } from "../../Provider/ProductContext";

interface IProductCardProps {
    product: IProduct
}

export const ProductCard = ({ product }: IProductCardProps) => {
    const { addCart } = useContext(ProductContext)

    const handleAddCart = () => {
        addCart(product.id)
    }

    const priceFomatte = parseFloat(product.price.toString()).toFixed(2).replace(/\.0+$/, '');

    return (
        <StyleCard>
            <li className="list-product">
                <div className="div-img">
                    <img src={product.photo} alt={product.name} />
                </div>
                <div id="div-price-name">
                    <h1>{product.name}</h1>
                    <h2>R${priceFomatte}</h2>
                </div>
                <span id="span-description">
                    <h3>{product.description}</h3>
                </span>
                <div id="div-button">
                    <button onClick={handleAddCart}><img src={btn} alt="Adicionar ao carrinho" /></button>
                </div>
            </li>
        </StyleCard>
    )
}