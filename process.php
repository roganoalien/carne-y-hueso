<?php
	$to = "roga.noalien@gmail.com";
	$from = $_REQUEST['email'];
	$name = $_REQUEST['name'];
	$headers = "De: $from";
	$subject = "Mensaje del sitio web ";

	$fields = array();
	$fields{"name"} = "name";
	$fields{"email"} = "email";
	$fields{"phone"} = "phone";
	$fields{"message"} = "message";

	$body = "Esto es lo que se envió:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

	$send = mail($to, $subject, $body, $headers);
	// para continuar con el tutorial https://scotch.io/tutorials/submitting-ajax-forms-with-jquery
?>