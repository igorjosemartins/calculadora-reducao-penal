interface date {
    "years": number,
    "months": number,
    "days": number
}

export function calculaReducaoPenal(pena: date, reducao: date) {

    let years = Math.floor(pena.years - reducao.years);
    let months = Math.floor(pena.months - reducao.months);
    let days = Math.floor(pena.days - reducao.days);

    if (years < 0) {
        return "ta doida veia? a redução é maior que a pena 🤨🤨🤨";
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    if (days < 0) {
        days += 30;
        months--;
    }

    let yearMessage = years === 1 ? "ano" : "anos";
    let monthMessage = months === 1 ? "mês": "meses";
    let dayMessage = days === 1 ? "dia" : "dias";

    if (years === 0 && months === 0) {
        return `Diferença de : ${days} dias`;
    
    } else if (years === 0) {
        return `Diferença de : ${months} ${monthMessage} e ${days} ${dayMessage}`;
    
    } else if (months === 0) {
        return `Diferença de : ${years} ${yearMessage} e ${days} ${dayMessage}`;
    
    } else {
        return `Diferença de : ${years} ${yearMessage} ${months} ${monthMessage} e ${days} ${dayMessage}`;
    }
}