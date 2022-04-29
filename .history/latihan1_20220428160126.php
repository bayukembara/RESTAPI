<?php

// $mahasiswa = [
//   "nama" => "Bayu Kembara",
//   "nip" => "14120019",
//   "email" => "bayukembara@bdevelopment.com"
// ];

// var_dump($mahasiswa);


$dbhandler = new PDO('mysql:host=localhost;dbname=phpdasar','root','');

$db = $$dbhandler->prepare('SELECT * FROM mahasiswa');
$db->execute();

$data = json_encode($mahasiswa);

echo $data;
