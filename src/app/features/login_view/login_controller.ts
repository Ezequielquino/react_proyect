
import { create } from "zustand";
import { NyxObject, NyxObjectWrapper }  from "../../shared/application/nyx_object";
import { AuthService, ResponseDataWrapper } from "../dashboard/data/repositories/login";
//import { NyxObject, NyxObjectWrapper } from "../../../../../../../shared/application/nyx_object";

export class LoginController extends NyxObject{

    async initialize() : Promise<void>{
        await loginStoreProvider.getState().object?.initialize();
    }

    async auth(user : string, password: string) : Promise<ResponseDataWrapper>{
        const authService = new AuthService();
        console.log(authService);
        const response = await authService.login({ user: user, password: password });
      
      if (response.success === true) {
        const data = response.data;
        localStorage.setItem('token', data?.accessToken ?? "");
        localStorage.setItem("authState", "true");
        console.log("aqui ocurre algo response",data)
        console.log("aqui ocurre algo local storage",localStorage)
        console.log("aqui ocurre algo local storage",data)

      }
      return response;
    }

}

export class LoginStore extends NyxObject{

    async initialize() : Promise<void>{

    }



}

export const loginControllerProvider = create<NyxObjectWrapper<LoginController>>((set) => ({
    object : null,
    setObject : (object) => set({object})
}));

export const loginStoreProvider = create<NyxObjectWrapper<LoginStore>>((set) => ({
    object : null,
    setObject : (object) => set({object})
}));


