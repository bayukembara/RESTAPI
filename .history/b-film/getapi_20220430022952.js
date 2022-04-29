function allFilm() {
  $.getJSON("http://www.omdbapi.com/?apikey=2fc065e7&s=harry potter", function (hasil) {
    $.each(hasil, function (i, data) {
      console.log(i)
    })
  });
}
