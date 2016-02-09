<?PHP
session_start();
unset($_SESSION['isLog']);
unset($_SESSION['login']);
unset($_SESSION['passwd']);
session_destroy();
echo 'deco';
header('Location: '.$_SERVER['HTTP_REFERER']) ;
?>
