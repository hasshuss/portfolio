<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $headers = "From: $email" . "\r\n" .
           "Reply-To: $email" . "\r\n" .
           "MIME-Version: 1.0" . "\r\n" .
           "Content-Type: text/plain; charset=UTF-8";

           
    $name = $_POST["name"];
    
    // Validation de l'email
    $email = $_POST["email"];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        exit;
    }

    // Enlever les caractères de nouvelle ligne pour éviter les injections d'en-tête
    $email = str_replace(["\r", "\n"], '', $email);
    
    $message = $_POST["message"];
    
    // Configuration pour l'envoi d'e-mail
    $to = "hasscrpt@gmail.com";
    $subject = "Nouveau message de contact";
    $body = "Nom: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    // Envoi de l'e-mail
        echo "Votre message a été envoyé avec succès.";
    
}
?>