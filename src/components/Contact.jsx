import React from "react";

const Contact = () => {
    return (
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] m-auto mt-10 p-5 sm:p-8 md:p-10 bg-green-100 rounded-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-5 font-extrabold text-green-600 mb-5 lg:mb-[5%] text-center">
                DO YOU WANT TO REACH US?
            </h1>
            <div className="flex justify-center">
                <button className="rounded-md text-sm sm:text-md bg-green-600 text-white py-2 px-3 sm:px-4 md:px-5 hover:bg-green-700 duration-200">
                    REACH KRLO FRAANDS &nbsp; &#8594;
                </button>
            </div>
        </div>
    );
};

export default Contact;
