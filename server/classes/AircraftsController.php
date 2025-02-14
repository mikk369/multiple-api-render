<?php

class AircraftsController {
    public function getAircraftData() {
        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET");

        $url = 'https://api.aviationstack.com/v1/airplanes?access_key=68dd230c04366941f220d3bfa79712eb';
        $response = file_get_contents($url);
        $data = json_decode($response, true);

        return $data;
    }
}

class filteredAircraft {
    private $AircraftsController;

    public function __construct() {
        $this->AircraftsController = new AircraftsController();
    }

    public function filterAircraftData() {
        $aircrafts = $this->AircraftsController->getAircraftData();
        $filteredData = [
            'pagination' => [],
            'data' => []
        ];

        if(isset($aircrafts['pagination'])) {
                $filteredData['pagination'] = [
                    'count' => $aircrafts['pagination']['count']
                ];
        }

        if(isset($aircrafts['data'])) {
                $filteredData['data'] = array_map(function($aircraft) {
                    return [
                        'id' => $aircraft['id'],
                        'plane_status' => $aircraft['plane_status']
                    ];

                }, $aircrafts['data']);
        }
        
        return $filteredData;
    }
}