import React from "react";

const Home = () => {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between h-[60vh] p-5 md:p-10">
            <div className="left w-full md:w-1/2 flex flex-col items-center md:items-start mb-5 md:mb-0">
                <h1 className="text-4xl md:text-7xl font-extrabold mb-5 text-green-600 text-center md:text-left">
                    SIMPLE AND TASTY RECIPES
                </h1>
         
                <button className="bg-green-600 text-white py-2 px-5 rounded-md hover:bg-green-700 duration-200">
                    Get Started &nbsp; &#8594;
                </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img
                    className="w-full max-w-sm md:max-w-full object-contain"
                    src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png"
                    alt="Cooking Recipe"
                />
            </div>
        </div>
    );
};

export default Home;
