import logoMks from "../../assets/MKS.png"
import sistemas from "../../assets/Sistemas.png"
import { HeaderStyle } from "./style"
import car from "../../assets/Vector.png"
import { useContext } from "react"
import { ProductContext } from "../../Provider/ProductContext"
import { ModalCar } from "../ModalCar"

export const Header = () => {
    const { isOpen, setIsOpen, cartProducCount } = useContext(ProductContext);


    return (
        <HeaderStyle>
            <div className="div-main-header">
                <div id="div-img">
                    <span id="span-img">
                        <img src={logoMks} alt="Logo da mks" />
                    </span>
                    <div id="div-h1">
                        <img id="logo-sistemas" src={sistemas} alt="" />
                    </div>
                </div>
                <div className="div-car">
                    <button className="btn-car" onClick={() => setIsOpen(true)}><img id="img-car" src={car} alt="" /></button>
                    <p>{cartProducCount}</p>

                    {isOpen ? <ModalCar /> : null}
                </div>
            </div>
        </HeaderStyle>
    )
}