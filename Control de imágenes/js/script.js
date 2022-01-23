$(document).ready(function() {

    //Variable de número de imágenes     

    var numImgs = 0;

    $("#insertar").click(function(event) {

        //Evento para que no se repita la misma imagen siempre

        var cambioImg = event.timeStamp;

        //Celda con imagen aleatoria

        let td = $("<td><img src='https://loremflickr.com/200/200?random+" + cambioImg + "'></td>");

        //Cada 7 imágenes en una fila, agregamos una, si no, añadimos solo el td con su imagen a la última fila

        if (numImgs == 0 || numImgs % 7 == 0) {

            $("table").append("<tr></tr>"); //Se añade una fila
            $("table tr").last().append(td); //Se añade el td a la última fila
            $("table tr td").css("display", "none"); //Se oculta el display del último td para realizar efecto después
            $("table tr td").fadeIn(500); //Efecto fadeIn del último td para mostrarlo

        } else {

            $("table tr").last().append(td); //Se añade el td a la última fila
            $("table tr td").css("display", "none"); //Se oculta el display del último td para realizar efecto después
            $("table tr td").fadeIn(500); //Efecto fadeIn del último td para mostrarlo


        }

        //Sumamos 1 al contador de imágenes

        numImgs++;
    });


    //Función para eliminar imágenes

    $("#eliminar").click(function(event) {

        //Si al eliminar hay 7 imágenes en una fila, eliminamos la última, si no, eliminamos solo el td con su imagen

        if (numImgs % 7 == 0) {

            $("table tr td").last().remove(); //Elimina el último td
            $("table tr").last().remove(); //Elimina la última fila


        } else {

            $("table tr td").last().remove(); //Elimina el último td


        }

        //Restamos 1 al contador de imágenes

        numImgs--;

    });
});