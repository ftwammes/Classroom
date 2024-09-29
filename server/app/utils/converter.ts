const dateToDayOfWeek = (day: number, month: number, year: number) => {
    const days = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo'];
    const d = new Date(day, month, year);
    return days[d.getDay()];
}

export {dateToDayOfWeek};