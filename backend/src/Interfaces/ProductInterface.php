<?php

namespace Interfaces;

interface ProductInterface {
    public function setAttribute($attribute);
    public function getAttribute();
    public function save();
    public function delete(array $ids);
}
