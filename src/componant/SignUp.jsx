import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, googleLogin, updateUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const [signUpError, setSignUpError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User created successfully");
        const userInfo = {
          displayName: data.name,
          options: data.option,
        };
        updateUser(userInfo)
          .then(() => {
            const email = data.email;
            getToken(email);
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        const name = user.displayName;
        const email = user.email;
        getToken(email);
        saveUser(name, email);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  // save user information
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch(" https://task-final-server.vercel.app/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
        // navigate('/');
      });
  };

  //  Get jwt token
  const getToken = (email) => {
    fetch(` https://task-final-server.vercel.app/jwt?email=${email}`)
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
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-2xl shadow-black">
        <h1 className="text-5xl text-center text-blue-500 font-semibold">
            Sign Up</h1>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
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
                  message: "Password at least 6 characters or longer",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent my-3 w-full max-w-xs"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p>
          Already have an account ! Please{" "}
          <Link to="/login" className="text-secondary font-bold">
            Login
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full max-w-xs"
        >
          CONTINUE WITH GOOGLE
        </button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default SignUp;
