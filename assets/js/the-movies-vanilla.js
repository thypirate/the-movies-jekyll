(function () {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }


  var apiKey= "6f022cf1f752be83df1e9aa4dbd05a0c";
  // define variables
  var tmdbAPI = "https://api.themoviedb.org/3/trending/movie/day?api_key="+apiKey;

  fetch(tmdbAPI)
  .then(response => response.json())
  .then(data => {
    data.results.forEach(function(element) {

      var entry = document.querySelector('#entry');
      var column = document.createElement('div');
      var imageContainer = document.createElement('div');
      var image = document.createElement('img');
      var overlay = document.createElement('div');
      var details = document.createElement('div');
      var title = document.createElement('p');
      var releaseDate = document.createElement('p');
      var rating = document.createElement('p');
      var seeMoreBtn = document.createElement('a');
      var breakLine = document.createElement('br');

      column.setAttribute("class","column is-narrow");
      imageContainer.setAttribute("class", "image-container");
      image.setAttribute("src", "https://image.tmdb.org/t/p/w500" + element.poster_path);
      overlay.setAttribute("class", "overlay");
      details.setAttribute("class", "details");
      title.setAttribute("class", "is-size-5 has-text-warning");
      releaseDate.setAttribute("class", "is-size-6 has-text-weight-light");
      rating.setAttribute("class", "is-size-6");
      seeMoreBtn.setAttribute("class", "button is-warning has-text-weight-bold");
      seeMoreBtn.setAttribute("href", "https://www.themoviedb.org/movie/"+element.id+"-"+element.title);
      seeMoreBtn.setAttribute("target", "_blank");

      title.innerHTML = element.title;
      releaseDate.innerHTML = element.release_date;
      rating.innerHTML = element.vote_average;
      seeMoreBtn.innerHTML = "See More";

      entry.appendChild(column);
      column.appendChild(imageContainer);
      imageContainer.appendChild(image);
      imageContainer.appendChild(overlay);
      overlay.appendChild(details);
      details.appendChild(title);
      details.appendChild(releaseDate);
      details.appendChild(rating);
      details.appendChild(breakLine);
      details.appendChild(seeMoreBtn);

    });

  })
  .catch(error => console.error(error))

}());
