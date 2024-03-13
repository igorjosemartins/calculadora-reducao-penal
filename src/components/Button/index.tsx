import "./styles.css"

type Props = {
    title: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function Button({ title, onClick}: Props) {
    return (
        <button onClick={onClick}>{title}</button>
    )
}