<?php

namespace Models;

use PDO;

class ProductRepository
{
    private $pdo;

    public function __construct(Database $database)
    {
        $this->pdo = $database->getConnection();
    }



    public function getBySku(string $sku)
    {
    // Prepare the SQL statement with a placeholder
    $stmt = $this->pdo->prepare('SELECT * FROM products WHERE sku = :sku');

    // Bind the SKU parameter to the placeholder
    $stmt->bindParam(':sku', $sku, PDO::PARAM_STR);

    // Execute the statement
    $stmt->execute();

    // Fetch and return the result
    return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    public function save(Product $product): bool
    {
        $stmt = $this->pdo->prepare('INSERT INTO products (sku, name, price, type, attribute) VALUES (?, ?, ?, ?, ?)');
        return $stmt->execute([
            $product->getSku(),
            $product->getName(),
            $product->getPrice(),
            $product->getType(),
            json_encode($product->getAttributeData())
        ]);
    }
     public function delete(array $skus): bool
    {
        // Create placeholders for the number of SKUs
        $placeholders = str_repeat('?,', count($skus) - 1) . '?';

        // Prepare the SQL statement with placeholders
        $stmt = $this->pdo->prepare("DELETE FROM products WHERE sku IN ($placeholders)");

        // Execute the statement with the SKUs array
        return $stmt->execute($skus);
    }
    public function getAll(): array
    {
        $stmt = $this->pdo->query('SELECT * FROM products');
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
