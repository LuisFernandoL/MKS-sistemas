export interface IProductProviderProps {
  children: React.ReactNode;
}

export interface IProduct {
  id: number;
  photo: string;
  name: string;
  brand: string;
  description: string;
  price: number;
}

export interface IProductContext {
  products: IProduct[] | undefined;
  isLoading: boolean;
  carts: IProduct[];
  setCarts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  addCart: (productId: number) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartProducCount: number;
  setCartProducCount: React.Dispatch<React.SetStateAction<number>>;
}
