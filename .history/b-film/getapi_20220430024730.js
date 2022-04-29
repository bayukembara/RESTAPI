// function allFilm() {
//   $.getJSON("http://www.omdbapi.com/?apikey=2fc065e7&s=harry potter", function (hasil) {
//     console.log(hasil);
//   });
// }

// allFilm();

$('#search-button').on('click', function () {
  $.ajax({
    url: 'http://www.omdbapi.com',
    type: 'GET',
    dataType: 'json',
    data: {
      'apikey': '2fc065e7',
      's': $('#search-input').val() //get data from input field
    },
    success: function (data) {
      if (data.Response == "True") {

      } else {
        $('#daftar-film').html('<h1 class="alert alert-danger text-center">Movie Not Found</h1>')
      }
    }
  });
});
