import { NavLink } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { id, name, image, description, cost, buttonText } = service;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mt-10">
        <figure>
          <img
          className="h-full w-96]"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>
          <h3> {cost}</h3>
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="bg-blue-950 text-white py-2 px-7 rounded-e-sm"> <NavLink to={`/details/${id}`}>Checkout More</NavLink> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
