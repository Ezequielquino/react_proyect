import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutesNamed } from "../../../../routes/app_routes_named";
import Login from "../../../login_view/components/login_componen";

export default function AuthRouter() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to={AppRoutesNamed.SIGNIN} />} />
            <Route path="/" element={<Navigate to={AppRoutesNamed.SIGNIN} />} />
            <Route path={AppRoutesNamed.SIGNIN} element={<Login/>} />
            <Route path={AppRoutesNamed.SIGNUP} element={<Login/>} />
        </Routes>
    )
}