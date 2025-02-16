<?php 

class FlightsController {
    public function getLiveFlights() {
        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET");
        
        $url = 'https://api.aviationstack.com/v1/flights?access_key=68dd230c04366941f220d3bfa79712eb';
        $response = file_get_contents($url);
        $data = json_decode($response, true);
    
        return $data;
    }
}

class FlightFilter {
    private $FlightsController;

    public function __construct() {
        $this->FlightsController = new FlightsController();
    }

    public function getFilteredFlights() {
        $flights = $this->FlightsController->getLiveFlights();
        $totalFlights = $flights['pagination']['count'] ?? 0;

        $delayedFlights = array_filter($flights['data'] ?? [], function($flight) {
            return isset($flight['departure']['delay']) && $flight['departure']['delay'] > 0;
        });

        $delayedFlightsInt = count($delayedFlights);

        $onTimeFlights = $totalFlights - $delayedFlightsInt; 

        $filteredFlights = [
            'totalFlights' => $totalFlights,
            'delayedFlights' => $delayedFlightsInt,
            'onTimeFlights' => $onTimeFlights
        ];

        return $filteredFlights;
    }
}