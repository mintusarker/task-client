import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../componant/home/Home";
import Login from "../componant/Login";
import SignUp from "../componant/SignUp";
import Dashboard from "../dashboard/Dashboard";
import AddProduct from "../dashboard/AddProduct";
import Users from "../dashboard/Users";
import MyProducts from "../dashboard/MyProducts";
import UpdateProduct from "../dashboard/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign_up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/all-users",
        element: <Users></Users>,
      },
      {
        path: "/dashboard/my-products",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/update-product",
        element: <UpdateProduct></UpdateProduct>,
      },
    ],
  },
]);

export default router;
