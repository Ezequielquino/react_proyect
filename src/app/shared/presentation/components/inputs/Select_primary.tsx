import { Select, SelectItem } from "@nextui-org/react";

const animals = [
    { label: "Cat", value: "cat", description: "The second most popular pet in the world" },
    { label: "Dog", value: "dog", description: "The most popular pet in the world" },
    { label: "Elephant", value: "elephant", description: "The largest land animal" },
    { label: "Lion", value: "lion", description: "The king of the jungle" },
    { label: "Tiger", value: "tiger", description: "The largest cat species" },
    { label: "Giraffe", value: "giraffe", description: "The tallest land animal" },]

export default function SelectPrimary(
    props: {
        label: string
    }
) {
    return (
        <Select
            label={props.label}
            size="sm"
            classNames={
                {
                    trigger: "bg-background_secondary rounded-lg",
                    value: "border-none text-foreground font-semibold",
                    label: "text-middle_ground"
                }
            }
        >
            {animals.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                </SelectItem>
            ))}
        </Select>
    )
}
