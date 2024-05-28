import { useEffect, useState } from "react";
import { PartnersController, PartnersStore, partnersControllerProvider, partnersStoreProvider } from "./partners_controller";
import PartnersUpperZone from "./components/Partners_upper_zone";
import PartnersFilters from "./components/Partners_filters";
import PartnersTable from "./components/Partners_table";

export default function PartnersView() {
    const [loaderState, setLoaderState] = useState<boolean>(true);
    let controller: PartnersController | null;
    const setController = partnersControllerProvider(state => state.setObject);
    let store: PartnersStore | null;
    const setStore = partnersStoreProvider(state => state.setObject);

    useEffect(() => {

        controller = new PartnersController();
        setController(controller);

        store = new PartnersStore();
        setStore(store);


        const initialize = async () => {
            setLoaderState(true)
            await controller?.initialize();
            setLoaderState(false)
        }
        initialize();

        return () => {
            setController(null);
            setStore(null);
        }
    }, [])


    return (
        <>
            {loaderState ? (
                <p>Loading...</p>
            ) : (
                <div className="flex flex-col mx-5 mt-5">
                    <PartnersUpperZone />
                    <PartnersFilters />
                    <PartnersTable />
                </div>
            )}
        </>
    )
}
