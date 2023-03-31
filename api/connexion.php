<?php

include "config.php";

try{

$bdd = new PDO('mysql:host=localhost;dbname=' . $database,$user,$password);

// précise que par défaut le fetch se fera en fetch_assoc
$bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

// gestion des erreurs par le pdo
$bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}catch(PDOException $e){
    http_response_code(500);
    header('content-type:application/json');
    echo json_encode([
        "status"=>500,
        "message"=>"Erreur : ".$e->getMessage()
    ]);     
}

// try catch

// set Attribute

// attribute error, pdo error exception

// $e->get_message();


?>