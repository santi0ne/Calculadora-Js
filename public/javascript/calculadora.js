
/* funcion flecha */
/* objeto document */ 
let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    /* action -> 'submit' */
    /* callback -> evento */
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); /* prevenir el evento por default */

        /* definir variables y asignarles el valor ingresado en las cajas de texto del form */
        let valorPorHora = document.getElementById('valorPorHora').value;
        let interfazHoras = document.getElementById('interfazHoras').value;
        let htmlHoras = document.getElementById('desarrolloHtml').value;
        let jsHoras = document.getElementById('logicJavascript').value;
        let funcHoras = document.getElementById('funcAdicionales').value;
        let testHoras = document.getElementById('testing').value

        let resultado = (valorPorHora * interfazHoras) + (valorPorHora * htmlHoras) + (valorPorHora * jsHoras) + (valorPorHora * funcHoras) + (valorPorHora * testHoras);
        document.getElementById('valorTotal').value = '$'+resultado;
    })
  };

/* invocar funcion flecha */
funcionPredeterminada();
  