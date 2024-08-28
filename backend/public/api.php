<?php
require_once '../vendor/autoload.php';

use Models\Database;
use Models\ProductRepository;
use Controllers\ProductController;

// Load config
$config = require '../config/config.php';

// Instantiate necessary objects
$database = new Database($config['db']);
$repository = new ProductRepository($database);
$controller = new ProductController($repository);

// Set CORS headers
header("Access-Control-Allow-Origin: *"); // Allow all origins
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS request
if ($_SERVER["REQUEST_METHOD"] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod == 'POST') {
// Decode JSON data
$input = json_decode(file_get_contents("php://input"), true);

// Check if JSON decoding was successful
if ($input === null) {
    // Set the response code to 400 (Bad Request)
    http_response_code(400);

    // Provide a detailed error message in the response
    echo json_encode(['error' => 'Invalid JSON']);

    // Terminate the script to prevent further processing
    exit;
}

try {
    // Attempt to save the product using the controller
    $controller->save($input);
} catch (Exception $e) {
    // Log the exception message to a file for debugging
    error_log($e->getMessage(), 3, '/path/to/your/error_log.log');

    // Set the response code to 500 (Internal Server Error)
    http_response_code(500);

    // Provide a generic error message to the client
    echo json_encode(['error' => 'An internal server error occurred. Please try again later.']);
}
} elseif ($requestMethod == 'DELETE') {
    $input = json_decode(file_get_contents("php://input"), true);
    if ($input === null) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON']);
        exit;
    }
    $controller->delete($input['skus']);
} elseif ($requestMethod == 'GET') {
    if (isset($_GET['sku'])) {
        $controller->getBySku($_GET['sku']);
    } else {
        $controller->getAll();
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
