import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Clients from "./pages/Clients/Clients";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet, 
} from "react-router-dom";
import Login from "./pages/login/Login_old";
import "./styles/global.scss"

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
    

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/clients",
          element: <Clients />
        },
        {
          path: "/services",
          element: <Services />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
  ]);

  return <RouterProvider router={router} />;
  
}

export default App;
