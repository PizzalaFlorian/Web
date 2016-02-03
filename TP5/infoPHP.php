<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8"/>
	<title>infos PHP</title>
  </head>
  <body>
    <header>
        <h1>Infos sur serveur PHP de imss-dc</h1>
	</header>
	<section>
		<h3>
		   <?php 
		     echo date("D d-m-Y") . "<br/>";
		     echo "il est ".date("G\h i\m s\s");
		   ?>	
		</h3>
		<h3>version du moteur PHP : <?php echo phpversion();?></h3>
	</section>
  </body>
</html>
