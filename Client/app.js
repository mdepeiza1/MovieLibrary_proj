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
                alert('error');
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
            alert('Movie ID needs to be entered');
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
                alert('Movie ID needs to be entered.');
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
                alert('Movie ID needs to be entered');
                console.log( errorThrown );
            }
        });
        e.preventDefault();
    });
    })(jQuery);


(function($){
    $('#searchTitle').keyup(function(){
        $('#result').html('');
        var searchfield = $('#searchTitle').val();
        var expression = new RegExp(searchfield, "i");
        var $movies = $('#movie-list');
        $.ajax({
            url: 'https://localhost:44325/api/movie',
            type: 'GET',
            success: function(movies){
                $.each(movies, function(i, movie){
                    if(movie.title.search(expression) != -1){
                        $('#result').append('<li class= "list-group-item">' + movie.title + " " + movie.genre + " " + movie.director + '</li>');
                    }
                });
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    });
})(jQuery);


(function($){
    $('#searchGenre').keyup(function(){
        $('#result').html('');
        var searchfield = $('#searchGenre').val();
        var expression = new RegExp(searchfield, "i");
        var $movies = $('#movie-list');
        $.ajax({
            url: 'https://localhost:44325/api/movie',
            type: 'GET',
            success: function(movies){
                $.each(movies, function(i, movie){
                    if(movie.genre.search(expression) != -1){
                        $('#result').append('<li class= "list-group-item">' + movie.title + " " + movie.genre + " " + movie.director + '</li>');
                    }
                });
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    });
})(jQuery);


(function($){
    $('#searchDirector').keyup(function(){
        $('#result').html('');
        var searchfield = $('#searchDirector').val();
        var expression = new RegExp(searchfield, "i");
        var $movies = $('#movie-list');
        $.ajax({
            url: 'https://localhost:44325/api/movie',
            type: 'GET',
            success: function(movies){
                $.each(movies, function(i, movie){
                    if(movie.director.search(expression) != -1){
                        $('#result').append('<li class= "list-group-item">' + movie.title + " " + movie.genre + " " + movie.director + '</li>');
                    }
                });
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    });
})(jQuery);