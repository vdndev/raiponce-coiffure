<?php

include "../connexion.php";

$json_data = file_get_contents('php://input');
$data = json_decode($json_data);

if(isset($data['submit'])){

    try{
    $requete = "UPDATE prestations SET (nom, tarif) VALUES (?, ?) WHERE id=?";
    $stmt = $bdd->prepare($requete);
    $stmt->bindParam("sss", $nom, $tarif, $id);
    $stmt->execute();

    // requête de confirmation
    http_response_code(200);
    header('content-type:application/json');
    echo json_encode([
        "status"=>200,
        "message"=>"les données ont été modifiées"
    ]);
    }catch(Exception $e){
        http_response_code(500);
        header('content-type:application/json');
        echo json_encode([
            "status"=>500,
            "message"=>"Erreur : ".$e->getMessage()
        ]);
    }

}
else{
    // requête d'erreur      
    http_response_code(400);
    header('content-type:application/json');
    echo json_encode([
        "status"=>400,
        "message"=>"les données n'ont pu être modifiées"
    ]);

}








?>