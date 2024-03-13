import "./styles.css";
import { Input } from "../Input";

type Props = {
    title: string;
    color: string;
    values: number[];
    onChange: (index: number, value: number) => void;
}

export function Block({ title, color, values, onChange }: Props) {
    return (
        <div className="block" style={{ backgroundColor: color }}>
            <h1 className="block-title">{title}</h1>
            
                <Input
                    dateFormat="Anos"
                    type="number"
                    value={values[0]}
                    onChange={e => onChange(0, parseInt(e.target.value))}
                />

                <Input
                    dateFormat="Meses"
                    type="number"
                    value={values[1]}
                    onChange={e => onChange(1, parseInt(e.target.value))}
                />

                <Input
                    dateFormat="Dias"
                    type="number"
                    value={values[2]}
                    onChange={e => onChange(2, parseInt(e.target.value))}
                />
        </div>
    )
}
