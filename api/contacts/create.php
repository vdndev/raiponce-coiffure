<?php

include "../connexion.php";

if(isset($$_POST['submit'])){

    try{
    $requete = "INSERT INTO contacts (nom, prenom, email, tel, objet, message) VALUES (:nom, :prenom, :email, :tel, :objet, :message)";
    $stmt = $bdd->prepare($requete);
    $stmt->bindParam(":nom",$_POST['nom']);
    $stmt->bindParam(":prenom",$_POST['prenom']);
    $stmt->bindparam(":email",$_POST['email']);
    $stmt->bindParam(":tel",$_POST['tel']);
    $stmt->bindParam(":objet",$_POST['objet']);
    $stmt->bindParam(":message",$_POST['message']);    
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