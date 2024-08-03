import React from "react";
import Footer from "./Footer";
import Home from "./Home";
import Recipes from "./Recipes";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <Home />
                <div className="px-4 sm:px-6 md:px-8">
                    <Recipes />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
