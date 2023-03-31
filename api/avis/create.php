<?php

include "../connexion.php";

if(isset($POST['submit'])){

    try{
    $requete = "INSERT INTO avis (prenom, message) VALUES (:prenom, :message)";
    $stmt = $bdd->prepare($requete);
    $stmt->bindParam(":prenom", $_POST['prenom']);
    $stmt->bindParam(":message", $_POST['message']);
    $stmt->execute();    

    // requête de confirmation      
    http_response_code(200);
    header('content-type:application/json');
    echo json_encode([
        "status"=>200,
        "message"=>"les données ont été créées"
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
        "message"=>"les données n'ont pu être créées"
    ]);
    
}







?>