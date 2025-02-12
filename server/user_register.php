<?php
require 'includes/db.php';
require 'classes/User.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Content-Type: application/json'); 

// Read JSON input from the request body
$data = json_decode(file_get_contents("php://input"), true);

// Check if the form was submitted via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($data['username'], $data['email'], $data['password'])) {
    $username = $data['username'];
    $email = $data['email'];
    $password = $data['password'];

    $user = new User($db); // Instantiate the User class with the DB connection
    $result = $user->register($username, $email, $password); // Call the register method
    
    echo json_encode($result); // Return the result as JSON
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request.']);
}
