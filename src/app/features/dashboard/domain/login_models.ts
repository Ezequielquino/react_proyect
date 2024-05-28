export class RequestLogin{
    user: string;
    password : string;
    
    // role : string;
    // status : string;

    constructor(user: string, password: string,){
        this.user = user;
        this.password = password;
      
    }
}
