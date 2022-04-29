<?php

// $mahasiswa = [
//   "nama" => "Bayu Kembara",
//   "nip" => "14120019",
//   "email" => "bayukembara@bdevelopment.com"
// ];

// var_dump($mahasiswa);


$dbh = new PDO('mysql:host=localhost;dbname=phpdasar','root','');

$db = $$dbh->prepare('SELECT * FROM mahasiswa');

$db->execute();

$mahasiswa = $db->fetch(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);

echo $data;

// I've added "AS maxval" to make it easier to get the row
$query = $db->query('SELECT MAX(Bestelnummer) AS maxval FROM Bestellingsdetail');
$max_row = $query->fetch(PDO::FETCH_ASSOC);

$max = $max_row['maxval'];
$max++;
