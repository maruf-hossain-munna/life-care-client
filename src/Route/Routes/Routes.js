import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Signin from "../../Pages/Login/Signin/Signin";
import SignUp from "../../Pages/Login/Signup/SignUp";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Details from "../../Pages/Services/Details/Details";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://life-care-server.vercel.app/services')
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/addService',
                element: <PrivateRoute> <AddService></AddService> </PrivateRoute>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute> <MyReviews></MyReviews> </PrivateRoute>,
                loader: () => fetch('https://life-care-server.vercel.app/reviews')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://life-care-server.vercel.app/allServices')
            },
            {
                path: '/services/:id',
                element: <Details></Details>   ,
                loader: ({ params }) => fetch(`https://life-care-server.vercel.app/allServices/${params.id}`)

            },
            {
                path: '/signin',
                element: <Signin></Signin>

            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '*',
        element: <div> This page is not found 404 </div>
    }
])

export default router;