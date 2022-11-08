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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/myReviews',
                element: <MyReviews></MyReviews>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/allServices')
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/allServices/${params.id}`)

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