<?php
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require __DIR__ . '/dist/index.html';
        break;
    case '/add-product' :
        require __DIR__ . '/dist/index.html';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/dist/index.html';
        break;
}
