interface date {
    "years": number,
    "months": number,
    "days": number
}

export function calculaReducaoPenal(pena: date, reducao: date) {

    const penaValues = Object.values(pena);
    const reducaoValues = Object.values(reducao);

    if (penaValues.includes(NaN) || reducaoValues.includes(NaN)) {
        return "preenche os campos direito momoziiiiiii 👺👺👺💀💀💀";
    }

    const penaIsEmpty = penaValues.every((value) => value == 0);
    const reducaoIsEmpty = reducaoValues.every((value) => value == 0);

    if (penaIsEmpty && reducaoIsEmpty) {
        return "ta tudo zero momoziiiiiii 👺👺👺💀💀💀";
    
    } else if (penaIsEmpty) {
        return "bota número na pena veia 🤨🤨🤨";

    } else if (reducaoIsEmpty) {
        return "bota número na redução veia 🤨🤨🤨";
    }

    let years = Math.floor(pena.years - reducao.years);
    let months = Math.floor(pena.months - reducao.months);
    let days = Math.floor(pena.days - reducao.days);

    if (years < 0) {
        return "ta doida veia? a redução é maior que a pena 🤨🤨🤨";
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        days += 30;
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