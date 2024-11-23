import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllTreatMents from "../pages/AllTreatMents";
import MyAppoinments from "../pages/MyAppoinments";
import Profile from "../pages/Profile";
import Detailas from "../components/Detailas";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRouter from "../private/PrivateRouter";

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: async()=>{
                    const servicesRes=await fetch("/services.json")
                    const ServiceData=await servicesRes.json()

                    const feeadBackRes=await fetch("/feeadback.json")
                    const feedDataData=await feeadBackRes.json()

                    return {ServiceData, feedDataData }

                }

            },
            {
                path:"/alltreatment",
                element:<AllTreatMents></AllTreatMents>,
                loader:()=> fetch("/services.json")
            },
            {
                path:"/myappoinment",
                element:<MyAppoinments></MyAppoinments>
            },
            {
                path:"/register",
                element:<Register></Register>

            },
            {
                path:"/login",
                element:<Login></Login>

            },
            { 
                path:"/profile",
                element:<Profile></Profile>
            },
            {
                path:"/details/:id",
                element:<PrivateRouter><Detailas></Detailas></PrivateRouter>,
                loader: async({params})=>{
                    const res=await fetch("/services.json")
                    const data=await res.json()
                    const singleData=data.find((d)=>d.id== params.id)
                    return singleData

                }
            }
        ]
    },
])
export default router