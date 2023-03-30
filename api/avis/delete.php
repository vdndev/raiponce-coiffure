<?php

include "../connexion.php";

if(isset($_GET['id'])){

    try{
    $id = $_GET['id'];
    $requete = "DELETE FROM avis WHERE id=?";
    $stmt = $bdd->prepare($requete);
    $stmt->bindParam("sss", $id);
    $stmt->execute();

    // requête de confirmation
    http_response_code(200);
    header('content-type:application/json');
    echo json_encode([
        "status"=>200,
        "message"=>"les données ont été supprimées"
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
    http_response_code(400);
    header('content-type:application/json');
    echo json_encode([
        "status"=>400,
        "message"=>"les données n'ont pu être supprimées"
    ]);

}









?>