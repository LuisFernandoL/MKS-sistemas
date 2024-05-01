import { ProductCard } from "../../Components/ProductCard"
import { ProductContext } from "../../Provider/ProductContext"
import { useContext } from "react"
import { StyleList } from "./style"


export const ListProduct = () => {
    const { products, isLoading } = useContext(ProductContext)
    console.log(products)
    return (
        <StyleList>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <ul>
                    {products?.map((product) => <ProductCard key={product.id} product={product} />)}
                </ul>
            )}
        </StyleList>
    )
}