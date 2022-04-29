function allFilm() {
  $.getJSON("http://www.omdbapi.com/?apikey=2fc065e7&s=harry potter", function (hasil) {
    console.log(hasil)
  });
}
