import './sidebar.css'
import ItemSidebar from "./Item_sidebar";
import { MenuItemGroupModel } from '../../../domain/menu_item_group';
import { menuList } from '../../../domain/menu_list';

export default function SidebarDashboard() {

    const list: MenuItemGroupModel[] = menuList;

    return (
        <div className="flex flex-col items-center w-full h-[100vh]">
            <img src="/img/logo_scotia.svg" alt="logo" className="h-[150px]" />
            <hr className="w-[150px] mt-3 mb-3" />
            <div className="scrollable w-full">
                {list.map((item) => {
                    return (
                        <ItemSidebar key={item.id} item={item} />
                    )
                })}
            </div>
        </div>


    )
}
