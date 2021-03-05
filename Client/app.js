(function($){
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
})(jQuery);


(function($){
    $('#add').on('click',function(){
        var dict = {
        	title : $('#title').val(),
        genre : $('#genre').val(),
        director: $('#director').val()
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( movie, textStatus, jQxhr ){
                $('#response pre').html( '</tr><td>' + movie.movieId + '</td><td>' + movie.genre + '</td><td>' + movie.director + '</td></tr>' );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    });
})(jQuery);


(function($){    
$('#update').on('click',function(){
    let dict = {
        movieId : parseInt($('#movieId').val()),
        title : $('#title').val(),
        genre : $('#genre').val(),
        director: $('#director').val()
    };
    $.ajax({
        url: 'https://localhost:44325/api/movie',
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(dict),
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

})(jQuery);

(function($){
     $('#details').on('click',function(e){
         var dict = {
             movieId : parseInt($('#movieId').val())
         };
 
         $.ajax({
            url: 'https://localhost:44325/api/movie/'+  parseInt($('#movieId').val()),
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: function(movie){
                alert('Title: ' + movie.title + ' Genre: ' + movie.genre + ' Director: ' + movie.director);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
        e.preventDefault();
     });
 })(jQuery);

 (function($){
    $('#delete').on('click',function(){
        let dict = {
            movieId : parseInt($('#movieId').val())
        }
        $.ajax({
            url: 'https://localhost:44325/api/movie/'+ parseInt($('#movieId').val()),
            type: 'DELETE',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function(data, textStatus, jQxhr ){
                $movies.remove( data );
                console.log(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                alert('error');
                console.log( errorThrown );
            }
        });
    });
    })(jQuery);