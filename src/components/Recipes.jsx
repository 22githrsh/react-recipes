import React, { useContext } from "react";
import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import { Receipecontext } from "../contexts/RecepieContext";

const Recipes = () => {
    const { pathname } = useLocation();
    const [receipe] = useContext(Receipecontext);

    return (
        <div className="p-5">
            <h1 className="text-center text-2xl font-semibold">OUR RECIPES</h1>
            <p className="text-center text-zinc-400 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                aperiam?
            </p>
            <div className="recipe-cards mt-5 flex flex-wrap justify-center gap-4">
                {receipe.map((dish, i) => (
                    <Card index={i} key={i} dish={dish} />
                ))}
            </div>
            {pathname === "/recipes" && (
                <Link
                    to="/create-recipe"
                    className="fixed bottom-5 left-5 md:left-10 md:bottom-10 bg-green-200 text-green-600 py-2 px-5 rounded-md flex items-center gap-3 hover:bg-green-300 duration-200"
                >
                    <i className="text-2xl ri-add-box-line"></i>
                    Create Recipe
                </Link>
            )}
        </div>
    );
};

export default Recipes;
