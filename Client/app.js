(function($){
    /*function processForm( e ){
        var dict = {
            Title : this["title"].value,
            Genre : this["genre"].value,
            Director: this["director"].value
        };*/

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

      
/*
        e.preventDefault();
    }*/

    var $movies = $('#movie-list');
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        type: 'GET',
        success: function(movies){
            $.each(movies, function(i, movie){
                $movies.append('<tr><td>'+ movie.movieId + '</td><td>' + movie.title + '</td><td>' + movie.genre + '</td><td>' + movie.director + '</td></tr>');
            });
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
    

    $('#update').on('click',function(){
        /*var movie = {
            Title : $('#title'),
            Genre : $('#genre'),
            Director: $('#director')
        };*/

        /*
        var dict = {
           movieId : $('#my-form').movieId.value,
            Title :  $('#my-form').title.value,
            Genre :  $('#my-form').genre.value,
            Director: $('#my-form').director.value
        };*/

        $.ajax({
            url: 'https://localhost:44325/api/movie', //$('#movieId').val()
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                //movieId : $('#movieId').val(),
                title : $('#title').val(),
            genre : $('#genre').val(),
            director: $('#director').val()
        }),
        //contentType: 'application/json',
        //data: JSON.stringify(dict),
            success: function(data, textStatus, jQxhr ){
                $('#response pre').html( data );
                console.log(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                alert('error');
                console.log( errorThrown );
            }
        });

    });


    $('#delete').on('click',function(){
        /*var movie = {
            Title : $('#title'),
            Genre : $('#genre'),
            Director: $('#director')
        };*/

        /*
        var dict = {
           movieId : $('#my-form').movieId.value,
            Title :  $('#my-form').title.value,
            Genre :  $('#my-form').genre.value,
            Director: $('#my-form').director.value
        };*/

        $.ajax({
            url: 'https://localhost:44325/api/movie', //$('#movieId').val()
            type: 'DELETE',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                movieId : $('#movieId').val(),
        }),
        //contentType: 'application/json',
        //data: JSON.stringify(dict),
            success: function(data, textStatus, jQxhr ){
                $('#response pre').html( data );
                console.log(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                alert('error');
                console.log( errorThrown );
            }
        });

    });



    $('#list').on('click',function(){

    });
    //$('#my-form').submit( processForm );
})(jQuery);