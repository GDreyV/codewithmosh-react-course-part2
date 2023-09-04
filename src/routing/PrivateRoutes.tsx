import useAuth from "./hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";


const PrivateRoutes = () => {
    const { user } = useAuth();
    const location = useLocation();
    console.log(location);
    if (!user) {
        return <Navigate to={`/login?return=${encodeURIComponent(location.pathname)}`} />
    }
	return <Outlet />;
};

export default PrivateRoutes;
