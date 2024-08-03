import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { Receipecontext } from "../contexts/RecepieContext";
import { useNavigate } from "react-router-dom";
import { asyncAddRecipe } from "../store/actions/recipeaction";
import { useDispatch } from "react-redux";

const Create = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [receipe, setreceipe] = useContext(Receipecontext);
    const [image, setimage] = useState('');
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [ingredients, setingredients] = useState('');
    const [instructions, setinstructions] = useState('');

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(image, title, description, ingredients, instructions);
        const newreceipe = {
            id: nanoid(),
            image: image,
            title: title,
            description: description,
            ingredients: ingredients,
            instructions: instructions,
        };
        dispatch(asyncAddRecipe([...receipe, newreceipe]));
        localStorage.setItem('receipe', JSON.stringify([...receipe, newreceipe]));
        navigate('/');
    };

    console.log(receipe);

    return (
        <form onSubmit={SubmitHandler} className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] m-auto mt-[5%] sm:mt-[7%] md:mt-[10%] p-5 sm:p-8 md:p-10 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-3 sm:mt-5 font-extrabold text-green-600 mb-6 sm:mb-8 md:mb-10">
                Create <br /> New Recipe
            </h1>
            <input
                onChange={(e) => setimage(e.target.value)}
                value={image}
                type="url"
                className="w-full border rounded-md px-4 sm:px-6 py-2 sm:py-3 text-lg mb-4 sm:mb-5"
                placeholder="Recipe Image URL"
            />
            <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                type="text"
                className="w-full border rounded-md px-4 sm:px-6 py-2 sm:py-3 text-lg mb-4 sm:mb-5"
                placeholder="Recipe Name"
            />
            <textarea
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                className="w-full border rounded-md px-4 sm:px-6 py-2 sm:py-3 text-lg mb-4 sm:mb-5"
                placeholder="Recipe description..."
            ></textarea>
            <textarea
                onChange={(e) => setingredients(e.target.value)}
                value={ingredients}
                className="w-full border rounded-md px-4 sm:px-6 py-2 sm:py-3 text-lg mb-4 sm:mb-5"
                placeholder="Recipe ingredients (use comma to separate)..."
            ></textarea>
            <textarea
                onChange={(e) => setinstructions(e.target.value)}
                value={instructions}
                className="w-full border rounded-md px-4 sm:px-6 py-2 sm:py-3 text-lg mb-4 sm:mb-5"
                placeholder="Recipe instructions (use comma to separate)..."
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-lg sm:text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Create;
