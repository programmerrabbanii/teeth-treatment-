import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddDataCard from '../components/AddDataCard';

const AllTreatMents = () => {
    const allServices=useLoaderData()
    
    return (
        <div className='w-11/12 mx-auto'>
          {
            allServices.map((serviceCar)=> <AddDataCard serviceCar={serviceCar} key={serviceCar.id}></AddDataCard>)
          }
        </div>
    );
};

export default AllTreatMents;