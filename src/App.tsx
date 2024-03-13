import "./App.css"
import { calculaReducaoPenal } from "./calculo";
import { Block } from "./components/Block";
import { Button } from "./components/Button";
import { Result } from "./components/Result";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function App() {

    const [penaValues, setPenaValues] = useState<number[]>([0, 0, 0])
    const [reducaoValues, setReducaoValues] = useState<number[]>([0, 0, 0])
    const [resultMessage, setResultMessage] = useState<string>("")

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

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()

        console.log(penaValues, reducaoValues)

        if (penaValues.includes(NaN) || reducaoValues.includes(NaN)) {
            return toast.error("Todos os campos devem ser números válidos", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "colored",
            })
        }

        const result = calculaReducaoPenal(
            { years: penaValues[0], months: penaValues[1], days: penaValues[2] },
            { years: reducaoValues[0], months: reducaoValues[1], days: reducaoValues[2] }
        );

        setResultMessage(result)
    }

    return (
        <div className="container">
            <div className="div-blocks">

                <Block color="#F3C6C1" title="Pena" values={penaValues} onChange={handlePenaValues} />

                <Block color="#B9BEE0" title="Redução" values={reducaoValues} onChange={handleReducaoValues} />
            </div>

            <div className="div-button">
                <Button title="Calcular" onClick={handleSubmit} />

                {resultMessage && (
                    <Result message={resultMessage} />
                )}
            </div>
            <ToastContainer />
        </div>
    )
}
