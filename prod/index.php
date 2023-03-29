<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raiponce Coiffure</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <header>
        <img src="" alt="logo">
        <nav>
            <ul>
                <li><a href="">Coupes et Soins</a></li>
                <li><a href=""></a>Tarifs</a></li>
                <li><a href=""></a>Réservation</a></li>
                <li><a href=""></a>Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h1>Lorem quelque chose de vraiment sympa</h1>
            <img class="mainImg" src="../img/mainImg.jpg" alt="mainImg">
        </section>
        <!-- slides, bouton reserver -->
        <section>
            <div class="slider" id="slider1">
                <div class="conteneur-slides">
                    <div class="slides active"><img src="../img/slide1.jpg" alt="img1"></div>
                    <div class="slides"><img src="../img/slide2.jpg" alt="img2"></div>
                    <div class="slides"><img src="../img/slide3.jpg" alt="img3"></div>
                    <button class="btn btn-prev"><</button>
                    <button class="btn btn-next">></button>
                </div>
                <div class="textSlide">
                    <h2>Découvrez nos incroyables coupes et soins pour femme, wow!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos quia, voluptas officiis nulla architecto, unde velit expedita dolore ducimus dolorem hic vel natus. Autem unde ad similique odit nostrum!</p>
                    <button>Réservez</button>
                </div>
            </div>
            <div class="slider" id="slider2">
                <div class="conteneur-slides">
                    <div class="slides active"><img src="../img/slide4 .jpg" alt="img1"></div>
                    <div class="slides"><img src="../img/slide5.jpg" alt="img2"></div>
                    <div class="slides"><img src="../img/slide6.jpg" alt="img3"></div>
                    <button class="btn btn-prev"><</button>
                    <button class="btn btn-next">></button>
                </div>
                <div class="textSlide">
                    <h2>On coupe aussi les cheveux aux hommes, c'est fou non ?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos quia, voluptas officiis nulla architecto, unde velit expedita dolore ducimus dolorem hic vel natus. Autem unde ad similique odit nostrum!</p>
                    <button>Réservez</button>
                </div>
            </div>
            <img src="" alt="logo">
        </section>
        <!-- les offres du salon -->
        <section>
            <h2>Découvrez notre offre</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quos explicabo facere facilis voluptatum exercitationem fugit corporis, doloribus magni, ut cumque accusantium necessitatibus maiores aliquam atque quam aspernatur harum distinctio.</p>
            <div>
                <div class="soins">
                    <h3>Les soins</h3>
                    <p>Découvrez nos super soins, que vous ne retrouverez pas ailleurs</p>
                    <p>API Soins</p>
                </div>
                <div class="coupes"> 
                    <h3>Les Coupes</h3>
                    <p>Découvrez nos super coupes, elles sont vraiment uniques</p>
                    <p>API Coupes</p>
                </div>
            </div>
        </section>
        <!-- les avis clients -->
        <section>
            <img src="" alt="img">
            <div class="avis">                
                <p>API Avis</p>
            </div>
            <!-- formulaire des avis -->
            <div>
                <form class="formAvis" action="">
                    <input type="text" name="prenom" id="prenom" placeholder="Prénom">
                    <input type="text" name="nom" id="nom" placeholder="Nom">
                    <input type="email" name="mail" id="mail" placeholder="Adresse mail">
                    <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Message"></textarea>
                    <input type="submit" value="Envoyer">
                </form>
            </div>
        </section>
        <!-- formulaire de reservation -->
        <section>
            <h2>Réservez votre rendez-vous</h2>
            <p>Ça va vraiment être un moment exceptionnel</p>
            <form action="">
                <input type="text" name="prenom" id="prenom" placeholder="Prénom">
                <input type="text" name="nom" id="nom" placeholder="Nom">
                <input type="email" name="mail" id="mail" placeholder="Adresse mail">
                <input type="text" name="objet" id="objet" placeholder="Objet">
                <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Message"></textarea>
                <input type="submit" value="Envoyer">
            </form>
        </section>
        <!-- formulaire de contact -->
        <section>
            <h2>Contactez-nous</h2>
            <p>Pour nous dire quelque chose, éventuellement...</p>
            <form action="">
                <input type="text" name="prenom" id="prenom" placeholder="Prénom">
                <input type="text" name="nom" id="nom" placeholder="Nom">
                <input type="email" name="mail" id="mail" placeholder="Adresse mail">
                <input type="text" name="objet" id="objet" placeholder="Objet">
                <textarea name="msg" id="msg" cols="10" rows="10" placeholder="Message"></textarea>
                <input type="submit" value="Envoyer">
            </form>
        </section>
        
        

    </main>

    <footer>

    </footer>

    <script src="script.js"></script>
</body>
</html>