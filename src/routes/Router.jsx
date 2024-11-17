import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllTreatMents from "../pages/AllTreatMents";
import MyAppoinments from "../pages/MyAppoinments";
import Profile from "../pages/Profile";

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/alltreatment",
                element:<AllTreatMents></AllTreatMents>,
            },
            {
                path:"/myappoinment",
                element:<MyAppoinments></MyAppoinments>
            },
            {
                path:"/profile",
                element:<Profile></Profile>
            }
        ]
    },
])
export default router