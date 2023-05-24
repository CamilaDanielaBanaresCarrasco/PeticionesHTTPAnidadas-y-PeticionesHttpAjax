import { datos } from "./datos.js";

const buscarHeore = (idHeroe) => {

    const promise = new Promise((resolve, reject) => {

        const heroe = datos.find(heroe => heroe.id === idHeroe);

        if (heroe) {
            resolve(heroe);
        }

        reject(`El código ${idHeroe} no existe`);

    });

    return promise;

}

buscarHeore('5d86371f1efebc31def272e2')
    .then((mensaje) => copnsole.log(mensaje))
    .catch((error) => console.log(error));

/* buscarHeore('5d86371f1efebc31def272e22')
    .then(console.log)
    .catch(console.log); */