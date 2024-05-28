import { Accordion, AccordionItem } from "@nextui-org/react";
import { IconChevronDown } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { MenuItemGroupModel } from "../../../domain/menu_item_group";
import ItemMenuRouter from "./Item_menu_router";


export default function ItemSidebar(
    props: {
        item: MenuItemGroupModel
    }
) {

    const { item } = props;

    const [isExpanded, setIsExpanded] = useState(false);

    let itemClasses = {
        base: "py-0 w-full",
        title: `${isExpanded ? 'font-semibold' : 'text-middle_ground'} text-sm`,
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-12 flex items-center",
        content: "text-small px-2 py-0",
    };

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        const currentPath = window.location.hash;
        console.log(currentPath);
        setIsExpanded(item.items.some(e => e.route === `${currentPath.replace('#', '')}`));
    }, [])

    return (
        <Accordion
            showDivider={false}
            variant="light"
            selectedKeys={isExpanded ? [item.id] : []}
            onSelectionChange={(_) => { handleExpand(); }}
            itemClasses={itemClasses}>
            <AccordionItem
                key={item.id}
                title={item.title}
                isCompact={false}
                startContent={<div className={`ml-1 ${isExpanded ? '' : 'text-middle_ground'}`}>{item.icon}</div>}
                indicator={<div className="text-middle_ground"><IconChevronDown size={16} /></div>}>
                {item.items.map((e) => {
                    return (
                        <ItemMenuRouter key={e.id} item={e} />
                    )
                })}
            </AccordionItem>
        </Accordion>

    )
}
