/* En base a un username ingresado mostrar todos los posteos de dicho usuario */
/* Endpoint para usuario por username */
/* https://jsonplaceholder.typicode.com/users?username=Bret */
/* Endpoint para posteos por userId */
/* https://jsonplaceholder.typicode.com/posts?userId=1 */

function PrimeraLetraMayuscula(cadena) {
  return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

// llamo al boton
const btnConsultar = document.querySelector('#btnConsultar');
//le agrego un evento click
btnConsultar.addEventListener('click', () => {
    // dentro del evento llamo al input
    const txtNombreUsuario = document.querySelector('#txtNombreUsuario');
    //nos aseguramos que el input comience en mayuscula
    txtNombreUsuario.value = PrimeraLetraMayuscula(txtNombreUsuario.value);

    //Creo solicitud 
    const http1 = new XMLHttpRequest();
    // creo una variable URL 
    const url1 = `https://jsonplaceholder.typicode.com/users?username=${txtNombreUsuario.value}`;
    //Consumo los datos 
    http1.open("GET", url1);
   //LISTO
    http1.onreadystatechange = () => {
        // si el codigo viene y el estado es exitoso
        if (http1.readyState === 4 && http1.status == 200) {
             console.log(JSON.parse(http1.responseText)[0].id); 
            //Consumo lo que trae la solucitud en especifico el id
            const id = JSON.parse(http1.responseText)[0].id;
            //Ahora que tengo el id, creo una solicitud
            const http2 = new XMLHttpRequest();
            // creo una variable URL 
            const url2 = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
              //Consumo los datos 
            http2.open("GET", url2);
            //LISTO
            http2.onreadystatechange = () => {
                // si el codigo viene y el estado es exitoso
                if (http2.readyState === 4 && http2.status == 200) {
                    //Consumo lo que trae la solucitud 
                    console.log(JSON.parse(http2.responseText));
                }
            }
            //enviar
            http2.send()
        }
    };
    //enviar
    http1.send();
});

