import "./styles.css"

type Props = {
    title: string,
    onSubmit: () => void
}

export function Button({ title, onSubmit }: Props) {
    return (
        <button onClick={onSubmit}>{title}</button>
    )
}