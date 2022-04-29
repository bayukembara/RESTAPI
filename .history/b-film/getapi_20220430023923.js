function allFilm() {
  $.getJSON("http://www.omdbapi.com/?apikey=2fc065e7&s=harry potter", function (hasil) {
    console.log(hasil);
  });
}

allFilm();

$('#search-button').on('click', function () {
  $.ajax({
    url: 'http://www.omdbapi.com',
    type: 'GET',
    dataType: 'json',
    data: JSON.stringify(all)
  });
});
