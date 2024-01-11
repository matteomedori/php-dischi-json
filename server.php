<?php

//lettura dal file dischi.json
$database = file_get_contents(__DIR__ . '/dischi.json');

//decodifico json 
$dischi = json_decode($database);

//se ho ricevuto una richiesta in get con un parametro id
if (isset($_GET['id'])) {

    //per salvare su file
    // file_put_contents('dischi.json', json_encode($dischi));

    header('Content-Type: application/json');
    echo json_encode($dischi[$_GET['id']]);
    die;
}

//dico che il tipo di dato ritornato dalla pagine deve essere json e stampo $dischi dopo averlo codificato in json
header('Content-Type: application/json');
echo json_encode($dischi);
?>