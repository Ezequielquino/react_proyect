import { useEffect, useState } from "react";
import { RouteHandlerState } from "../../shared/domain/router_handler_state";
import { AppRoutesNamed } from "../app_routes_named";
import { Navigate } from "react-router-dom";
import { getAuthState } from "../../features/dashboard/data/repositories/login";

export default function RootHandler() {

   const  [authState, setAuthState] = useState(RouteHandlerState.LOADING);

    useEffect(() => {
        const state = getAuthState();
        setAuthState(state ? RouteHandlerState.MATCH : RouteHandlerState.NOMATCH);
    }, [])

    return (
        (() => {
            switch (authState) {
                case RouteHandlerState.LOADING:
                    return <div>Loading...</div>;
                    case RouteHandlerState.LOGIN:
                    return <Navigate to={AppRoutesNamed.LOGIN} replace={true} />;
                case RouteHandlerState.NOMATCH:
                    return <Navigate to={AppRoutesNamed.AUTH} replace={true} />;
                case RouteHandlerState.MATCH:
                    return <Navigate to={AppRoutesNamed.DASHBOARD} replace={true} />;
                    
            }
        })()
    );
}