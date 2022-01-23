$(document).ready(function() {

    //Función de Homer

    $('#homer').toggle(

        /* 
            Primer click.
            Función que descubre el div
        */
        function(e) {
            $('#homerfun').show("swing");

            e.preventDefault();
        }, // Separamos las dos funciones con una coma

        /* 
            Segundo click.
            Función que oculta el div
            
        */
        function(e) {
            $('#homerfun').hide("linear");
            e.preventDefault();
        }

    );

    //Función de Marge

    $('#marge').toggle(

        /* 
            Primer click.
            Función que descubre el div
        */
        function(e) {
            $('#margefun').show("swing");

            e.preventDefault();
        }, // Separamos las dos funciones con una coma

        /* 
            Segundo click.
            Función que oculta el div
            
        */
        function(e) {
            $('#margefun').hide("linear");
            e.preventDefault();
        }

    );

    //Función de Bart

    $('#bart').toggle(

        /* 
            Primer click.
            Función que descubre el div
        */
        function(e) {
            $('#bartfun').show("swing");

            e.preventDefault();
        }, // Separamos las dos funciones con una coma

        /* 
            Segundo click.
            Función que oculta el div
            
        */
        function(e) {
            $('#bartfun').hide("linear");
            e.preventDefault();
        }

    );


    //Función de Lisa

    $('#lisa').toggle(

        /* 
            Primer click.
            Función que descubre el div
        */
        function(e) {
            $('#lisafun').show("swing");

            e.preventDefault();
        }, // Separamos las dos funciones con una coma

        /* 
            Segundo click.
            Función que oculta el div
            
        */
        function(e) {
            $('#lisafun').hide("linear");
            e.preventDefault();
        }

    );


    //Función de Maggie

    $('#maggie').toggle(

        /* 
            Primer click.
            Función que descubre el div
        */
        function(e) {
            $('#maggiefun').show("swing");

            e.preventDefault();
        }, // Separamos las dos funciones con una coma

        /* 
            Segundo click.
            Función que oculta el div
            
        */
        function(e) {
            $('#maggiefun').hide("linear");
            e.preventDefault();
        }

    );



});