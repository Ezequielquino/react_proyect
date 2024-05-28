import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import CustomTableColumn from "../../../../../../../../shared/presentation/components/table/Custom_table_column";
import CustomTableCell from "../../../../../../../../shared/presentation/components/table/Custom_table_cell";
import { IconDelta, IconEdit,  } from "@tabler/icons-react";

export default function PartnersTable() {
    return (
        <div className="mt-5 bg-background p-5 rounded-2xl">
            <Table removeWrapper={true}>
                <TableHeader>
                    <TableColumn className="bg-background_secondary"> 
                        <CustomTableColumn>
                            Periodo
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Nombre
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Servicio
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Tipo de servicio
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Cliente
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Ingreso
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Costo
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Gasto
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Gerencia
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Acciones
                        </CustomTableColumn>
                    </TableColumn>
                    
                </TableHeader>
                <TableBody>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>
                                        <CustomTableCell>
                                            10197645
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                            Gustavo Quino
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                            Scotiabank
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                            stafin
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                           Scotiabank
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                        12,987.39
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                           4.500
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                        12,987.39
                                      
                                        </CustomTableCell>
                                        
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                        SDM
                                      
                                        </CustomTableCell>
                                        
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                            <div className="relative flex items-center gap-2">
                                                {/* <Tooltip content="Details">
                                                    <span className="text-lg text-green-500 cursor-pointer active:opacity-50">
                                                        <IconEye />
                                                    </span>
                                                </Tooltip> */}
                                                <Tooltip content="Edit user">
                                                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                                        <IconEdit />
                                                    </span>
                                                </Tooltip>
                                                <Tooltip color="danger" content="Delete user">
                                                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                                        <IconDelta />
                                                    </span>
                                                </Tooltip>
                                            </div>
                                        </CustomTableCell>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

<Chip color="success" size="sm" className="bg-green-100 text-primary">Activo</Chip>