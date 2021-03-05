(function($){
    function processForm( e ){
        var dict = {
            MovieID : this["movieId"].value,
            Title : this["title"].value,
            Genre : this["genre"].value,
            Director: this["director"].value
        };
        e.preventDefault();
    }


    var $movies = $('#movie-list');
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        type: 'GET',
        success: function(movies){
            $.each(movies, function(i, movie){
                $movies.append('<tr id=movie'+i+'><td>'+ movie.movieId + '</td><td>' + movie.title + '</td><td>' + movie.genre + '</td><td>' + movie.director + '</td></tr>');
            });
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });

    $('#my-form').submit( processForm );
})(jQuery);


(function($){
    $('#add').on('click',function(e){
        var dict = {
        	title : $('#title').val(),
        genre : $('#genre').val(),
        director: $('#director').val()
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( movie, textStatus, jQxhr ){
                $('#response pre').html( '</tr><td>' + movie.movieId + '</td><td>' + movie.genre + '</td><td>' + movie.director + '</td></tr>' );
                location.reload();
            },
            error: function( jqXhr, textStatus, errorThrown ){
                alert('Please refresh, ADD');
                console.log( errorThrown );
            }
        });
        e.preventDefault();
    });
})(jQuery);


(function($){    
$('#update').on('click',function(e){
    let dict = {
        movieId : parseInt($('#movieId').val()),
        title : $('#title').val(),
        genre : $('#genre').val(),
        director: $('#director').val()
    };
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        type: 'PUT',
        
        contentType: 'application/json',
        data: JSON.stringify(dict),
        success: function(data, textStatus, jQxhr ){
            $('#response pre').html( data );
            location.reload();
            console.log(data);
        },
        error: function( jqXhr, textStatus, errorThrown ){
            alert('Please refresh, PUT');
            console.log( errorThrown );
        }
    });
    e.preventDefault();
});

})(jQuery);

(function($){
     $('#details').on('click',function(e){ 
         $.ajax({
            url: 'https://localhost:44325/api/movie/'+  parseInt($('#movieId').val()),
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: function(movie){
                alert('Title: ' + movie.title + ' Genre: ' + movie.genre + ' Director: ' + movie.director);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                alert('Please refresh, DETAILS');
                console.log( errorThrown );
            }
        });
        e.preventDefault();
     });
 })(jQuery);

 (function($){
    $('#delete').on('click',function(e){
        let dict = {
            movieId : parseInt($('#movieId').val())
        }
        $.ajax({
            url: 'https://localhost:44325/api/movie/'+ parseInt($('#movieId').val()),
            type: 'DELETE',
            
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function(data, textStatus, jQxhr ){
                $('#response pre').remove( data );
                location.reload();
                console.log(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                alert('Please refresh, DELETE');
                console.log( errorThrown );
            }
        });
        e.preventDefault();
    });
    })(jQuery);