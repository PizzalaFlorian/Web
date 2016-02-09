<?PHP
	session_start();
	
	function afficher_menue_log(){
		if(!isset($_SESSION['isLog'])){
			echo'
			  <form action="connexion.php" method="post">
						Identifiant : <input type="text" size="16" name="login" />
						Mot de passe : <input type="password" size="16" name="passwd" />
					   <input type="submit" value="Se connecter" />
					  </form>				
					</li>
			 </ul>';
		}
		else{
			echo'
			  <form action="logOut.php" method="post">
					   <input type="submit" value="Se deconnecter" />
					  </form>				
					</li>
			 </ul>';
		}
	}

?>


<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8"/>
  <link rel="stylesheet" href="styles/stylesCommuns.css"/>
  <title>FCCB</title>
</head>
<body>
  <div id="wrapper">
    <header>
      <h1>FCCB</h1>
      <h2>Football Club Crolles Bernin</h2>
    </header>
    <nav>
      <?PHP require'navbar.php';
		afficher_menue_log();
      ?>
    </nav> 
    <section>
      <h2>Bienvenue sur la page d'accueil du FCCB</h2>
      <h1>Under construction ! <img src="./images/enConstruction.gif" /></h1>
	  <?PHP var_dump($_SESSION)?>
    </section>
  </div>
</body>
</html>
