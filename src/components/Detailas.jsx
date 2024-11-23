import { NavLink, useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const Detailas = () => {
  const { id, name, image, description, cost, buttonText } = useLoaderData();

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-md"
      />
      <h1 className="text-2xl font-bold mt-4">{name}</h1>
      <p className="text-gray-700 mt-2">{description}</p>
      <p className="text-lg font-semibold mt-2">Cost: ${cost}</p>
      <button
        onClick={() => document.getElementById("my_modal_5").showModal()}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Book Appoinment
      </button>
      <Modal></Modal>
    </div>
  );
};

export default Detailas;
