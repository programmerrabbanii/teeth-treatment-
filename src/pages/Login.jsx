import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { FaGooglePlusG } from "react-icons/fa";

const Login = () => {
    const [error, setError] = useState("");
    const location=useLocation()
    const { loginGoogle, signinUser } = useContext(AuthContext);
    const navigate = useNavigate(); 

    const handlerLogin = (e) => {
        e.preventDefault();
        console.log(e.target);
    
        const email = e.target.email?.value;
        const password = e.target.password?.value;
    
        if (!email || !password) {
            setError("Please provide both email and password");
            return;
        }
    
        signinUser(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(location.state?.from || "/");
            })
            .catch((err) => {
                setError(err.message);
            });
    };
    
    const googlelogin = () => {
        loginGoogle()
            .then((result) => {
                console.log(result.user);
                navigate("/");
            })
            .catch(error => {
                console.log("ERROR", error);
                setError(error.message);
            });
    };

    return (
        <div>
            <div className="card bg-base-100 w-8/12 mx-auto shrink-0 shadow-2xl">
                <h1 className="text-3xl font-bold text-center mt-5">Login now!</h1>
                <form onSubmit={handlerLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    {error && <span className="text-red-800">{error}</span>}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div
                    onClick={googlelogin}
                    className="flex justify-center items-center gap-3 mx-5 bg-gray-100 hover:bg-gray-200 transition rounded-lg p-3 shadow-md cursor-pointer"
                >
                    <FaGooglePlusG className="text-3xl text-red-500" />
                    <h2 className="text-lg font-semibold text-gray-700 hover:text-gray-900 transition">
                        Login With Google
                    </h2>
                </div>
                <p className="text-center">
                    New To The Website{" "}
                    <Link to="/register" className="text-red-500">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
