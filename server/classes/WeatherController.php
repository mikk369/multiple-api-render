<?php

class WeatherController {
    public function getWeather() {
        header('Content-Type: application/json');
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET");
        
        $url = 'https://api.openweathermap.org/data/2.5/weather?lat=58.3639&lon=25.5900&appid=29a2c25404d7e1a56864c542d27c444d';
        $response = file_get_contents($url);
        $data = json_decode($response, true);

        return $data;
    }
}