// import { useEffect, useState } from "react";
// import { RouteHandlerState } from "../../../shared/domain/router_handler_state";
// import { AppRoutesNamed } from "../../app_routes_named";
// import { Navigate } from "react-router-dom";
// import { AuthService } from "../../../shared/application/auth_service";
// import DashboardRootView from "../../../features/dashboard/presentation/root/Dashboard_root_view";
// import LoginView from "../../../features/login_view/login_view";

// export default function DashboardHandler() {

//     const  [authState, setAuthState] = useState(RouteHandlerState.LOADING);

//     useEffect(() => {
//         const state = AuthService.getAuthState();
//         setAuthState(state ? RouteHandlerState.MATCH : RouteHandlerState.NOMATCH);
//     }, [])

//     return (
//         (() => {
//             switch (authState) {
//                 case RouteHandlerState.LOADING:
//                     return <div>Loading...</div>;
//                 case RouteHandlerState.NOMATCH:
//                     return <Navigate to={AppRoutesNamed.AUTH} replace={true} />;
//                 case RouteHandlerState.MATCH:
                    
//                     return <DashboardRootView />

//                     case RouteHandlerState.LOGIN:
                    
//                     return <LoginView />
//             }
//         })()
//     );
// }
import { useEffect, useState } from "react";
import { RouteHandlerState } from "../../../shared/domain/router_handler_state";
import { AppRoutesNamed } from "../../app_routes_named";
import { Navigate } from "react-router-dom";
import DashboardRootView from "../../../features/dashboard/presentation/root/Dashboard_root_view";
import { AuthService, getAuthState } from "../../../features/dashboard/data/repositories/login";
// import LoginView from "../../../features/login_view/login_view";
// import PartnersView from "../../../features/dashboard/presentation/pages/personal_data/partners/main/Partners_view";

export default function DashboardHandler() {
    const [authState, setAuthState] = useState(RouteHandlerState.LOADING);

    useEffect(() => {
        const state = getAuthState();
        setAuthState(state ? RouteHandlerState.MATCH : RouteHandlerState.NOMATCH);
    }, []);

    return (
        (() => {
            switch (authState) {
                case RouteHandlerState.LOADING:
                    return <div>Loading...</div>;
                case RouteHandlerState.NOMATCH:
                    return <Navigate to={AppRoutesNamed.AUTH} replace />;
                case RouteHandlerState.MATCH:
                    return <DashboardRootView />;
                default:
                    return <Navigate to={AppRoutesNamed.AUTH} replace />;
            }
        })()
    );
}