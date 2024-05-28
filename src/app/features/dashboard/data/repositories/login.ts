// import { injectable } from "inversify";
// import { AxiosClient,AxiosPostParams  } from "../../../../../core/network/axios_client";
// import { RequestLogin } from "../../domain/login_models";
// //import { toUsersModel } from "../dto/responde_login_dto";

// export abstract class IGeneralDataRepository {
//     abstract getGeneralData(): Promise<RequestLogin[]>;
// }

// @injectable()
// export class AuthService {
//     private axiosClient: AxiosClient = AxiosClient.instance;
  
//     async login(data: RequestLogin): Promise<any> {
//       const params: AxiosPostParams = {
//         url: '/api/app/account/login',
//         body: data,
//       };
  
//       try {
//         const response = await this.axiosClient.post(params);
//         return response.data;
//       } catch (error) {
//         throw new Error('Error during login');
//       }
//     }
//   }
import { injectable } from "inversify";
import { AxiosClient, AxiosPostParams } from "../../../../../core/network/axios_client";
import { RequestLogin } from "../../domain/login_models";

export abstract class IGeneralDataRepository {
    abstract getGeneralData(): Promise<RequestLogin[]>;
}

@injectable()
export class AuthService {
    private axiosClient: AxiosClient = AxiosClient.instance;


    async login(data: RequestLogin) : Promise<ResponseDataWrapper> {
        const params: AxiosPostParams = {
            url: '/api/app/account/login',
            body: data,
            
        };
        
        try {
            const response = await this.axiosClient.post(params);
            console.log("aqui la respues",response);
            if(response.status === 200) return {
                success: true,
                data : response.data,
                message : "Correcto"
            }
            throw new Error("");   
            
        } catch (error) {
            return {
                success: false,
                data : null,
                message : "Error durante la autencticacion"
            }
            
        }
    
    }
}

export interface ResponseDataWrapper{
    success: boolean,
    data: ResponseLoginDto | null,
    message: string

}

export interface ResponseLoginDto{
    accessToken : string
}


export function getAuthState(){
    return localStorage.getItem("authState") === "true";
}