<?php
// Variables

$tel = trim($_POST['calcemail']);
$email = trim($_POST['calctel']);
$cbig = trim($_POST['classic_big']);
$csmall = trim($_POST['classic_small']);
$obig = trim($_POST['original_big']);
$osmall = trim($_POST['original_small']);

	// Email will be send
	$to = "svjatoslav.romanjuk@gmail.com"; // Change with your email address
	$sub = "$tel from MTV EnergyDrink ЗАКАЗ"; // You can define email subject
	// HTML Elements for Email Body
	$body = <<<EOD
	<strong>Телефон:</strong> $tel <br>
	<strong>Email:</strong> <a href="mailto:$email?subject=feedback" "email me">$email</a> <br> <br>
	<strong>Classic Big:</strong> $cbig упаковок<br>
	<strong>Classic Small:</strong> $csmall упаковок<br>
	<strong>Original Big:</strong> $obig упаковок<br>
	<strong>Original Small:</strong> $osmall упаковок<br>
EOD;
//Must end on first column
	
	$headers = "From: <$email>\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	// PHP email sender
	mail($to, $sub, $body, $headers);


?>
