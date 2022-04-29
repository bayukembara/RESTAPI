// function allFilm() {
//   $.getJSON("http://www.omdbapi.com/?apikey=2fc065e7&s=harry potter", function (hasil) {
//     console.log(hasil);
//   });
// }

// allFilm();

function getFilm() {
  $('#daftar-film').html('');
  $.ajax({
    url: "http://www.omdbapi.com",
    type: "GET",
    dataType: "json",
    data: {
      apikey: "2fc065e7",
      s: $("#search-input").val(), //get data from input field
    },
    success: function (data) {
      if (data.Response == "True") {
        let film = data.Search; //Make an API Respon become object

        $.each(film, function (i, data) {
          $("#daftar-film").append(`
          <div class="col-md-4">
          <div class="card mb-3">
          <img src="`+data.Poster+`" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title" style="text-weight:bold">`+data.Title+`</h5>
          <p class="card-text">`+data.Year+`</p>
          <a href="#" class="card-link">More Detail</a>
          </div>
          </div>
          </div>
          `);
        });

        $('#search-input').val('');
      } else {
        // $('#daftar-film').html('<h1 class="alert alert-danger text-center">' + data.Error + '</h1>');
        // or
        $("#daftar-film").html(
          `
        <h1 class="alert alert-danger text-center">` +
          data.Error +
          `</h1>
        `
        );
      }
    },
  });
};


$('#search-button').on('click', function () {
  getFilm();
});
// $('#search-button').keypress(function (e) {
//   //jika 13 == enter maka jika event keycode == enter maka ambil film
//   if (e.which === 13) {
//     getFilm();
//   };
// });

$('#search-input').keyup(function (e) {
  if (e.keyup === 13) {
    getFilm();
  }
})
