<template>
  <div class="add-product-page">
    <div class="product-header">
      <h1>Add New Product</h1>
      <div>
        <button type="button" @click="submitForm">Save</button>
        <button type="button" @click="cancel">Cancel</button>
      </div>
    </div>

    <form id="product_form" @submit.prevent="submitForm">
      <div>
        <label for="sku">SKU:</label>
        <input type="text" id="sku" v-model="product.sku" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="product.name" required />
      </div>
      <div>
        <label for="price">Price ($):</label>
        <input type="number" id="price" v-model.number="product.price" required />
      </div>
      <div>
        <label for="productType">Type:</label>
        <select id="productType" v-model="product.type" @change="updateAttributeFields" required>
          <option value="DVD">DVD</option>
          <option value="Book">Book</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>

      <div v-if="product.type === 'DVD'">
        <label for="size">Size (MB):</label>
        <input type="number" id="size" v-model.number="product.size" />
        <small>Please, provide size in MB</small>
      </div>

      <div v-if="product.type === 'Book'">
        <label for="weight">Weight (KG):</label>
        <input type="number" id="weight" v-model.number="product.weight" />
        <small>Please, provide weight in KG</small>
      </div>

      <div v-if="product.type === 'Furniture'">
        <label for="height">Height (CM):</label>
        <input type="number" id="height" v-model.number="product.height" />
        <label for="width">Width (CM):</label>
        <input type="number" id="width" v-model.number="product.width" />
        <label for="length">Length (CM):</label>
        <input type="number" id="length" v-model.number="product.length" />
        <small>Please, provide dimensions (HxWxL)</small>
      </div>

      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </form>
    <div class="footer">
      Scandiweb Test Assignment
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddProduct',
  data() {
    return {
      product: {
        sku: '',
        name: '',
        price: null,
        type: 'DVD',
        size: null,
        weight: null,
        height: null,
        width: null,
        length: null,
      },
      errorMessage: '',
    };
  },
  methods: {
    updateAttributeFields() {
      // Clear attribute fields when type is changed
      this.product.size = null;
      this.product.weight = null;
      this.product.height = null;
      this.product.width = null;
      this.product.length = null;
    },
    validateFields() {
      if (this.product.price <= 0) {
        this.errorMessage = 'Please, provide a positive price';
        return false;
      }
      if (!this.product.sku || !this.product.name || this.product.price === null) {
        this.errorMessage = 'Please, submit required data';
        return false;
      }

      if (this.product.type === 'DVD' && (this.product.size === null || this.product.size <= 0)) {
        this.errorMessage = 'Please, provide a valid size in MB';
        return false;
      }

      if (this.product.type === 'Book' && (this.product.weight === null || this.product.weight <= 0)) {
        this.errorMessage = 'Please, provide a valid weight in KG';
        return false;
      }

      if (this.product.type === 'Furniture') {
        if (this.product.height === null || this.product.width === null || this.product.length === null ||
            this.product.height <= 0 || this.product.width <= 0 || this.product.length <= 0) {
          this.errorMessage = 'Please, provide valid dimensions (HxWxL)';
          return false;
        }
      }

      this.errorMessage = ''; // Clear any previous errors
      return true;
    },
    submitForm() {
      if (!this.validateFields()) {
        return;
      }

      // Check if SKU is unique
      axios.get(`http://156.67.29.251:80/api.php?sku=${this.product.sku}`)
        .then(response => {
          if (response.data.error === 'Product not found') {
            // SKU is unique, proceed to save the product
            let productData = { ...this.product };

            if (this.product.type === 'DVD') {
              productData.attribute = { size: this.product.size };
            } else if (this.product.type === 'Book') {
              productData.attribute = { weight: this.product.weight };
            } else if (this.product.type === 'Furniture') {
              productData.attribute = {
                height: this.product.height,
                width: this.product.width,
                length: this.product.length
              };
            }

            // Save the product
            axios.post('http://156.67.29.251:80/api.php', productData)
              .then(() => {
                this.$router.push('/'); // Redirect to the product list page after successful addition
              })
              .catch(error => {
                this.errorMessage = 'Error saving product: ' + error.message;
              });
          } else {
            this.errorMessage = 'SKU must be unique. This SKU already exists.';
          }
        })
        .catch(error => {
          this.errorMessage = 'Error checking SKU: ' + error.message;
        });
    },
    cancel() {
      this.$router.push('/'); // Redirect to the product list page without saving
    },
  },
};
</script>
<style scoped>
.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.add-product-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

form > div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
select {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
}

.error-message {
  margin-top: 15px;
  color: red;
  font-weight: bold;
}
.footer {
  margin-top: 40px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
  text-align: center;
  font-weight: bold;
}
</style>
