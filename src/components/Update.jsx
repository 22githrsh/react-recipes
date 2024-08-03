import React from "react";

const Update = () => {
    return (
        <form className="w-full max-w-3xl m-auto p-5 sm:p-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-600 mb-6">
                Update <br /> Existing Recipe
            </h1>
            <input
                type="url"
                className="w-full border rounded-md px-4 py-3 text-lg mb-4 sm:mb-5"
                placeholder="Recipe Image URL"
            />
            <input
                type="text"
                className="w-full border rounded-md px-4 py-3 text-lg mb-4 sm:mb-5"
                placeholder="Recipe Name"
            />
            <textarea
                className="w-full border rounded-md px-4 py-3 text-lg mb-4 sm:mb-5"
                placeholder="Recipe description..."
                rows="4"
            ></textarea>
            <textarea
                className="w-full border rounded-md px-4 py-3 text-lg mb-4 sm:mb-5"
                placeholder="Recipe ingredients -> 'use comma to separate ingredients'..."
                rows="4"
            ></textarea>
            <textarea
                className="w-full border rounded-md px-4 py-3 text-lg mb-4 sm:mb-5"
                placeholder="Recipe instructions -> 'use comma to separate instructions'..."
                rows="4"
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-lg sm:text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Re-Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Update;
