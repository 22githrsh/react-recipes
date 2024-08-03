import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Receipecontext } from "../contexts/RecepieContext";

const Details = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [receipe, setreceipe] = useContext(Receipecontext);
    const dish = receipe.find((_, i) => i === parseInt(params.id));

    const DeleteHandler = () => {
        const updatedReceipe = receipe.filter((_, i) => i !== parseInt(params.id));
        setreceipe(updatedReceipe);
        localStorage.setItem('receipe', JSON.stringify(updatedReceipe));
        navigate(-1);
    };

    return dish && (
        <div className="w-full max-w-screen-lg mx-auto p-5">
            <Link to="/recipes" className="text-2xl text-green-600 hover:text-green-800 mb-4 inline-block">
                <i className="ri-arrow-left-line"></i> Back to Recipes
            </Link>
            <div className="flex flex-col md:flex-row md:space-x-5 mt-3">
                <div className="w-full md:w-1/2 p-3 shadow-lg rounded-lg bg-white">
                    <img className="w-full rounded-lg" src={dish.image} alt={dish.title} />
                    <h1 className="text-2xl md:text-3xl font-bold mt-5 text-center">{dish.title}</h1>
                    <p className="text-gray-600 mt-2 text-center">{dish.description}</p>
                    <div className="flex justify-around mt-5">
                        <Link
                            to="/update-recipe"
                            className="text-blue-500 border border-blue-500 py-2 px-5 rounded-md hover:bg-blue-100 transition duration-200"
                        >
                            Update
                        </Link>
                        <button
                            onClick={DeleteHandler}
                            className="text-red-500 border border-red-500 py-2 px-5 rounded-md hover:bg-red-100 transition duration-200"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3 py-3 mt-5 md:mt-0 overflow-auto bg-white shadow-lg rounded-lg">
                    <h1 className="text-2xl font-bold border-b-2 border-green-600 text-green-600 pb-2 mb-4">
                        Ingredients
                    </h1>
                    <ul className="list-disc pl-5 text-gray-700">
                        {dish.ingredients.split(",").map((item, i) => (
                            <li className="mb-2 text-sm" key={i}>
                                {item.trim()}
                            </li>
                        ))}
                    </ul>
                    <h1 className="text-2xl font-bold border-b-2 border-green-600 text-green-600 pb-2 mt-5 mb-4">
                        Instructions
                    </h1>
                    <ul className="list-decimal pl-5 text-gray-700">
                        {dish.instructions.split(".").map((item, i) => (
                            <li className="mb-2 text-sm" key={i}>
                                {item.trim()}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Details;
