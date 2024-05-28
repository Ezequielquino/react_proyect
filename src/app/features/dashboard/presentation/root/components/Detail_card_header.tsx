import { Button } from "@nextui-org/react";

export default function DetailCardHeader(props: {
    label: string,
    value: string,
    children: JSX.Element
}) {
    return (
        <div className="flex items-center mr-5">
            <Button isIconOnly color="primary" aria-label="Like" radius="full" size="sm" className="">
                {props.children}
            </Button>
            <div className="ml-2 flex flex-col justify-center">
                <p className="text-xs text-middle_ground">{props.label}</p>
                <p className="text-xs font-bold">{props.value}</p>
            </div>
        </div>
    )
}
