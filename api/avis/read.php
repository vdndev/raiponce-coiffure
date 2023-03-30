<?php

include "../connexion.php";

try{
// requête au plus simple qui affiche toutes les infos de la table soins
$requete="SELECT prenom, message FROM avis";

// afficher des éléments de la bdd
$stmt = $bdd->query($requete);
$data = $stmt->fetchAll();

// les datas sont transformés en json pour être utilisées par le front en js 
$datas = json_encode($data);
}catch(Exception $e){
    http_response_code(500);
    header('content-type:application/json');
    echo json_encode([
        "status"=>500,
        "message"=>"Erreur : ".$e->getMessage()
    ]);
}
// les datas envoyés en http avec le code le header qui précise le type de données et le body   
http_response_code(200);
header('content-type:application/json');
echo $datas;




?>