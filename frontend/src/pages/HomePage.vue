<template>
  <div class="product-list">
    <div class="product-header">
      <h1>Product List</h1>
      <div>
        <router-link to="/addproduct"><button class="add-button">ADD</button></router-link>
        <button id="delete-product-btn" class="mass-delete-button" @click="deleteSelected">MASS DELETE</button>
      </div>
    </div>
    <div class="products">
      <div v-for="product in products" :key="product.sku" class="product-item">
        <input type="checkbox" :value="product.sku" v-model="selectedProducts" class="delete-checkbox" />
        <div class="product-details">
          <div>{{ product.sku }}</div>
          <div>{{ product.name }}</div>
          <div>{{ product.price }} $</div>
          <div v-if="product.type === 'DVD'">Size: {{ JSON.parse(product.attribute).size }} MB</div>
          <div v-if="product.type === 'Book'">Weight: {{ JSON.parse(product.attribute).Weight }} KG</div>
          <div v-if="product.type === 'Furniture'">Dimension: {{ JSON.parse(product.attribute).height }}x{{ JSON.parse(product.attribute).width }}x{{ JSON.parse(product.attribute).length }}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      Scandiweb Test Assignment
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      selectedProducts: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch('http://156.67.29.251:80/api.php')
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          this.products = data;
        })
        .catch(error => {
          console.error("Error fetching products:", error);
        });
    },
    deleteSelected() {
      fetch('http://156.67.29.251:80/api.php', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ skus: this.selectedProducts })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        this.fetchProducts(); // Refresh the product list after deletion
      })
      .catch(error => {
        console.error("Error deleting products:", error);
      });
    }
  }
};
</script>

<style scoped>
.product-list {
  padding: 20px;
  font-family: Arial, sans-serif;
  margin-top: 0; /* Remove any top margin */
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.add-button, .mass-delete-button {
  padding: 10px 15px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-item {
  border: 1px solid #ccc;
  padding: 15px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
}

.delete-checkbox {
  position: absolute;
  top: 10px;
  left: 10px;
}

.product-details {
  margin-left: 30px; /* Shift the text to the right to avoid overlap with checkbox */
}

.footer {
  margin-top: 40px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
  text-align: center;
  font-weight: bold;
}
</style>
