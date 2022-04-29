function allMenu() {
  $.getJSON('data/menu.json', function (data) {
  let menu = data.menu;
  $.each(menu, function (i, data) {
    $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="data/pizza/'+ data.gambar +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>')
  })
})
}

$('.nav-link').on('click', function () {
  $('.nav-link').removeClass('active');
  $(this).addClass('active');

  let cate = $(this).html();
  $('h2').html(cate);

  if (cate == 'All Menu') {
    allmenu
  }

  $.getJSON('data/menu.json', function (data) {
    let menu = data.menu;
    let content = '';

    $.each(menu, function (i, data) {
      if (data.kategori == cate.toLowerCase()) {
        content += '<div class="col-md-4"><div class="card mb-3"><img src="data/pizza/' + data.gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
      }
    });
  $('#daftar-menu').html(content);
  });
});
