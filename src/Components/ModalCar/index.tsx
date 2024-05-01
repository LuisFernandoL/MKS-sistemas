import { useContext, useEffect, useRef } from "react";
import { ProductContext } from "../../Provider/ProductContext";
import { ModalContainerCreate } from "./style";
import { ProductsModal } from "../ProductsModal";
import { SumProductsCar } from "../SumProductsCar";
import { IoCloseSharp } from "react-icons/io5";

export const ModalCar = () => {
  const { setIsOpen } = useContext(ProductContext);
  const buttonRef = useRef(null as any);
  const modalRef = useRef(null as any);

  useEffect(() => {
    const handleOutclick = (e: { target: any }) => {
      if (!modalRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleOutclick);
    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  useEffect(() => {
    const handleKeydow = (e: { key: string }) => {
      if (e.key === "Escape") {
        buttonRef.current?.click();
      }
    };

    window.addEventListener("keydown", handleKeydow);
    return () => {
      window.removeEventListener("keydown", handleKeydow);
    };
  });



  return (
    <ModalContainerCreate role="dialog">
      <div className="div-main" ref={modalRef}>
        <header>
          <div className="div-header">
            <h1>Carrinho de compras</h1>
            <button className="btn-close" ref={buttonRef} onClick={() => setIsOpen(false)}>
              <IoCloseSharp size={20} />
            </button>
          </div>
        </header>
        <ProductsModal />
        <SumProductsCar />
      </div>
    </ModalContainerCreate >
  );
};
