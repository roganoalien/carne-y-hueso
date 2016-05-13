<?php
	// $to = "roga.noalien@gmail.com";
	// $from = $_REQUEST['email'];
	// $name = $_REQUEST['name'];
	// $headers = "De: $from";
	// $subject = "Mensaje del sitio web ";

	// $fields = array();
	// $fields{"name"} = "name";
	// $fields{"email"} = "email";
	// $fields{"phone"} = "phone";
	// $fields{"message"} = "message";

	// $body = "Esto es lo que se envió:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

	// $send = mail($to, $subject, $body, $headers);
	// para continuar con el tutorial https://scotch.io/tutorials/submitting-ajax-forms-with-jquery
	
	// SETEAR PARA MIS OPCIONES DE LA FORMA
	// Only process POST reqeusts.
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		// Get the form fields and remove whitespace.
		$name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
    	$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    	$tel = $_POST["tel"];
    	$meat1 = $_POST["carne-uno"];
    	$qt1 = $_POST["cantidad-uno"];
    	$meat2 = $_POST["carne-dos"];
    	$qt2 = $_POST["cantidad-dos"];
    	$meat3 = $_POST["carne-tres"];
    	$qt3 = $_POST["cantidad-tres"];
    	$meat4 = $_POST["carne-cuatro"];
    	$qt4 = $_POST["cantidad-cuatro"];
		$address = $_POST["place"];
		$message = trim($_POST["pedido"]);

	   	// Check that data was sent to the mailer.
		if ( empty($name) OR empty($tel) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
	    	// Set a 400 (bad request) response code and exit.
	        http_response_code(400);
	        echo "Los campos marcados son necesarios!";
	        exit;
	    }

	    // Set the recipient email address.
	    // FIXME: Update this to your desired email address.
	    $recipient = "roga.noalien@gmail.com";

		// Set the email subject.
	    $subject = "Mensaje del Sitio Web de: $name";

	    // Build the email content.
	    $email_content = "Nombre: $name\n";
	    $email_content .= "Correo: $email\n\n";
	    $email_content .= "Teléfono: $tel\n\n";
	    $email_content .= "Dirección: $address\n\n";
	    $email_content .= "Message:\n$message\n";
	    $email_content .= "Pedido:\n$meat1 $qt1\n $meat2 $qt2\n $meat3 $qt3\n $meat4 $qt4\n";

	    // Build the email headers.
	    $email_headers = "From: $name <$email>";

	    // Send the email.
	    if (mail($recipient, $subject, $email_content, $email_headers)) {
	    	// Set a 200 (okay) response code.
	        http_response_code(200);
	        echo "Thank You! Your message has been sent.";
		} else {
	    	// Set a 500 (internal server error) response code.
	        http_response_code(500);
	        echo "Oops! Something went wrong and we couldn't send your message.";
		}

	} else {
		// Not a POST request, set a 403 (forbidden) response code.
	    http_response_code(403);
	    echo "There was a problem with your submission, please try again.";
	}
?>