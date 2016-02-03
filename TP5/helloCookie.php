<?PHP
	if(!isset($_COOKIE['barbanchon'])){
		$time = time()+60*60*24*30;
		setcookie('barbanchon',1,$time);
	}
	else
	{
		$bar= $_COOKIE['barbanchon'];
		$bar++;
		$time = time()+60*60*24*30;
		setcookie('barbanchon',$bar,$time);
		
	}
 ?>
<html lang="fr">
<head>
  <meta charset="utf-8"/>
  <title>Création/Supression de cookie</title>
</head>
<body>
  <h1>HELLO COOKIE!!</h1>
  <?PHP
	var_dump($_COOKIE);	
	if(isset($_COOKIE['barbanchon']))
		echo $_COOKIE['barbanchon'];
  ?>
</html>
