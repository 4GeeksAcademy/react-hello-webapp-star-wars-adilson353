import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PlanetView } from "./views/PlanetView";
import { CharacterView } from "./views/CharacterView";
import { StarshipView } from "./views/StarshipView";
import injectContext from "./store/appContext";
//create your first component
const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route  path="/starships/:starship_id" element={<StarshipView />} />
                        <Route path="/planets/:planets_id" element={<PlanetView />} />
                        <Route path="/character/:character_id" element={<CharacterView />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
