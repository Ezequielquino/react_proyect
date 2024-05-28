import { Navigate, Route, HashRouter as Router, Routes } from "react-router-dom";
import { AppRoutesNamed } from "./app_routes_named";
//import RootHandler from "./handlers/Root_handler";
import AuthHandler from "./handlers/auth/Auth_handler";
import DashboardHandler from "./handlers/dashboard/Dashboard_handler";
import PartnersHandler from "./handlers/dashboard/Partners_handler";

export default function AppRouter() {

    return (
        <Router>
            <Routes>
                <Route path={'*'} element={<Navigate to={AppRoutesNamed.ROOT} replace />} />
                <Route path={AppRoutesNamed.ROOT} element={<AuthHandler />} />
                <Route path={AppRoutesNamed.AUTH} element={<AuthHandler />} />
                <Route path={AppRoutesNamed.DASHBOARD} element={<DashboardHandler />} />
                <Route path={AppRoutesNamed.PARTNERS} element={<PartnersHandler />} />
                {/* <Route path={AppRoutesNamed.LOGIN} element={<DashboardHandler />} /> */}
            </Routes>
        </Router>
    )
}