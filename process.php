<?php
	//process.php
	$errors = array(); //array to hold validation errors
	$data = array(); //array to pass back data
	//validate the variables
	//if any of these variables don't exist, add an error to our array $errors
	if (empty($_POST['name']))
		$errors['name'] = "El nombre es requerido";
	if (empty($_POST['email']))
		$errors['email'] = "Se requiere un correo";
	if (empty($_POST['tel']))
		$errors['tel'] = "Se requiere un número de contacto";
	//return a response
	//if there are any errors in our errors array, return a success boolean of false
	if( !empty($errors) ){
		//if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors'] = $errors;
	} else {
		//if there are no errors process our form, then return a message
		//DO AL YOUR FORM PROCESSING HERE
		//THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN; SAVE; UPDATE; WHATEVER)
		//show a message of success and provide a true success variable
		$data['success'] = true;
		$data['message'] = 'Success!';
	}
	//return all our data to an AJAX call
	echo json_encode($data);
	// para continuar con el tutorial https://scotch.io/tutorials/submitting-ajax-forms-with-jquery
?>