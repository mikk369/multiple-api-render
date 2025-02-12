<?php

require_once __DIR__ . './routes/Router.php';
require_once __DIR__ . './classes/FlightsController.php';
require_once __DIR__ . './classes/WeatherController.php';

//initialize the router
$router = new Router();

//Define the routes
$router->get('/flights', function() {
    $flightsController = new FlightsController();
    $flights =  $flightsController->getLiveFlights();

    header('Content-Type: application/json');
    echo json_encode($flights);
});

$router->get('/weather', function() {
    $weatherController = new WeatherController();
    $weather =  $weatherController->getWeather();

    header('Content-Type: application/json');
    echo json_encode($weather);
});

// Handle request
$router->handleRequest();