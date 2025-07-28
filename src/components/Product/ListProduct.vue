<template>
  <section class="product-section py-5 mt-4">
    <div class="container">
      <h2 class="section-title text-center mb-4">
        🔥 Danh sách sản phẩm bán chạy
      </h2>
      <hr class="section-divider" />

      <div class="row g-4 mt-4" v-if="products && products.length">
        <article
          v-for="product in products"
          :key="product.id"
          class="product-card col-6 col-md-4 col-lg-3 d-flex"
          data-animate="fade-up"
        >
          <router-link
            :to="{
              path: '/product/' + product.idDanhMuc + 'vnk' + product.tenSP,
              state: { product },
            }"
            class="card shadow-sm border-0 w-100 text-decoration-none"
          >
            <figure class="mb-0 overflow-hidden">
              <img
                :src="'https://sonandatex.com.vn/uploads/' + product.imgSP"
                class="card-img-top img-fluid product-image"
                :alt="product.tenSP"
                loading="lazy"
              />
            </figure>

            <div class="card-body text-center">
              <h3 class="product-title">{{ product.tenSP }}</h3>
              <div class="product-rating my-2 text-warning">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
                <i class="bi bi-star"></i>
              </div>
            </div>

            <div class="card-footer bg-transparent border-0 text-center">
              <span class="btn btn-outline-info w-100">
                <i class="bi bi-cart4 me-1"></i> Giá: Liên hệ
              </span>
            </div>
          </router-link>
        </article>
      </div>

      <ProductDetail :product="selectedProduct" v-if="selectedProduct" />

      <div class="text-center mt-5">
        <router-link
          class="btn btn-info px-4 py-2 rounded-pill text-white"
          to="/san-pham"
        >
          <i class="bi bi-grid-fill me-1"></i> Xem thêm sản phẩm
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import ProductDetail from "@/components/Product/ProductDetail.vue";
import { header } from "@/assets/js/snapService";
import { apiGetSanPham } from "@/assets/js/api";

export default {
  name: "ProductList",
  components: {
    ProductDetail,
  },
  data() {
    return {
      products: [],
      selectedProduct: null,
    };
  },
  created() {
    this.getProducts();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const elements = document.querySelectorAll(".animate");
      const windowHeight = window.innerHeight;
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 50) {
          el.classList.add("show");
        }
      });
    },
    getProducts() {
      let data = {
        funcId: 10,
      };
      axios
        .post(apiGetSanPham, data, { headers: header })
        .then((res) => {
          console.log("Danh sách sản phẩm:", res.data.data);

          this.products = res.data.data.slice(0, 8);
        })
        .catch((err) => {
          console.error("Lỗi tải sản phẩm:", err);
        });
    },
    toSlug(text) {
      return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
    },
  },
};
</script>

<style scoped>
.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #17a2b8;
}

.section-divider {
  width: 80px;
  height: 3px;
  background-color: #17a2b8;
  margin: 0 auto 30px auto;
  border: none;
  border-radius: 2px;
}

/* 🌟 Animation cơ bản */
.animate {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-in-out;
}

.animate.show {
  opacity: 1;
  transform: translateY(0);
}

/* 🎯 Card sản phẩm có viền đẹp */
.product-card .card {
  border: 2px solid #e3f2fd; /* viền xanh nhạt */
  border-radius: 16px;
  transition: all 0.3s ease;
}

/* 🌟 Hover card sản phẩm */
.product-card:hover .card {
  transform: translateY(-8px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  border-color: #17a2b8; /* viền đậm hơn khi hover */
}

/* 🖼 Ảnh sản phẩm */
.product-image {
  transition: transform 0.4s ease;
  border-radius: 12px;
  height: 220px;
  object-fit: cover;
  width: 100%;
}
.product-card:hover .product-image {
  transform: scale(1.07);
}

/* ✍️ Tiêu đề sản phẩm */
.product-title {
  font-size: 16px;
  font-weight: 600;
  color: #17a2b8;
  min-height: 48px;
}

/* 🔘 Nút "Giá: Liên hệ" */
.btn-outline-info {
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn-outline-info:hover {
  background-color: #17a2b8;
  color: #fff;
}
</style>
