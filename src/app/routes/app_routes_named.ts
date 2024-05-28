export class AppRoutesNamed{
    static readonly ROOT = "/";
    static readonly AUTH = "/auth/*";
    static readonly SIGNIN = "sign-in";
    static readonly SIGNUP = "sign-up";
    static readonly DASHBOARD = "/Security/*";
    static readonly LOGIN ="/LOGIN/*"

    //ADMIN SISTEMA
    static readonly ADMIN = "/admin";
    static readonly USERS = "/users";
    static readonly ROLES = "/roles";

    //PERSONAL DATA
    static readonly PARTNERS = "Asignación";
   
}

export class AppRoutesNamedFullPath{
    static readonly SIGNIN = "/auth/sign-in";
    static readonly SIGNUP = "/auth/sign-up";

    //ADMIN SISTEMA
    static readonly ADMIN = "/dashboard/admin";
    static readonly USERS = "/dashboard/users";
    static readonly ROLES = "/dashboard/roles";

    //PERSONAL DATA
    static readonly PARTNERS = "/Security/partners";
   
}