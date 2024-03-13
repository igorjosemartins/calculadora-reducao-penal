import "./styles.css";
import { Input } from "../Input";

type Props = {
    label: string;
    color: string;
    values: number[];
    onChange: (index: number, value: number) => void;
}

export function Block({ label, color, values, onChange }: Props) {
    return (
        <div className={label} style={{ backgroundColor: color}}>
            <h1>{label}</h1>
            <Input
                type="number"
                dateFormat="Anos"
                value={values[0].toString()}
                onChange={e => onChange(0, parseInt(e.target.value))}
            />
            <Input
                type="number"
                dateFormat="Meses"
                value={values[1].toString()}
                onChange={e => onChange(1, parseInt(e.target.value))}
            />
            <Input
                type="number"
                dateFormat="Dias"
                value={values[2].toString()}
                onChange={e => onChange(2, parseInt(e.target.value))}
            />
        </div>
    )
}
