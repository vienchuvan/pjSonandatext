<template>
  <Layout_Menu_SonAndatex_Home></Layout_Menu_SonAndatex_Home>
  <BannerHome />
  <VeChungToi />
  <ListProduct />
  <BannerHome2 />
    <section class="vinalux-section container mt-4" aria-labelledby="vinalux-title">
    <div class="row align-items-center">
      <div class="col-12 col-md-6">
        <figure class="vinalux-left">
          <img
            src="/img/banner/BM2.png"
            alt="Bảng màu sơn Vinalux"
            class="vinalux-img"
            loading="lazy"
          />
        </figure>
      </div>
      <div class="col-12 col-md-6">
        <div class="vinalux-right">
          <h2 id="vinalux-title" class="vinalux-title">BẢNG MÀU SƠN VINALUX</h2>
          <p class="vinalux-desc">
            VINALUX sẽ cung cấp cho bạn sự tư vấn và hướng dẫn chuyên nghiệp, giúp bạn đưa ra
            những quyết định màu sắc phù hợp cho các không gian khác nhau, tạo nên một
            ngôi nhà phản ánh tính cách của bạn.
          </p>
          <strong>Hệ thống bảng màu:</strong>
          <div class="vinalux-color-list">
            <div
              class="vinalux-color"
              v-for="(color, index) in colors"
              :key="index"
              :style="{ backgroundColor: color.code }"
              :title="color.name"
              :aria-label="'Màu ' + color.name"
            ></div>
          </div>
          <a href="/bang-mau" class="vinalux-btn" aria-label="Xem bảng màu đầy đủ">XEM BẢNG MÀU</a>
        </div>
      </div>
    </div>
  </section>
  <FloattingContact></FloattingContact>
  <Layout_Footer_SonAndatex></Layout_Footer_SonAndatex>
</template>

<script>
import ListProduct from "../Product/ListProduct.vue";
import FloattingContact from "../view/FloattingContact.vue";
import Layout_Footer_SonAndatex from "../view/layout_Footer_SonAndatex.vue";
import Layout_Menu_SonAndatex_Home from "../view/layout_Menu_SonAndatex_Home.vue";
import BannerHome from "./BannerHome.vue";
import BannerHome2 from "./BannerHome2.vue";
import VeChungToi from "./veChungToi.vue";

export default {
  components: {
    Layout_Menu_SonAndatex_Home,
    BannerHome,
    VeChungToi,
    FloattingContact,
    BannerHome2,
    Layout_Footer_SonAndatex,
    ListProduct,
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      colors: [
        { name: "Hồng pastel", code: "#c07bb0" },
        { name: "Xanh biển", code: "#3b6e99" },
        { name: "Xanh lá", code: "#8cc04b" },
        { name: "Vàng nhạt", code: "#f3ea4d" },
        { name: "Cam vàng", code: "#ffa000" },
        { name: "Đỏ tươi", code: "#ff3300" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vinalux-section {
  padding: 40px 0;
}
.vinalux-left {
  text-align: center;
}
.vinalux-img {
  width: 100%;
  max-width: 450px;
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
}

.vinalux-right {
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.vinalux-title {
  font-size: 28px;
  font-weight: 700;
  color: #0039c7;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.vinalux-desc {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 18px;
}

.vinalux-color-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 16px 0 24px;
}

.vinalux-color {
  width: 70px;
  height: 60px;
  border-radius: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}
.vinalux-color:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.vinalux-btn {
  background-color: #0039c7;
  color: #fff;
  padding: 12px 28px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  width: fit-content;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;
}
.vinalux-btn:hover {
  background-color: #002a9e;
}

/* Responsive tối ưu */
@media (max-width: 768px) {
  .vinalux-right {
    padding: 16px 0;
    text-align: center;
  }
  .vinalux-color-list {
    justify-content: center;
  }
  .vinalux-btn {
    margin: 0 auto;
  }
}
</style>
