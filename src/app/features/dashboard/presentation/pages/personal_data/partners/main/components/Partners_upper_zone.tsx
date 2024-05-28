import { Button, Tooltip } from "@nextui-org/react";
import { IconPlus } from "@tabler/icons-react";

export default function PartnersUpperZone() {
    return (
        <div className="flex justify-between items-center">
            <p className="font-bold text-2xl">Asignaciones</p>
            <Tooltip content="Registrar socio">
                <Button isIconOnly>
                    <IconPlus />
                </Button>
            </Tooltip>
        </div>
    )
}
