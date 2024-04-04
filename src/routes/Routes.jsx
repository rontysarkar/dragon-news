import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import PublicRoutes from "../layout/PublicRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicRoutes/>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);

export default router;