interface date {
    "years": number,
    "months": number,
    "days": number
}

export function calculaReducaoPenal(pena: date, reducao: date) {

    const initialDate = (pena.years*365) + (pena.months*30) + pena.days;
    const finalDate = (reducao.years*365) + (reducao.months*30) + reducao.days;

    const result = {
        "years": parseInt(((initialDate - finalDate) / 365).toString().split(".")[0]),
        "months": parseInt(((initialDate - finalDate) / 30).toString().split(".")[0]),
        "days": ((initialDate - finalDate) % 30)
    }

    if (result.months >= 12) {
        result.years += parseInt((result.months/12).toString().split(".")[0])
        result.months = (result.months % 12)
    }

    let yearMessage = result.years === 1 ? "ano" : "anos";
    let monthMessage = result.months === 1 ? "mês": "meses";
    let dayMessage = result.days === 1 ? "dia" : "dias";

    if (result.years === 0 && result.months === 0) {
        return `Diferença de : ${result.days} dias`;
    
    } else if (result.years === 0) {
        return `Diferença de : ${result.months} ${monthMessage} e ${result.days} ${dayMessage}`;
    
    } else if (result.months === 0) {
        return `Diferença de : ${result.years} ${yearMessage} e ${result.days} ${dayMessage}`
    
    } else {
        return `Diferença de : ${result.years} ${yearMessage} ${result.months} ${monthMessage} e ${result.days} ${dayMessage}`;
    }
}