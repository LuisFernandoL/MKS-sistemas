import { Route, Routes } from "react-router-dom"
import { Home } from "../Components/Main"



export const RoutesMain = () => {

    return (
        <Routes>
            <Route>
                <Route path="/products" element={<Home />} />
            </Route>
        </Routes>
    )
}