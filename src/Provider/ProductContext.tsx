import { createContext, useState } from "react";
import { IProduct, IProductProviderProps, IProductContext } from "./@types";
import { api } from "../Services/api";
import { useQuery } from "react-query";


export const ProductContext = createContext({} as IProductContext)

export const ProductProvider = ({ children }: IProductProviderProps) => {
    const [carts, setCarts] = useState<IProduct[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [cartProducCount, setCartProducCount] = useState(0);
    const [productQtd, setProductQtd] = useState<{ [productId: number]: number }>({});

    const { data: products, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const { data } = await api.get<{ count: number, products: IProduct[] }>("/products", {
                params: {
                    page: 1,
                    rows: 8,
                    sortBy: "id",
                    orderBy: "DESC"
                }
            });

            return data.products;
        },
    });

    const addCart = (productId: number) => {

        const productFindCart = carts.find((item) => item.id === productId);
        if (!productFindCart) {
            const product = products?.find((item) => item.id === productId);
            if (product) {
                setCarts([...carts, product]);
                setCartProducCount((prevCount) => prevCount + 1)
            } else {
                console.log("Produto não encontrado");
            }
        } else {
            console.log("Produto já está no carrinho");
        }
    };

    const updateProductQtd = (productId: number, quantity: number) => {
        setProductQtd(prevProductQtd => ({
            ...prevProductQtd,
            [productId]: quantity
        }));
    };

    return (
        <ProductContext.Provider value={{
            products,
            isLoading,
            carts,
            setCarts,
            addCart,
            isOpen,
            setIsOpen,
            cartProducCount,
            setCartProducCount,
            productQtd,
            setProductQtd,
            updateProductQtd
        }}>
            {children}
        </ProductContext.Provider>

    )

}