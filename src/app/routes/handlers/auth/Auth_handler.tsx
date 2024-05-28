import { useEffect, useState } from "react";
import { RouteHandlerState } from "../../../shared/domain/router_handler_state";
import { Navigate } from "react-router-dom";
import { AppRoutesNamed } from "../../app_routes_named";
//import AuthRootView from "../../../features/authentication/presentation/root/Auth_root_view";
import { getAuthState } from "../../../features/dashboard/data/repositories/login";
import LoginView from "../../../features/login_view/login_view";

export default function AuthHandler() {

    const [authState, setAuthState] = useState(RouteHandlerState.LOADING);

    useEffect(() => {
        const state = getAuthState();
        setAuthState(state ? RouteHandlerState.NOMATCH : RouteHandlerState.MATCH);
    }, [])

    return (
        (() => {
            switch (authState) {
                case RouteHandlerState.LOADING:
                    return <div>Loading...</div>;
                case RouteHandlerState.NOMATCH:
                    return <Navigate to={AppRoutesNamed.DASHBOARD} replace={true} />;
                case RouteHandlerState.MATCH:
                    return <LoginView />;
            }
        })()
    );
}