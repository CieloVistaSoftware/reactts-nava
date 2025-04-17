<?php
if($_POST)
{
    $to_email       = "support@idrivenglobal.com"; //Recipient email, Replace with own email here
    $from_email     = $_POST["user_email"]; //From email address (eg: no-reply@YOUR-DOMAIN.com)
    
    //check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
        $output = json_encode(array( //create JSON data
            'type'=>'error',
            'text' => 'Sorry Request must be Ajax POST'
        ));
        die($output); //exit script outputting json data
    }
   
    //Sanitize input data using PHP filter_var().
    $user_name      = filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
    $user_email     = filter_var($_POST["user_email"], FILTER_SANITIZE_EMAIL);
    $mobile       = filter_var($_POST["mobile"], FILTER_SANITIZE_STRING);
    $subject       = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);    
    $message        = filter_var($_POST["message"], FILTER_SANITIZE_STRING);


    //additional php validation
    if(strlen($user_name)<4){ // If length is less than 4 it will output JSON error.
        $output = json_encode(array('type'=>'error', 'text' => 'Name is too short or empty!'));
        die($output);
    }
    if(!filter_var($user_email, FILTER_VALIDATE_EMAIL)){ //email validation
        $output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
        die($output);
    }
    if(strlen($message)<10){ // If length is less than 4 it will output JSON error.
        $output = json_encode(array('type'=>'error', 'text' => 'Message is too short or empty!'));
        die($output);
    }


      
    //email body
    $message_body = "Name : ".$user_name."\r\n\r\nEmail : ".$user_email."\r\n\r\nMobile Number : ". $mobile."\r\n\r\nSubject : ". $subject. "\r\n\r\nMessage : ". $message;  
    $subject="New Enquiry For  IDG";
    
    
    //proceed with PHP email.
    $headers = 'From: '.$from_email.'' . "\r\n" .
    'Reply-To: '.$user_email.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
   
    $send_mail = mail($to_email, $subject, $message_body, $headers);

    if(!$send_mail)
    {
        //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
        $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your mail configuration.'));
        die($output);
    }else{
        $output = json_encode(array('type'=>'message', 'text' => 'Hi '.$user_name .' Thank you for your email. We will get back you soon.'));
        die($output);
    }

}
?>