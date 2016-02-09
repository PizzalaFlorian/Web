<?PHP
	try	{
		$bdd = new PDO('mysql:host=localhost;dbname=equipesfoot;charset=utf8', 'root');
	}catch(Exception $e){
		echo $e->getMessage();
	}
	
	session_start();
	
	
	function affiche_equipe($flag){
		$data=null;
		if($flag==1){	
		echo "<h1>Equipes Masculines </h1>
		  <ul>";		 
		$data = $GLOBALS['bdd']->query("SELECT * FROM equipes WHERE sexe='M'");
		}
		if($flag==0){
		echo "<h1>Equipes Féminine </h1>
		  <ul>";
					 
		$data = $GLOBALS['bdd']->query("SELECT * FROM equipes WHERE sexe='F'");	
		}
		if(!isset($data))
			echo 'error';
		while($rep = $data->fetch()){
			//var_dump($rep);
			echo'
			<li>
			<img src="./images/'.$rep['photo_e'].'"/>
			<img src="./images/'.$rep['photo_c'].'"/>
			<h2>'.$rep['championnat'].'</h2>
			<ul>
				<li>Entraineur : '.$rep['coach'].'</li>
				<li><a href="equipe.php?equipe='.$rep['equipe_id'].'">Composition</a></li>
				<li>Championnat
					<ul>
					<li><a href="'.$rep['url_res'].'">Résultat</a></li>
					<li><a href="'.$rep['url_classmnt'].'"></a>Classement</li>
					</ul>
				</li>
			</ul>
			</li>';		
		}
		echo "</ul>";
	}
	

?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8"/>
  <link rel="stylesheet" href="styles/stylesCommuns.css"/>
  <title>Equipes du FCCB</title>
</head>
<body>
  <div id="wrapper">
  	<header>
  	  <h1>FCCB</h1>
  	  <h2>Equipe <?php if(isset($_GET['equipe']))echo $_GET['equipe']; ?></h2>
    </header>
    <nav>
      <ul>
        <li><a href="index.php">Accueil</a></li>
        <li><a href="equipe.php" >Les équipes</a></li>
        <li><a href="terrains.html" >Terrains</a></li>
        <li>	
          &nbsp;&nbsp;&nbsp;&nbsp;
          <form action="connexion.php" method="post">
            Identifiant : <input type="text" size="16" name="login" />
            Mot de passe : <input type="password" size="16" name="passwd" />
            <input type="submit" value="Se connecter" />
          </form>				
        </li>
      </ul>
    </nav> 
    <section>
<!--
      <h1>Under construction ! <img src="./images/enConstruction.gif" /></h1>
-->

	<?PHP
	
	affiche_equipe(1);
	affiche_equipe(0);
	
	?>
    </section>
  </div>
</body>
</html>
