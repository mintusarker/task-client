import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../componant/home/Home";
import Login from "../componant/Login";
import SignUp from "../componant/SignUp";
import AddProduct from "../dashboard/AddProduct";
import Users from "../dashboard/Users";
import MyProducts from "../dashboard/MyProducts";
import UpdateProduct from "../dashboard/UpdateProduct";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";

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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
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
        path: "/dashboard/update-product/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`https://task-final-server.vercel.app/products/${params?.id}`),
      },
    ],
  },
]);

export default router;
