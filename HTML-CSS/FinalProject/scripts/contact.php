<?php

/* set email receipt */

$myEmail = "info@ecornercanada.com";
$subject = "My website contact form";
$headers = "From: &email";

/* checking for required fields */

$email = check_input($_POST['email'], "Must enter Email");

/* check email format */
if (!preg_match("/([\w\-]+@[\w\-]+.[\w\-])/",$email))
{
	show_error("email is not in valid format");
}

/* non required fields */
$firstName = ($_POST['firstName']);
$lastName = ($_POST['lastName']);
$comments = ($_POST['comments']);


/* prepare email message */

$message = "Hello!
Your web contact form has been submitted by:
First Name: $firstName
Last Name: $lastName
Email: $email


$comments

End of message";


/* sending email using the php mail function */

mail($email, $subject, $message, $headers);

/* redirect to a new page */

header('Location: ../pages/thanks.html');

// function to check fields and display errors

function check_input($data, $problem='')
{
	$data = trim($data);
	$data = stripcslashes($data);
	$data = htmlspecialchars($data);
	
	if ($problem && strlen($data) == 0)
	{
		show_error($problem);
	}
	return $data;
}

function show_error($myError)

{
	?>
	<html>
	<body>
	<p><strong>Correct the following errors</strong></p>
	<?php echo $myError; ?>
	</body>
	</html>
	<?php
	exit();
	
}
?>