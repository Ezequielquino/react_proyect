import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutesNamed } from "../../../../routes/app_routes_named";
import PartnersHandler from "../../../../routes/handlers/dashboard/Partners_handler";

export default function DashboardRouter() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to={AppRoutesNamed.PARTNERS} />} />
            <Route path="/" element={<Navigate to={AppRoutesNamed.PARTNERS} />} />

            {/* ADMIN SISTEMA */}
            <Route path={AppRoutesNamed.ADMIN} element={<h1>Administración</h1>} />
            <Route path={AppRoutesNamed.USERS} element={<h1>Usuarios</h1>} />
            <Route path={AppRoutesNamed.ROLES} element={<h1>Roles</h1>} />

            {/* PERSONAL DATA */}
            <Route path={AppRoutesNamed.PARTNERS} element={<PartnersHandler />} />
            {/* <Route path={AppRoutesNamed.CONTRIBUTIONS} element={<h1>Aportes</h1>} />
            <Route path={AppRoutesNamed.SOLIDARITY} element={<h1>Solidaridad</h1>} />
            <Route path={AppRoutesNamed.SUBSIDIOS} element={<h1>Subsidios</h1>} /> */}
        </Routes>
    )
}