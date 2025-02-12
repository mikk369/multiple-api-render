<?php

require_once __DIR__ . './routes/Router.php';
require_once __DIR__ . './classes/FlightsController.php';

//initialize the router
$router = new Router();

//Define the routes
$router->get('/flights', function() {
    $flightsController = new FlightsController();
    $flights =  $flightsController->getLiveFlights();
    echo json_encode($flights);
});

// Get the current URI and HTTP method
$uri = strtok($_SERVER['REQUEST_URI'], '?');
$method = $_SERVER['REQUEST_METHOD'];

// Resolve the route
$action = $router->resolve($uri, $method);
if ($action) {
    call_user_func($action);  
} else {
    echo json_encode(['error' => 'Route not found']); 
}