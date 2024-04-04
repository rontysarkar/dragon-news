import { Outlet } from "react-router-dom";

const PublicRoutes = () => {
    return (
        <div className="max-w-7xl mx-auto font-poppins">
            <Outlet />
        </div>
    );
};

export default PublicRoutes;