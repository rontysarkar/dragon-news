import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PublicRoutes from "../layout/PublicRoutes";
import About from "../Pages/Home/About/About";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import News from "../Pages/Home/News";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoutes />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/news.json')

            },
            {
                path: '/news/:id',
                element: <PrivateRoutes><News /></PrivateRoutes>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
]);

export default router;