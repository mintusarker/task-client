import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center"></Toaster>
    </div>
  );
}

export default App;
