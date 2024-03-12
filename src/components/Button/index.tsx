import "./styles.css"

type Props = {
    title: string,
    onClick: () => void
}

export function Button({ title, ...rest }: Props) {
    return (
        <button {...rest}>{title}</button>
    )
}
