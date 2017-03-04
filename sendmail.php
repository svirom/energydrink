<?php
// Variables
$select = trim($_POST['sel']);
$name = trim($_POST['name']);
$fname = trim($_POST['full_name']);
$email = trim($_POST['email']);
$tel = trim($_POST['tel']);
$message = trim($_POST['message']);




	

	// Email will be send
	$to = "svjatoslav.romanjuk@gmail.com"; // Change with your email address
	$sub = "$name from MTV EnergyDrink"; // You can define email subject
	// HTML Elements for Email Body
	$body = <<<EOD
	<strong>Выбор:</strong> $select <br>
	<strong>Имя:</strong> $name <br>
	<strong>Полное имя:</strong> $fname <br>
	<strong>Email:</strong> <a href="mailto:$email?subject=feedback" "email me">$email</a> <br> <br>
	<strong>Телефон:</strong> $tel <br>
	<strong>Сообщение:</strong> $message <br>
EOD;
//Must end on first column
	
	$headers = "From: $name <$email>\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	// PHP email sender
	mail($to, $sub, $body, $headers);


?>
