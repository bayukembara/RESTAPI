<?php

// $mahasiswa = [
//   "nama" => "Bayu Kembara",
//   "nip" => "14120019",
//   "email" => "bayukembara@bdevelopment.com"
// ];

// var_dump($mahasiswa);


$dbh = new PDO('mysqli:host=localhost;dbname=phpdasar','root','');

$db = $$dbh->prepare('SELECT * FROM mahasiswa');

$db->execute();

$mahasiswa = $db->fetchAll(PDO::FETCH_ARRAY);

$data = json_encode($mahasiswa);

echo $data;
