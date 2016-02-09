<?php

  if (loginOK($_POST['login'],$_POST['passwd'])) {
    session_start();
    $_SESSION['login'] = $_POST['login'];
  }
  header('Location: '.$_SERVER['HTTP_REFERER']) ;
  
/* Vérifie la combinaison nom/mot de passe et renvoie 
   true si elle est OK, false sinon
   Pour le moment on n'utilise pas de base de données.
   le évrification est codée en "dur" */
   
  function loginOK($login, $passwd) {
    return (($login == "toto") && ($passwd == "toto")); 
  }
  
?>
