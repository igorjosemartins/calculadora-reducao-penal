import "./styles.css";

type Props = {
    message: string,
    type: string
}

export function Result({ message, type }: Props) {

    let color = type == "error" ? "#e65646" : "#f1d2a2"

    return (
        <div className="result" style={{ background: color }}>
            <h3>{message}</h3>
        </div>
    )
}