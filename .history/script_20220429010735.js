// const mahasiswa = {
//   nama: "Bayu Kembara",
//   nip: "14120019",
//   email: "bayu@bdevelopment.com"
// }

// // console.log(mahasiswa);
// console.log(JSON.stringify(mahasiswa));

let abc = new XMLHttpRequest();
abc.onreadystatechange = function () {
  if (abc.readyState == 4 && abc.status == 200) {
    let mahasiswa = JSON.parse(this.responseText);
    console.log(mahasiswa);
  }
}

abc.open('GET', 'coba.json', true);
abc.send();

