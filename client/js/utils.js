export function monefy(num) {
    if (!num) return '';
    const numStr = String(num);
    return numStr;
}

export function getRandomColor() {
    return `hsl(${360 * Math.random()}, ${25 + 70 * Math.random()}%, ${
        65 + 10 * Math.random()
    }%)`;
}

export function getMonth(dateString) {
    const monthNames = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    const date = new Date(dateString);

    return monthNames[date.getMonth()];
}

export function formatDate(date) {
    
    const fecha = new Date (date);
    const fecha2 = fecha.getFullYear()+'-' + (fecha.getMonth()+1) + '-'+(fecha.getDate()+ 1);
    console.log(fecha2);
    return fecha2;
    

    
    
}


