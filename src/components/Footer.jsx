import React from "react";

const Footer = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto p-5 md:p-10">
            <h2 className="text-green-600 text-center text-lg md:text-xl">Features</h2>
            <h1 className="text-2xl md:text-3xl font-bold text-center mt-2">
                OUR AWESOME SERVICES
            </h1>

            <div className="features flex flex-wrap justify-center md:justify-between mt-5">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex items-center mb-5 md:mb-0 p-4">
                    <i className="text-6xl md:text-8xl ri-restaurant-line mr-4"></i>
                    <div>
                        <h1 className="text-lg md:text-xl font-semibold">Quality Food</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex items-center mb-5 md:mb-0 p-4">
                    <i className="text-6xl md:text-8xl ri-graduation-cap-line mr-4"></i>
                    <div>
                        <h1 className="text-lg md:text-xl font-semibold">Cook like a Chef</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex items-center mb-5 md:mb-0 p-4">
                    <i className="text-6xl md:text-8xl ri-bread-line mr-4"></i>
                    <div>
                        <h1 className="text-lg md:text-xl font-semibold">Ingredients</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex items-center mb-5 md:mb-0 p-4">
                    <i className="text-6xl md:text-8xl ri-presentation-line mr-4"></i>
                    <div>
                        <h1 className="text-lg md:text-xl font-semibold">Easy Recipe</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex items-center mb-5 md:mb-0 p-4">
                    <i className="text-6xl md:text-8xl ri-temp-hot-line mr-4"></i>
                    <div>
                        <h1 className="text-lg md:text-xl font-semibold">Serve Hot</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
