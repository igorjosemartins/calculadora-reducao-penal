import "./styles.css";

type Props = {
    message: string
}

export function Result({ message }: Props) {
    return (
        <div className="result">
            <h3>{message}</h3>
        </div>
    )
}