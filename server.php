<?php

//lettura dal file dischi.json
$database = file_get_contents(__DIR__ . '/dischi.json');

//decodifico json 
$dischi = json_decode($database);

//dico che il tipo di dato ritornato dalla pagine deve essere json e stampo $dischi dopo averlo codificato in json
header('Content-Type: application/json');
echo json_encode($dischi);
?>