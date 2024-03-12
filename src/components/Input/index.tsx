import "./styles.css";

type Props = {
    name: string,
    type: string,
    dateFormat: string,
}

export function Input({ name, type, dateFormat }: Props) {

    return (
        <label>
            Digite quantos {dateFormat} : <input name={name} type={type} />
        </label>
    )
}
