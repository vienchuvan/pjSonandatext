<template>
  <Layout_Menu_SonAndatex></Layout_Menu_SonAndatex>
  <section class="mt-5"> ">
    <div class="container mt-5">
      <div v-if="filteredProducts.length">
        <ProductCate :products="filteredProducts" :title="categoryName" />
      </div>
      <ProductDetail :product="selectedProduct" v-if="selectedProduct" />
    </div>
    <Layout_Footer_SonAndatex></Layout_Footer_SonAndatex>
  </section>
</template>

<script>
import axios from "axios";

import ProductDetail from "@/components/Product/ProductDetail.vue";
import ProductCate from "../Product/ProductCate.vue";
import { apiGetDanhMuc, apiGetSanPham } from "@/assets/js/api";
import Layout_Menu_SonAndatex from "../view/layout_Menu_SonAndatex.vue";
import Layout_Footer_SonAndatex from "../view/layout_Footer_SonAndatex.vue";
import { header } from "@/assets/js/snapService";

export default {
  name: "ProductList",
  components: {
    Layout_Menu_SonAndatex,
    ProductDetail,
    ProductCate,
    Layout_Footer_SonAndatex,
  },
  data() {
    return {
      products: [],
      selectedProduct: null,
      categories: [
        // { id: 1, name: "SƠN NỘI THẤT" },
        // { id: 2, name: "SƠN NGOẠI THẤT" },
        // { id: 3, name: "SƠN LÓT" },
        // { id: 4, name: "SƠN CHỐNG THẤM" },
        // { id: 5, name: "SƠN BỘT BẢ SƠN NHŨ" },
      ],
    };
  },
  computed: {
    categoryName() {
      const match = this.categories.find(
        (cat) => cat.sortUrl === this.$route.params.nameDanhMuc
      );
      return match ? match.tenDanhMuc : "Danh mục không xác định";
    },
    filteredProducts() {
      const match = this.categories.find(
        (cat) => cat.sortUrl === this.$route.params.nameDanhMuc
      );
      return match ? this.products.filter((p) => p.idDanhMuc === match.id) : [];
    },
  },
  created() {
    console.log("URL danh mục:", this.$route.params.nameDanhMuc);
    this.getProducts();
    this.fetchDanhMuc();
  },
  methods: {
    slugify(name) {
      return name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");
    },
    fetchDanhMuc() {
      let data = {
        funcId: 10,
      };
      axios
        .post(apiGetDanhMuc, data, {
          headers: header,
        })
        .then((response) => {
          console.log(response.data);
          this.categories = response.data.data;
          console.log("this.categories ", this.categories);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    },
    async getProducts() {
      let data = {
        funcId: 10,
      };
      await axios
        .post(apiGetSanPham, data)
        .then((res) => {
          this.products = res.data.data;
          console.log("Products fetched:", res.data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    goToProductDetal(product) {
      this.selectedProduct = product;
    },
  },
};
</script>

<style>
/* Mặc định 5 sản phẩm / hàng */
.custom-col {
  width: 22%;
  padding: 0 10px;
}

/* Tablet (≤ 991px) → 3 sản phẩm / hàng */
@media (max-width: 991.98px) {
  .custom-col {
    width: 33.33%;
  }
}

/* Mobile (≤ 576px) → 2 sản phẩm / hàng */
@media (max-width: 576px) {
  .custom-col {
    width: 50%;
  }
}
</style>
