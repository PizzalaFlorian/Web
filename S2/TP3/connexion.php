<?php

	if (loginOK($_POST['login'],$_POST['passwd'])) {
		session_start();
		$_SESSION['login'] = $_POST['login'];
		$_SESSION['passwd'] = $_POST['passwd'];
	}
	if(loginOK($_SESSION['login'],$_SESSION['passwd']))
	{
		$_SESSION['isLog'] = True;  
	}
  header('Location: '.$_SERVER['HTTP_REFERER']) ;
   
  function loginOK($login, $passwd) {
    return (($login == "toto") && ($passwd == "toto")); 
  }
  
?>
