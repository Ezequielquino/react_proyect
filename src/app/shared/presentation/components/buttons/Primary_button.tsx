import { Button } from "@nextui-org/react";

export default function PrimaryButton(
    props: {
        label: string,
        onTap?: () => void,
        prefixIcon?: JSX.Element,
        isSecondary?: boolean

    }
) {
    let isSecondary = props.isSecondary || false;
    return (
        <Button
            radius="sm"
            onClick={props.onTap}
            variant="shadow"
            className={`px-6 ${isSecondary ? 'bg-button_secondary text-foreground' : 'bg-primary text-primary-foreground'}`}
            startContent={props.prefixIcon}>
            {props.label}
        </Button>
    )
}
