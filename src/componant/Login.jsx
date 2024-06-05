import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/Firebase.config";


const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const emailRef = useRef(null);
  const auth = getAuth(app);


  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";


  const handleLogin = (event) => {
    event.preventDefault();
    setLoginError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        getToken(email)
        toast.success("User Login successfully");
        navigate(from, { replace: true });
        // navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  // reset password
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("need email address");
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      console.log("please write a valid email");
      return;
    }
    // send validation email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("please check your email");
      })
      .catch((err) => console.log(err));
  };

  //  Get jwt token
  const getToken = (email) => {
    fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.accessToken);
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          // navigate('/')
        }
      });
  };

  return (
    <div className="hero w-full my-5">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full shadow-2xl py-11">
          <h1 className="text-5xl text-center text-blue-500 font-semibold">
            Login
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={emailRef}
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered w-96"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className=" w-96 input input-bordered"
              />
              <label className="label">
                <a
                  href="#"
                  onClick={handleResetPassword}
                  className="label link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-2">
              <input
                className="btn btn-accent text-lg  w-96"
                type="submit"
                value="Login"
              />
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
          </form>
          <p className="text-center">
            New to Here ! Please
            <Link className="text-orange-600 font-bold ml-2" to="/sign_up">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
