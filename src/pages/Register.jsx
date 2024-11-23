import { Link, useNavigate } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");

  const navigite = useNavigate();
  const { createUser, manageUser } = useContext(AuthContext);
  const { loginGoogle } = useContext(AuthContext);
  const HandleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    // password validatio
    if (!/[A-Z]/.test(password)) {
      setError("Password must include at least one uppercase letter.");
      return
    }
     else if (!/[a-z]/.test(password)) {
      setError("Password must include at least one lowercase letter.");
      return;
    }
     else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return
    }
     else {
      setError("");
    }

    // user validation
    createUser(email, password)
      .then((result) => {
        manageUser(name,photo)
        navigite("/login");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const googleLogin = (e) => {
    loginGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .cacth((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-8/12 mx-auto shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center mt-5 font-bold">Register</h1>
        <form onSubmit={HandleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="PhotoURL"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <p className="text-red-500">{error && <span>{error}</span>}</p>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <div
          onClick={googleLogin}
          className="flex justify-center items-center gap-3 mx-5 bg-gray-100 hover:bg-gray-200 transition rounded-lg p-3 shadow-md cursor-pointer"
        >
          <FaGooglePlusG className="text-3xl text-red-500" />
          <h2 className="text-lg font-semibold text-gray-700 hover:text-gray-900 transition">
            Login With Google
          </h2>
        </div>

        <p className="text-center">
          {" "}
          Already HAve An Account{" "}
          <Link className="text-red-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
