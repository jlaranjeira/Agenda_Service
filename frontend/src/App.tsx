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
import "./styles/global.scss"
<<<<<<< HEAD
import Schedule from "./pages/schedule/index"
import View from "./pages/view/View";
=======
import Schedule from "./pages/schedule/"

>>>>>>> 4156c6b8eaf7aeb590ccfedea73e245ef33d424a

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
          path: "/client/:id",
          element: <Clients />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/schedule/:id",
          element: <Schedule />
<<<<<<< HEAD
        },
        {
          path: "/view/:id",
          element: <View />
        },
=======
        },            
>>>>>>> 4156c6b8eaf7aeb590ccfedea73e245ef33d424a
        
      ]
    },
    
   
    
  ]);

  return <RouterProvider router={router} />;
  

}
export default App;
