<?php

namespace Models;

class Book extends Product
{
    public function __construct($sku, $name, $price, $weight)
    {
        parent::__construct($sku, $name, $price, 'Book', ['weight' => $weight]);
    }

    public function getAttribute(): string
    {
        return "Weight: " . $this->attribute['weight'] . " Kg";
    }
}
