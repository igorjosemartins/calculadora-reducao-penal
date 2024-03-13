import "./styles.css";

type Props = {
    // name: string,
    type: string,
    dateFormat: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ type, dateFormat, value, onChange }: Props) {
    return (
        <label>
            Digite quantos {dateFormat} : <input type={type} value={value} onChange={onChange}/>
        </label>
    )
}
