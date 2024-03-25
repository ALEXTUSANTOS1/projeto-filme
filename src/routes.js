import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Filmes from "./pages/Filmes";
import Favoritos from "./pages/Favoritos"



import Erro from "./pages/Erro";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filmes />} />
                <Route path="/favoritos" element={<Favoritos />} />





                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;