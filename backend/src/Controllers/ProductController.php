<?php

namespace Controllers;

use Models\ProductRepository;

class ProductController
{
    private $repository;
    private $logFile;

    public function __construct(ProductRepository $repository, $logFile = '/path/to/your/logfile.log')
    {
        $this->repository = $repository;
        $this->logFile = $logFile;
    }

    public function save(array $data): void
    {
        $this->logRequest('SAVE', $data);
        $product = $this->createProductFromData($data);
        if ($this->repository->save($product)) {
            echo json_encode(['message' => 'Product saved successfully']);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to save product']);
        }
    }

    public function delete(array $skus): void
    {
        $this->logRequest('DELETE', $skus);
        if ($this->repository->delete($skus)) {
            echo json_encode(['message' => 'Products deleted successfully']);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to delete products']);
        }
    }

    public function getAll(): void
    {
        $this->logRequest('GET_ALL');
        $products = $this->repository->getAll();
        echo json_encode($products);
    }

    public function getBySku(string $sku): void
    {
        $this->logRequest('GET_BY_SKU', ['sku' => $sku]);
        $product = $this->repository->getBySku($sku);
        if ($product) {
            echo json_encode($product);
        } else {
            http_response_code(200);
            echo json_encode(['error' => 'Product not found']);
        }
    }

    public function getById(int $id): void
    {
        $this->logRequest('GET_BY_ID', ['id' => $id]);
        $product = $this->repository->getById($id);
        if ($product) {
            echo json_encode($product);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Product not found']);
        }
    }

    private function createProductFromData(array $data)
    {
      $this->logRequest('CREATE_PRODUCT_FROM_DATA', $data);

      $className = 'Models\\' . ucfirst($data['type']);

      if (class_exists($className)) {
        // Extract attributes
        $attributes = array_values($data['attribute']);

        // Log the attributes and data
        $this->logRequest('ATTRIBUTES', $attributes);

        // Ensure attributes are passed correctly as separate arguments
        $params = array_merge([$data['sku'], $data['name'], $data['price']], $attributes);

        // Log the params to see what is being passed to the constructor
        $this->logRequest('PARAMS_BEFORE_CONSTRUCTOR', $params);

        // Create the product object
        return new $className(...$params);
      } else {
          throw new \Exception('Invalid product type');
      }
    }

    private function logRequest(string $action, array $data = []): void
    {
        $logEntry = date('Y-m-d H:i:s') . " - ACTION: $action - DATA: " . json_encode($data) . PHP_EOL;
        file_put_contents($this->logFile, $logEntry, FILE_APPEND);
    }
}
