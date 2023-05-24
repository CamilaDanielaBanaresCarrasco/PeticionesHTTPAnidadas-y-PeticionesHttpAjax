import { datos } from "./datos.js";

/**
 * 
 * @param {string} idHeroe 
 * @param {(heroe: {}) => void} callback 
 */
export const buscarHeroe = (idHeroe, callback) => {

    const heroe = datos.find(heroe => heroe.id === idHeroe);

    if(!heroe){
        console.log(`El id ${idHeroe} no existe`);
        return;
    }

    callback(heroe);

}

const mostrarConsola =  (heroe) => {
    console.log(heroe.name);
}

/* const mostrarAlert = (heroe) => {
    alert(heroe.name);
} */

buscarHeroe('5d86371fd55e2e2a30fe1ccb2', mostrarConsola);

/* buscarHeroe('5d86371f25a058e5b1c8a65e', mostrarAlert); */

