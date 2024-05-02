import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductContext } from "../../Provider/ProductContext";
import { StyleDivUl } from "./style";
import { GoPlus } from "react-icons/go";
import { GrFormSubtract } from "react-icons/gr";
import { IoCloseSharp } from "react-icons/io5";

export const ProductsModal = () => {
    const { carts, setCarts, setCartProducCount, updateProductQtd, productQtd } = useContext(ProductContext);

    const removeProduct = (productId: number) => {
        const updatedCarts = carts.filter(cart => cart.id !== productId);
        setCarts(updatedCarts);
        setCartProducCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
        updateProductQtd(productId, 0);
    };

    const updateQuantity = (productId: number, amount: number) => {
        const currentQuantity = productQtd[productId] || 0;
        const newQuantity = currentQuantity + amount;
        if (newQuantity <= 0) {
            removeProduct(productId);
        } else {
            updateProductQtd(productId, newQuantity);
        }
    };

    return (
        <StyleDivUl>
            <ul>
                <AnimatePresence>
                    {carts.map(product => (
                        <motion.li
                            key={product.id}
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        >
                            <div className="div-main">
                                <div className="div-img">
                                    <img src={product.photo} alt={product.name} />
                                </div>
                                <h2>{product.name}</h2>
                                <div className="div-btn-add-qtd">
                                    <span id="span-h3">
                                        <h3>Qtd:</h3>
                                    </span>
                                    <div id="div-btns">
                                        <button id="btn-any-less" onClick={() => updateQuantity(product.id, -1)}>
                                            <GrFormSubtract />
                                        </button>
                                        <p id="number-qtd">{productQtd[product.id] || 1}</p>
                                        <button id="btn-plus" onClick={() => updateQuantity(product.id, 1)}>
                                            <GoPlus />
                                        </button>
                                    </div>
                                </div>
                                <p>R${product.price * (productQtd[product.id] || 1)}</p>
                                <button className="btn-remove-product" onClick={() => removeProduct(product.id)}>
                                    <IoCloseSharp size={14} />
                                </button>
                            </div>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </StyleDivUl>
    );
};
