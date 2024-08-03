import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="h-[10vh] w-full flex items-center justify-between px-2 sm:px-8 shadow-md">
            <img
                className="h-full max-h-[8vh] object-contain"
                src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
                alt="Logo"
            />
            <div className="flex gap-x-2 sm:gap-x-6 md:gap-x-8 text-sm sm:text-md md:text-lg items-center">
                <Link className="hover:text-green-600 duration-200" to="/">
                    Home
                </Link>
                <Link className="hover:text-green-600 duration-200" to="/recipes">
                    Recipes
                </Link>
                <Link className="hover:text-green-600 duration-200" to="/about">
                    About
                </Link>
                <Link className="hover:text-green-600 duration-200" to="/contact">
                    Contact
                </Link>
            </div>
            <i className="text-2xl sm:text-3xl md:text-4xl ri-grid-fill text-green-600"></i>
        </nav>
    );
};

export default Nav;
