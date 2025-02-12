<?php

// Router.php
class Router {
    private $routes = [];

    // Method to register GET routes
    public function get($uri, $callback) {
        $this->routes['GET'][$uri] = $callback;
    }

    // Resolve the route and call the appropriate controller method
    public function resolve($uri, $method) {
        return $this->routes[$method][$uri] ?? null;
    }
}