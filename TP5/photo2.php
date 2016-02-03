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

			/*$description array(
			'photo1.jpg' => 'Audrey et Noria au Camp, 2012',
			'photo2.jpg' => 'Traineau au Yukon, 2010',
			'image1.jpg' => 'Une fleur toute bleue' );
	*/
        $rep= "images/photos";
        $id_rep = opendir($rep);
        echo "<ul>";
      
        if (file_exists("images/photos/description.txt")) {
				$monfichier = fopen("images/photos/description.txt",'r'); 
					while($ligne = fgets($monfichier)){
                        $monarray = explode(":",$ligne);
                        $desc[$monarray[0]] = $monarray[1];
					}
						fclose($monfichier);
				}
				
			
		else {
			echo "PROBELM CHEMIN";
			}
			
			//var_dump($desc);
		        while ($fichier = readdir($id_rep)) {
					 if (strcmp(substr("$fichier", 0, 6), "thumb_") == 0 ) {
							$imgSmall = $fichier;
						         
						$imgBig = substr("$imgSmall", 6, 10);
						
						echo '<div class="img">';
						$flag=0;
						
						foreach($desc as $key => $value){
							if($imgBig==$key)
								$flag=1;
						}
						if($flag==1){
						echo'<a href="'.'images/photos/' . $imgBig . '" title="$imgBig"><img src="'.'images/photos/'.$imgSmall. '" width="110" height="90" /></a>';
						echo '<div class="desc">' . $desc[$imgBig] . '</div>';
						}
						else
							echo'<a href="'.'images/photos/' . $imgBig . '" title="$imgBig"><img src="'.'images/photos/'.$imgSmall. '" width="110" height="90" /></a>';

						echo '</div>';
					}

					else if ( strcmp (substr("$fichier", 6, 5), "Small") == 0) {
						$imgSmall = $fichier;
						
						$imgBig = substr("$imgSmall", 0, 6). '.jpg';
						
						echo '<div class="img">';
						$flag=0;
						
						foreach($desc as $key => $value){
							if($imgBig==$key)
								$flag=1;
						}
						if($flag==1){
						echo'<a href="'.'images/photos/' . $imgBig . '" title="$imgBig"><img src="'.'images/photos/'.$imgSmall. '" width="110" height="90" /></a>';
						echo '<div class="desc">' . $desc[$imgBig] . '</div>';
						}
						else
							echo'<a href="'.'images/photos/' . $imgBig . '" title="$imgBig"><img src="'.'images/photos/'.$imgSmall. '" width="110" height="90" /></a>';

						echo '</div>';
					}
					//var_dump($desc);
             // echo "<li>" . $fichier . "</li>";
			}
        echo"</ul>";
		closedir();
    
   
    

    ?>
    	</section>
  </div>
</body>
</html>
