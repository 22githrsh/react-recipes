import { Link, useParams } from "react-router-dom";

const Card = ({ dish, index }) => {
    const params = useParams();
    console.log(params.id);

    return (
        <Link
            to={`/recipes/${index}`}
            className="mr-4 mb-6 w-full sm:w-[48%] md:w-[30%] text-center p-5 shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform duration-200"
        >
            <img className="w-full h-48 object-cover rounded-md" src={dish.image} alt={dish.title} />
            <h1 className="mt-5 mb-3 text-lg sm:text-xl font-semibold">{dish.title}</h1>
            <p className="text-sm sm:text-base">{dish.description.slice(0, 100)}...</p>
            <div className="flex justify-between text-zinc-400 mt-5">
                <p className="text-center">
                    <i className="ri-timer-line"></i>
                    <br />
                    <span className="text-xs sm:text-sm">20min</span>
                </p>
                <p className="text-center">
                    <i className="ri-thumb-up-line"></i>
                    <br />
                    <span className="text-xs sm:text-sm">Easy</span>
                </p>
                <p className="text-center">
                    <i className="ri-share-line"></i>
                    <br />
                    <span className="text-xs sm:text-sm">Share</span>
                </p>
            </div>
        </Link>
    );
};

export default Card;
