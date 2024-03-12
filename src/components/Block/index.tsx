import "./styles.css";
import { Input } from "../Input";

type Props = {
  title: string,
  color: string
}

export function Block({ title, color }: Props) {

  return (
    <div className="bloco" style={{ backgroundColor: color }}>
      <h1>{title}</h1>
      
      <Input name="Year Input" type="number" dateFormat="Anos"/>
      <Input name="Month Input" type="number" dateFormat="Meses"/>
      <Input name="Days Input" type="number" dateFormat="Dias"/>
    </div>
  )
}
