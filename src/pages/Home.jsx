import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServicesCard from "../components/ServicesCard";
import Feeadback from "../components/Feeadback";

const Home = () => {
  const { ServiceData, feedDataData } = useLoaderData();
  


  return (
    <div className="mt-10 w-11/12 mx-auto font-semibold">
      <h2 className="text-3xl text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ServiceData.slice(0, 4).map((service) => (
          <ServicesCard service={service} key={service.id}></ServicesCard>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-blue-950 text-white py-2 px-7 rounded-sm">
          <Link to="/alltreatment"> Show More </Link>
        </button>
      </div>

      {/* Feedback Section */}
    
        {
            feedDataData.map((feed)=> <Feeadback feed={feed} key={feed.id}></Feeadback>)
        }
    </div>
  );
};

export default Home;
