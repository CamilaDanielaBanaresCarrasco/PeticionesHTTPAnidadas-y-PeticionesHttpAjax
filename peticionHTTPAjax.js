/* HTTP */
/* GET - POST - PUT - DELETE */
/* Servirdor Web o Servidor Rest */

/* AJAX */ // xml y javascript asíncrono
/* JQuery con AJAX */
/* API Fetch */
/* Axios */

const http1 = new XMLHttpRequest();
const http2 = new XMLHttpRequest();
const url1 = 'https://jsonplaceholder.typicode.com/users';
const url2 = 'https://jsonplaceholder.typicode.com/posts';
http1.open("GET", url1, false);
http2.open("GET", url2, false);
http1.onreadystatechange = () => {
    if(http1.readyState===4&&http1.status==200){
        console.log(JSON.parse(http1.responseText));
    }
};
http2.onreadystatechange = () => {
    if(http2.readyState==4&&http2.status==200){
        console.log(JSON.parse(http2.responseText));
    }
};
http1.send();
http2.send();
