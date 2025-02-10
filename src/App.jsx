import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout";
import Home from "./pages/Home";
import Cources from "./pages/Cources";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";

// import SessionCheck from "./pages/SessionCheck";


const router = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/courses",
        element: <Cources/>,
      }, 
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/contact",
        element: <ContactUs/>,
      },  
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;