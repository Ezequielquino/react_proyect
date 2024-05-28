import { NavLink } from "react-router-dom"
import { MenuItemRouterModel } from "../../../domain/menu_item_group"
import { useState } from "react";

export default function ItemMenuRouter(
    props: {
        item: MenuItemRouterModel
    }
) {

    const { item } = props;
    const [selected, setSelected] = useState(false);

    return (
        <div className="text-middle_ground text-sm hover:bg-default-100 rounded-lg cursor-pointer flex items-center">
            <NavLink
                to={item.route}
                className={({ isActive }) => {
                    setSelected(isActive);
                    return isActive ? "w-full h-full flex items-center text-primary font-semibold pl-10 py-2" : "w-full h-full flex items-center pl-10 py-2";

                }}>
                {item.title}
            </NavLink>
            {
                selected
                    ? <div className="text-transparent bg-primary h-full w-[6px] rounded-lg mr-2">
                        |
                    </div>
                    : <div></div>
            }
        </div>
    )
}
