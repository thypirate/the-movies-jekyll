(function() {
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });

  var ajaxUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=6f022cf1f752be83df1e9aa4dbd05a0c",
		html,data;

    // make ajax request
		// https://api.jquery.com/jquery.ajax/
		$.ajax({
			url: ajaxUrl,
			dataType: "json",
			success: function(data){
        $.each( data.results, function( i, results ) {
          var posterPath = 'https://image.tmdb.org/t/p/w500'+results.poster_path;

        $(".images-container").append('<img src="' + posterPath + '"></img>');
        //$("<img>").attr("src", posterPath).appendTo(".images-container");
        //$("<div>").attr("class","overlay").appendTo(".image-container");
      //  $("<div>").attr("class", "details").appendTo(".overlay");
    }) // success
    }
		});
})();
