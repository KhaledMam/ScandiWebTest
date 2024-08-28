<?php

namespace Models;

class DVD extends Product
{
    public function __construct($sku, $name, $price, $size)
    {
        parent::__construct($sku, $name, $price, 'DVD', ['size' => $size]);
    }

    public function getAttribute(): string
    {
        return "Size: " . $this->attribute['size'] . " MB";
    }
}

