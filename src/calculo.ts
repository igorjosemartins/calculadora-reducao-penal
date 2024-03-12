interface date {
    "years": number,
    "months": number,
    "days": number
}

export function calculaReducaoPenal(pena: date, reducao: date) {

    const initialDate = (pena.years*365) + (pena.months*30) + pena.days;

    const finalDate = (reducao.years*365) + (reducao.months*30) + reducao.days;

    const result = {
        "years": ((initialDate - finalDate) / 365).toString().split(".")[0],
        "months": ((initialDate - finalDate) / 30).toString().split(".")[0],
        "days": ((initialDate - finalDate) % 30).toString()
    }

    let yearMessage = result.years === "1" ? "ano" : "anos";
    let monthMessage = result.months === "1" ? "mês": "meses";

    if (result.months === "0") {
        return `Diferença de : ${result.days} dias`;
    
    } else if (result.years === "0") {
        return `Diferença de : ${result.months} ${monthMessage} e ${result.days} dias`;
    
    } else {
        return `Diferença de : ${result.years} ${yearMessage} ${result.months} ${monthMessage} e ${result.days} dias`;
    }
}