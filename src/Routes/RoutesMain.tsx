import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"




export const RoutesMain = () => {

    return (
        <Routes>
            <Route>
                <Route path="/products" element={<Home />} />
            </Route>
        </Routes>
    )
}