<?php 

class FlightsController {
    public function getLiveFlights() {
        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET");
        
        $url = 'https://api.aviationstack.com/v1/flights?access_key=68dd230c04366941f220d3bfa79712eb&limit=10';
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

    public function getFilteredFlights($airlineFilter) {
        $flights = $this->FlightsController->getLiveFlights();
        $filteredFlights = [];
        if(isset($flights['data']) && is_array($flights['data'])) {
            foreach ($flights['data'] as $flight) {
                if (isset($flight['airline']['name']) && $flight['airline']['name'] === $airlineFilter) {
                    $filteredFlights[] = $flight;
                } 
            }
        } else {
            echo "No flight data available";
        }
        return $filteredFlights;
    }
}