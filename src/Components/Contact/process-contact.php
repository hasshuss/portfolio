<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    
    // Validation de l'email
    $email = $_POST["email"];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "L'email n'est pas dans un format valide.";
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
    if (mail($to, $subject, $body, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
}
?>