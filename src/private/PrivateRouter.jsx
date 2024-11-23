import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <h3>Loading</h3>
    }
    if(!user){
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
    return children
        
   
};

export default PrivateRouter;