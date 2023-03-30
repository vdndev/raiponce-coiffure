USE coiffure;

INSERT INTO types_prestation(nom) VALUES
("soins"),
("coupes");

INSERT INTO longueur_cheuveux(nom) VALUES
("court"),
("moyen"),
("long");

INSERT INTO prestations(nom, tarif, id_type, id_longueur) VALUES
("Shampooing cheuveux court", 15, 1, 1),
("Shampooing cheuveux moyen", 20, 1, 2),
("Shampooing cheuveux long", 25, 1, 3),
("Brushing cheuveux court", 15, 2, 1),
("Brushing cheuveux long", 25, 2, 3);

INSERT INTO temoignages(prenom, message, created_at) VALUES
("Marielle", "Mes cheuveux ont ete coupes comme jamais auparavant, c'est un moment que je n'oublierai pas.", "2023-03-23"),
("Michel", "Je n'etait pas trop a l'aise en entrant, mais le proprietaire est tres sympathique et m'a de suite detendu.", "2023-03-25");
