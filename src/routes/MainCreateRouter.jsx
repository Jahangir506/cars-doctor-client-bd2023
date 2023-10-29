import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layouts/MainRoot";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUP/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRotuer from "./PrivateRouter";


const MainCreateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainRoot></MainRoot>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRotuer><Bookings></Bookings></PrivateRotuer>
            }
        ]
    }
])

export default MainCreateRouter;