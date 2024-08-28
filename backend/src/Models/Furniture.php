<?php

namespace Models;

class Furniture extends Product
{
    public function __construct($sku, $name, $price, $height, $width, $length)
    {
        parent::__construct($sku, $name, $price, 'Furniture', [
            'height' => $height,
            'width' => $width,
            'length' => $length,
        ]);
    }

    public function getAttribute(): string
    {
        return "Dimensions: " . $this->attribute['height'] . "x" . $this->attribute['width'] . "x" . $this->attribute['length'];
    }
}
