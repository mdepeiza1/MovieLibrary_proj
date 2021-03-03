(function($){
    function processForm( e ){
        var dict = {
            Title : this["title"].value,
            Genre : this["genre"].value,
            Director: this["director"].value
        };

        /*$.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });*/

      

        e.preventDefault();
    }

    var $movies = $('#movie-list');
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        type: 'GET',
        success: function(movies){
            $.each(movies, function(i, movie){
                $movies.append('<tr><td>' + movie.title + '</td><td>' + movie.genre + '</td><td>' + movie.director + '</td></tr>');
            });
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
    $('#my-form').submit( processForm );
})(jQuery);