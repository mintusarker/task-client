import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../componant/home/Home";
import Login from "../componant/Login";
import SignUp from "../componant/SignUp";
import AddProduct from "../dashboard/AddProduct";
import MyProducts from "../dashboard/MyProducts";
import UpdateProduct from "../dashboard/UpdateProduct";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../dashboard/AllUsers";
import AllProductList from "../dashboard/AllProductList";
import DashBoardHome from "../dashboard/DashBoardHome";
import Shop from "../Shop/Shop";

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
      {
        path: "/shop",
        element: <Shop></Shop>,
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
        path: '/dashboard',
        element: <DashBoardHome></DashBoardHome>
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/my-products",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/all-products",
        element: <AllProductList></AllProductList>
      },
      {
        path: "/dashboard/update-product/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params?.id}`),
      },
    ],
  },
]);

export default router;
