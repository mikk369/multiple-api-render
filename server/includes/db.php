<?php

$db_host = "localhost";
$db_name = "iceswimming";
$db_user = "root";
$db_pass = "";

try {
    $db = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // echo "✅ Connected to the WordPress database successfully!<br>";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}