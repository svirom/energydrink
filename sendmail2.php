<?php
// Variables

$name = trim($_POST['pname']);
$tel = trim($_POST['ptel']);
$email = trim($_POST['pemail']);

	// Email will be send
	$to = "svjatoslav.romanjuk@gmail.com"; // Change with your email address
	$sub = "$name from MTV EnergyDrink"; // You can define email subject
	// HTML Elements for Email Body
	$body = <<<EOD
	<strong>Имя:</strong> $name <br>
	<strong>Телефон:</strong> $tel <br>
	<strong>Email:</strong> <a href="mailto:$email?subject=feedback" "email me">$email</a> <br> <br>
EOD;
//Must end on first column
	
	$headers = "From: $name <$email>\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	// PHP email sender
	mail($to, $sub, $body, $headers);


?>
