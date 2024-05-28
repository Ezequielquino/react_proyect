import { useNavigate } from "react-router-dom";
import { AuthService } from "../../../../shared/application/auth_service";
import { AppRoutesNamed } from "../../../../routes/app_routes_named";
import AuthRouter from "./Auth-router";

export default function AuthRootView() {

    const navigate = useNavigate();

    function handleLogin() {
        AuthService.login();
        navigate(AppRoutesNamed.DASHBOARD,
            {
                replace: true
            }
        );
    }

    return (
        <>
            <div>AuthRootView</div>
            <AuthRouter />

            <button onClick={handleLogin}>Hola mundo</button>
        </>
    )
}