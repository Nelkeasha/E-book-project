import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpdateBook from "../pages/dashboard/addBook/UpdateBook";
import SubscribePage from "../pages/books/SubscribePage";
import Home from "../pages/home/Home";
import ContactUs from "../pages/contacts/ContactUs";
import AboutUs from "../pages/contacts/AboutUs";
import PrivacyPolicy from "../pages/Service-policy/PrivacyPolicy";
import TermsOfService from "../pages/Service-policy/TermsOfService";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",        
        element: <Home/>,
      },
      {
        path: "/orders",  
        element: <PrivateRoute><OrderPage/></PrivateRoute>
      },
      {
        path: "/about",   
        element: <AboutUs/>,
      },
      {
        path: "/privacy",   
        element: <PrivacyPolicy/>,
      },
      {
        path: "/service",   
        element:<TermsOfService/> ,
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path:"/cart",
        element: <CartPage/>
      },
      {
        path:"/checkout",
        element:<PrivateRoute><CheckoutPage/></PrivateRoute>
      },
      {
        path:"/subscribe",
        element:<PrivateRoute><SubscribePage/></PrivateRoute>
      },
      
      {
        path: "/books/:id",
        element: <SingleBook/>
        
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminLogin/>
  },
  {
    path:"/dashboard",
    element: <AdminRoute>
      <DashboardLayout/>
    </AdminRoute>,
    children:[
      {
        path: "",
        element: <AdminRoute><Dashboard/></AdminRoute>
      },
      {
        path: "add-new-book",
        element: <AdminRoute>
          <AddBook/>
        </AdminRoute>
      },
      {
        path: "edit-book/:id",
        element: <AdminRoute>
          <UpdateBook/>
        </AdminRoute>
      },
      {
        path: "manage-books",
        element: <AdminRoute>
          <ManageBooks/>
        </AdminRoute>
      }
    ]
  }
]);

export default router;
