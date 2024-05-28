import { Button } from "@nextui-org/react";
//import {  IconMenu2 } from "@tabler/icons-react";
import DetailCardHeader from "./Detail_card_header";


export default function HeaderDashboard() {
    return (
        <div className= " flex items-center justify-between h-full mx-3">
            {/* <Button isIconOnly color="primary" aria-label="Like" size="md" className="">
                <IconMenu2 />
            </Button> */}
            <p></p>
            <div className="flex items-center">
                {/* <div className="hidden items-center mr-3 md:flex">
                    <DetailCardHeader label="Sucursal" value="CENTRAL">
                        <IconBuilding size={20} />
                    </DetailCardHeader>
                    <DetailCardHeader label="Fecha de sistema" value="13/04/2024" >
                        <IconCalendarMonth size={20} />
                    </DetailCardHeader>
                    <DetailCardHeader label="Usuario" value="Arturo Ayala" >
                        <p className="font-bold">AA</p>
                    </DetailCardHeader>
                </div> */}
                <div className="flex md:hidden">
                    <DetailCardHeader label="Gustavo" value="Quino" >
                        <p className="font-bold">AA</p>
                    </DetailCardHeader>
                </div>
                <Button size="sm" radius="full" className="font-bold bg-foreground text-background ">
                    Cerrar sesión
                </Button>
            </div>
        </div>
    )
}
