<?php
require 'includes/db.php';      // Include the DB connection
require 'classes/User.php';     // Include the User class

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Content-Type: application/json'); 

// Handle preflight request (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

// Check if the form was submitted via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($data['username'], $data['password'])) {
    $username = $data['username'];
    $password = $data['password'];

    $user = new User($db); // Instantiate the User class with the DB connection
    $loggedInUser = $user->authenticate($username, $password); // Call the authenticate method

    if ($loggedInUser) {
        session_start();
        $_SESSION['id'] = $loggedInUser['id'];
        $_SESSION['username'] = $loggedInUser['username'];
        echo json_encode(['status' => 'success', 'message' => 'Login successful!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid username or password']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request.']);
}
