import React, { useEffect, useState } from "react";
import { LoginController, LoginStore, loginControllerProvider, loginStoreProvider } from "./login_controller";
import Login from "./components/login_componen";
import 'reflect-metadata'; // Importa reflect-metadata aquí también si es necesario

const LoginView: React.FC = () => {
    
    const [loaderState, setLoaderState] = useState<boolean>(true);
    let controller: LoginController | null = null;
    let store: LoginStore | null = null;
    const setController = loginControllerProvider(state => state.setObject);
    const setStore = loginStoreProvider(state => state.setObject);

    useEffect(() => {
        controller = new LoginController();
        setController(controller);

        store = new LoginStore();
        setStore(store);

        const initialize = async () => {
            setLoaderState(true);
            if (controller) {
                await controller.initialize();
            }
            setLoaderState(false);
        };

        initialize();

        return () => {
            setController(null);
            setStore(null);
        };
    }, [setController, setStore]);

    return (
        <>
            {loaderState ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <Login />
                </div>
            )}
        </>
    );
};

export default LoginView;