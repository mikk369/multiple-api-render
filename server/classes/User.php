<?php
class User {
    private $db;

    // Constructor to inject the database connection
    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllUsers() {
        $stmt = $this->db->prepare('SELECT * FROM users');
        $stmt->execute();
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }

    // Register new user
    public function register($username, $email, $password) {
        //Check if inptus have data
        if(empty($username) || empty($email) || empty($password)) {
            return ['status' => 'error', 'message' => 'All fields are required!'];
        }

        // Check if username or email already exists
        $stmt = $this->db->prepare('SELECT * FROM users WHERE username = :username OR email = :email');
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        
        $existingUser = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($existingUser) {
            return ['status' => 'error', 'message' => 'Username or email already taken!'];
        }

        // Hash the password before storing it
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insert new user into the database
        $stmt = $this->db->prepare('INSERT INTO users (username, email, password) VALUES (:username, :email, :password)');
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->execute();

        return ['status' => 'success', 'message' => 'User registered successfully!'];
    }

    // Authenticate user
    public function authenticate($username, $password) {
        // Check if the user exists
        $stmt = $this->db->prepare('SELECT * FROM users WHERE username = :username');
        $stmt->bindParam(':username', $username);
        $stmt->execute();
        
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user && password_verify($password, $user['password'])) {
            return $user;
        }
        return false;
    }
}
?>
