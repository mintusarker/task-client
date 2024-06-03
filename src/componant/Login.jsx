import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

// import useToken from '../../Hooks/useToken';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  // const [loginEmail, setLoginEmail] = useState('');
  // const [token] = useToken(loginEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  // if (token) {
  //     navigate(from, { replace: true });
  // };

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setLoginEmail(data.email);
        toast.success("User Login successfully");
        navigate(from, { replace: true });
        // navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className="h-[600px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-2xl shadow-slate-500">
        <h2 className="text-xl font-semibold text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            {/* <label className="label"><span className="label-text">Forget Password?</span></label> */}
          </div>
          <input
            className="btn btn-accent my-3 w-full max-w-xs"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p>
          New to here!{" "}
          <Link to="/signup" className="text-secondary">
            Create new account
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
