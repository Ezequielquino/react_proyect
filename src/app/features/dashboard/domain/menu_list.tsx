import { IconUser} from "@tabler/icons-react";
import { MenuItemGroupModel, MenuItemRouterModel } from "./menu_item_group";
import { AppRoutesNamedFullPath } from "../../../routes/app_routes_named";

export const menuList: MenuItemGroupModel[] = [
  
    new MenuItemGroupModel(
        "dp",
        "Sistem Valtx",
        <IconUser />,
        [
            new MenuItemRouterModel("hola mundo", "Asignaciones", AppRoutesNamedFullPath.PARTNERS),

        ]
    ),
   
];