import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import LoginLayout from "../Auth/AuthLayout";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/HomePage/Home";
import Register from "../Auth/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        loader: () => fetch('http://localhost:5000/items'),
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;