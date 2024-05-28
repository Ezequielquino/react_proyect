import { Button, Spacer } from "@nextui-org/react";
import PrimaryButton from "../../../../../../../../shared/presentation/components/buttons/Primary_button";
import { IconFileExport, IconSearch } from "@tabler/icons-react";
import InputPrimary from "../../../../../../../../shared/presentation/components/inputs/Input_primary";
import SelectPrimary from "../../../../../../../../shared/presentation/components/inputs/Select_primary";

export default function PartnersFilters() {
    return (
        <div className="mt-5 bg-background flex justify-between p-4 rounded-2xl items-center">
            <div className="flex items-center">
                <div className="flex gap-3">
                <div className="flex-auto w-24">
                        <InputPrimary label="Periodo" />
                    </div>
                    <div className="flex-auto w-48">
                        <SelectPrimary label="Servicio" />
                    </div>

                    <div className="flex-auto w-48">
                        <SelectPrimary label="Cliente" />
                    </div>
                    <div className="flex-auto w-48">
                        <SelectPrimary label="Lider Tecnico" />
                    </div>
                    
                </div>
                <div className="flex ml-4">
                    <PrimaryButton label="Buscar" prefixIcon={<IconSearch size={16} />} />
                    <Spacer x={2} />
                    <PrimaryButton label="Limpiar" isSecondary={true} />
                </div>
            </div>
            <Button
                startContent={<IconFileExport size={16} />}
                variant="bordered"
                className="text-middle_ground"
                radius="sm"
            >
                Exportar
            </Button>
        </div>
    )
}
