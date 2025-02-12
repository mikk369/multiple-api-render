<?php

// Router.php
class Router {
    private $routes = [];

    // Method to register GET routes
    public function get($uri, $callback) {
        $this->routes['GET'][$uri] = $callback;
    }

    // Resolve the route and call the appropriate controller method
    public function handleRequest() {
        $uri = $_SERVER['REQUEST_URI'];
        $method = $_SERVER['REQUEST_METHOD'];

        $uri = parse_url($uri, PHP_URL_PATH);

        if(isset($this->routes[$method][$uri])) {
            $callback = $this->routes[$method][$uri];
            call_user_func($callback);
      } else {
            http_response_code(404);
            echo json_encode(["error" => "404 Not Found"]);
      }
    }
}