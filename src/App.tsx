import "./App.css"
import { calculaReducaoPenal } from "./utils/calculo";
import { Block } from "./components/Block";
import { Button } from "./components/Button";
import { Result } from "./components/Result";
import { useState } from "react";

export function App() {

    const [penaValues, setPenaValues] = useState<number[]>([0, 0, 0])
    const [reducaoValues, setReducaoValues] = useState<number[]>([0, 0, 0])
    // const [aumentoValues, setAumentoValues] = useState<number[]>([0, 0, 0])
    const [resultMessage, setResultMessage] = useState<string>("")
    const [resultType, setResultType] = useState<string>("")

    function handlePenaValues(index: number, value: number) {
        const newValues = [...penaValues]
        newValues[index] = value
        setPenaValues(newValues)
    }

    function handleReducaoValues(index: number, value: number) {
        const newValues = [...reducaoValues]
        newValues[index] = value
        setReducaoValues(newValues)
    }

    // function handleAumentoValues(index: number, value: number) {
    //     const newValues = [...aumentoValues]
    //     newValues[index] = value
    //     setReducaoValues(newValues)
    // }

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()

        const result = calculaReducaoPenal(
            { years: penaValues[0], months: penaValues[1], days: penaValues[2] },
            { years: reducaoValues[0], months: reducaoValues[1], days: reducaoValues[2] }
        );

        result.includes("👺") ? setResultType("error")  : setResultType("")

        setResultMessage(result)
    }

    return (
        <div className="container">
            <div className="div-blocks">

                <Block color="#F3C6C1" title="Pena" values={penaValues} onChange={handlePenaValues} />

                <Block color="#B9BEE0" title="Redução" values={reducaoValues} onChange={handleReducaoValues} />

                {/* <Block color="#B9BEE0" title="Aumento" values={aumentoValues} onChange={handleAumentoValues} /> */}
            </div>

            <div className="div-button">
                <Button title="Calcular" onClick={handleSubmit} />

                {resultMessage && (
                    <Result message={resultMessage} type={resultType}/>
                )}
            </div>
        </div>
    )
}
