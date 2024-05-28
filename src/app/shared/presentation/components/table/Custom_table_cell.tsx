
export default function CustomTableCell(
    props: {
        children: React.ReactNode

    }
) {
    return (
        <div className="flex justify-center py-[6px] text-xs">
            {props.children}
        </div>
    )
}
