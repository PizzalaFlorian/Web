<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8"/>
  <title>Photos</title>
  <link rel="stylesheet" type="text/css" media="screen" href="style.css">

</head>
<body>
  <div id="wrapper">
    <header>
      <h1>Mon site personnel</h1>
      <h2>Ma gallerie de photos</h2>
    </header>
    <!-- le menu de navigation -->
    <center>
    <nav>
		<ul>
			<li><a href="monCV.html">CV</a>
			</li>
			<li><a href="agenda.html" id="encours">EDT</a>
			</li>
			<li><a href="photos.html">Photos</a>
			</li>
			<li><a href="index.html">Acceuil</a>
			</li>
		</ul>
	</nav>
	</center>
    <!-- le contenu de la page -->
    <section id="gallery">
	  <?php
        $rep= "images/photos";
        $id_rep = opendir($rep);
        echo "<ul>";
        while ($fichier = readdir($id_rep)) {
				//if($fichier)
              echo "<a href='./images/photos/".$fichier."'><img src='./images/photos/".$fichier ."' width='110' height='90' /></a>";
        }
        echo"</ul>";
	closedir($rep);
    ?>
	</section>
  </div>
</body>
</html>
