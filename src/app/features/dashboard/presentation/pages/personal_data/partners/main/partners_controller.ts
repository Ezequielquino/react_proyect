import { create } from "zustand";
import { NyxObject, NyxObjectWrapper } from "../../../../../../../shared/application/nyx_object";

export class PartnersController extends NyxObject{

    async initialize() : Promise<void>{
        await partnersStoreProvider.getState().object?.initialize();
    }

}

export class PartnersStore extends NyxObject{

    async initialize() : Promise<void>{

    }

}

export const partnersControllerProvider = create<NyxObjectWrapper<PartnersController>>((set) => ({
    object : null,
    setObject : (object) => set({object})
}));

export const partnersStoreProvider = create<NyxObjectWrapper<PartnersStore>>((set) => ({
    object : null,
    setObject : (object) => set({object})
}));
