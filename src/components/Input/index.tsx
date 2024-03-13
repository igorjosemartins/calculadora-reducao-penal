import "./styles.css";

type Props = {
    // name: string,
    type: string,
    dateFormat: string,
    value: number,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ type, dateFormat, value, onChange }: Props) {
    return (
        <table className="input-block">
            <tbody>
                <tr>
                    <td>
                        <label>Digite quantos {dateFormat} :</label>
                    </td>
                    <td>
                        <input type={type} value={value} onChange={onChange} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
