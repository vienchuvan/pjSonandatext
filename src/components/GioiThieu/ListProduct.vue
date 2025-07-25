<template>
  <Layout_Menu_SonAndatex> </Layout_Menu_SonAndatex>

<section class="intro-section py-5 bg-light" aria-label="Giới thiệu về ANDAT 38">
  <div class="container-fluid">
    <div class="row g-4">
      <!-- Cột hỗ trợ -->
      <div class="col-lg-3 col-md-4 col-12">
        <div class="support-box shadow-sm h-100">
          <div class="support-title">HỖ TRỢ TRỰC TUYẾN</div>
          <div class="support-hotline mb-3">
            <span>
              <i class="fa fa-phone text-danger"></i>
              <strong class="text-danger">HOTLINE: 092.63.88888</strong>
            </span>
          </div>
          <div class="support-contact">
            <div class="mb-3">
              <strong>Tư vấn bán hàng</strong><br />
              <i class="fa fa-phone"></i> 092.96.99999<br />
              <i class="fa fa-envelope"></i> sonandatex.com.vn
            </div>
            <hr />
            <div>
              <strong>Tư vấn bán hàng</strong><br />
              <i class="fa fa-phone"></i> 0869.84.5555<br />
              <i class="fa fa-envelope"></i> sonandatex.com.vn
            </div>
          </div>
        </div>
      </div>

      <!-- Cột giới thiệu -->
      <div class="col-lg-9 col-md-8 col-12">
        <div class="intro-content shadow-sm h-100 bg-white p-4 rounded">
          <p>
            <strong>ANDATEX</strong> – Hãng sơn hàng đầu với chất lượng và đa dạng sản phẩm sơn cao cấp.
          </p>
          <p>
            Là một công ty hàng đầu trong lĩnh vực sản xuất sơn, với danh tiếng mạnh mẽ và sự tin cậy cao trên thị trường.
            Nhiều năm kinh nghiệm, ANDATEX đã khẳng định được vị thế của mình bằng việc cung cấp các sản phẩm sơn chất lượng cao và đa dạng.
            Với sự tận tâm và chuyên nghiệp, chúng tôi đặt chất lượng là ưu tiên hàng đầu.
          </p>
          <p>
            ANDATEX cung cấp một loạt các loại sơn, bao gồm sơn nội thất, sơn ngoại thất, sơn công nghiệp và sơn chống cháy, đáp ứng được các yêu cầu sử dụng đa dạng.
          </p>
          <p>
            Liên hệ <strong>0394.904.111 – 0986.051.666 – 0986.116.645</strong> để nhận tư vấn và ưu đãi từ ANDATEX.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  <section >
    <div class="container mt-5">
      <div v-if="products && products.length">
        <ProductCate
          v-for="category in categories"
          :key="category.id"
          :products="filteredProducts(category.id)"
          :title="category.tenDanhMuc"
          :nameDanhMuc="slugify(category.tenDanhMuc)"
        />
      </div>
      <ProductDetail :product="selectedProduct" v-if="selectedProduct" />
    </div>
    <Layout_Footer_SonAndatex></Layout_Footer_SonAndatex>
  </section>
  <FloattingContact></FloattingContact>
</template>

<script>
import axios from "axios";

import ProductDetail from "@/components/Product/ProductDetail.vue";
import ProductCate from "../Product/ProductCate.vue";

import { apiGetSanPham, apiGetDanhMuc } from "@/assets/js/api";
import Layout_Menu_SonAndatex from "../view/layout_Menu_SonAndatex.vue";
import Layout_Footer_SonAndatex from "../view/layout_Footer_SonAndatex.vue";
import FloattingContact from "../view/FloattingContact.vue";
import { header } from "@/assets/js/snapService";

export default {
  name: "ProductList",
  components: {
    Layout_Footer_SonAndatex,
    Layout_Menu_SonAndatex,
    ProductDetail,
    FloattingContact,
    ProductCate,
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
        // { id: 5, name: "SƠN BỘT BẢ - SƠN NHŨ" },
      ],
    };
  },
  created() {
    this.getProducts();
    this.fetchDanhMuc();
  },
  methods: {
    slugify(name) {
      return name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // xoá dấu tiếng Việt
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
          console.log("this.danhMuc ", this.categories);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
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

          this.products = res.data.data;
        })
        .catch((err) => {
          console.error("Lỗi tải sản phẩm:", err);
        });
    },
    filteredProducts(categoryId) {
      return this.products.filter((product) => product.idDanhMuc === categoryId);
    },
    goToProductDetal(product) {
      this.selectedProduct = product;
    },
  },
};
</script>

<style>
html, body {
  overflow-x: hidden;
}

/* Bắt buộc các box không vượt khung */
* {
  /* max-width: 100%; */
  box-sizing: border-box;
}
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
.intro-section .support-box {
  background: #ffffff;
  border-left: 5px solid #1976d2;
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
}

.intro-section .support-box:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.intro-section .support-title {
  background: #1976d2;
  color: #fff;
  font-weight: 600;
  text-align: center;
  padding: 10px 0;
  border-radius: 6px;
  font-size: 16px;
  margin-bottom: 15px;
}

.intro-section .support-hotline {
  font-size: 16px;
}

.intro-section .support-contact {
  font-size: 15px;
  line-height: 1.6;
}

.intro-section .intro-content {
  font-size: 16px;
  color: #222;
  line-height: 1.7;
}

@media (max-width: 767.98px) {
  .intro-section .intro-content,
  .intro-section .support-box {
    padding: 16px;
  }

  .intro-section .support-title {
    font-size: 15px;
  }

  .intro-section .support-contact,
  .intro-section .support-hotline {
    font-size: 14px;
  }
}
</style>
