
export const DEFAULT_IMAGE = ".../public/imagenes/imagdefault.jpg"; 


const { DateTime } = require("luxon");
export const now = DateTime.now();
const f = {month: 'long', day: 'numeric', year: 'numeric'};
export const hora = `${now.hour}:${now.minute}`
export const fechaActual = now.setLocale('es').toLocaleString(f);

// const dia = now.day;
// const mes = now.month;
// const año = now.year;
// export const fecha = `${dia}/${mes}/${año}`

