import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Signup } from "./Signup";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
