import { RequestLogin } from "../../domain/login_models";


export type ResponseUsersDto = {

    user?: string;
    password?: string;
    results?: Result[];
}

export type Result = {
    user?: string;
    password?: string;
}

export function toUsersModel(response: ResponseUsersDto): RequestLogin[] {
    return response.results?.map((item: Result) => {
        return new RequestLogin(
            item.user ?? "",
            item.password ?? "",

        );
    }) ?? [];
}