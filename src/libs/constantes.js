
export const DEFAULT_IMAGE = '/imagenes/default-image.png'; 


const { DateTime } = require("luxon");
export const now = DateTime.now();
const f = {month: 'long', day: 'numeric', year: 'numeric'};
export const hora =now.toFormat("hh:mm")

export const fechaActual = now.setLocale('es').toLocaleString(f);

// const dia = now.day;
// const mes = now.month;
// const año = now.year;
// export const fecha = `${dia}/${mes}/${año}`

