<template>
  <main>
    <!-- Banner -->
    <section
      id="banner"
      class="py-5 text-white mt-3 banner-section animate"
      aria-label="Giới thiệu không gian sống"
    >
      <!-- <div class="container text-center">
        <h1 class="banner-heading">
          <span class="highlight">Sơn Andatex</span>
          <span class="subtext">Không gian sống hoàn hảo cho bạn</span>
        </h1>
      </div> -->
      <tu-van-free></tu-van-free>
    </section>
  </main>

  <!-- Section giới thiệu Vinalux -->
  <section
    class="vinalux-section container mt-4"
    aria-labelledby="vinalux-title"
  >
    <div class="row align-items-center">
      <div class="col-12 col-md-6 animate" data-animate="fade-right">
        <figure class="vinalux-left">
          <img
            src="/img/banner/BM2.png"
            alt="Bảng màu sơn Vinalux"
            class="vinalux-img"
            loading="lazy"
          />
        </figure>
      </div>

      <div class="col-12 col-md-6 animate" data-animate="fade-left">
        <div class="vinalux-right">
          <h2 id=" text-start vinalux-title" class="vinalux-title gradient-text ">
           BẢNG MÀU SƠN ANDATEX
          </h2>
          <p class="vinalux-desc text-justify" >
            Hãy khám phá bộ sưu tập bảng màu sơn ANDATEX với sự pha trộn tinh tế
            của hơn 500 sắc thái màu sắc, từ những gam màu pastel nhẹ nhàng,
            xanh biển mát lành, vàng rực rỡ, cam ấm áp đến đỏ nổi bật và xanh lá
            tươi mới. Mỗi màu sắc là một cảm hứng sáng tạo, giúp bạn dễ dàng
            phối hợp và biến hóa không gian sống theo phong cách riêng, từ hiện
            đại trẻ trung đến sang trọng cổ điển.<br />
           
          </p>

          <strong class="text-start">Hệ thống bảng màu:</strong>
          <div class="vinalux-color-list animate" data-animate="zoom-in">
            <div
              class="vinalux-color"
              v-for="(color, index) in colors"
              :key="index"
              :style="{ backgroundColor: color.code }"
              :title="color.name"
              :aria-label="'Màu ' + color.name"
            ></div>
          </div>

          <a
            href="/bang-mau"
            class="vinalux-btn animate"
            data-animate="fade-up"
            aria-label="Xem bảng màu đầy đủ"
          >
            XEM BẢNG MÀU
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- <section
      id="banner"
      class="py-5 text-white mt-3 banner-section animate"
      :style="bannerStyle"
      aria-label="Giới thiệu không gian sống"
    >
    
    </section> -->
</template>

<script>
import { imageUrls } from "@/assets/js/imgUrl.js";
import TuVanFree from "./TuVanFree.vue";

export default {
  name: "LandingBanner",
  components: {
    TuVanFree,
  },
  data() {
    return {
      imageUrls,
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
  computed: {
    bannerStyle() {
      return {
        backgroundImage: `url('${
          this.imageUrls.bannerBG ||
          "https://wallpapers.com/images/featured/plant-background-mh4y9mexexlv960o.jpg"
        }')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "450px",
      };
    },
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // chỉ animate 1 lần
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".animate").forEach((el) => observer.observe(el));
  },
};
</script>

<style scoped>
.animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}
.gradient-text {
  background: linear-gradient(
    to right,
    #e53935,
    #fb8c00,
    #fdd835,
    #43a047,
    #1e88e5
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
/* Khi hiện ra */
.animate.show {
  opacity: 1;
  transform: translateY(0);
}

/* Hiệu ứng fade-right */
.animate[data-animate="fade-right"] {
  transform: translateX(-40px);
}
.animate.show[data-animate="fade-right"] {
  transform: translateX(0);
}

/* Hiệu ứng fade-left */
.animate[data-animate="fade-left"] {
  transform: translateX(40px);
}
.animate.show[data-animate="fade-left"] {
  transform: translateX(0);
}

/* Hiệu ứng fade-up */
.animate[data-animate="fade-up"] {
  transform: translateY(40px);
}
.animate.show[data-animate="fade-up"] {
  transform: translateY(0);
}

/* Hiệu ứng zoom-in */
.animate[data-animate="zoom-in"] {
  transform: scale(0.8);
}
.animate.show[data-animate="zoom-in"] {
  transform: scale(1);
}
/* Tiêu đề */
.banner-heading {
  text-align: left;
  margin-top: 10px;
}
.banner-heading .highlight {
  font-size: 2.8rem;
  font-weight: bold;
  color: #d4ff00;
  font-family: "Pacifico", cursive;
  display: block;
}
.banner-heading .subtext {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  display: block;
}

/* Bộ sưu tập lục giác */
.hexagon-gallery {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  gap: 70px 50px;
  justify-content: center;
  align-items: center;
}

.hexagon-gallery .hex:nth-child(1),
.hexagon-gallery .hex:nth-child(5) {
  grid-row: 1;
}
.hexagon-gallery .hex:nth-child(2),
.hexagon-gallery .hex:nth-child(4) {
  grid-row: 2;
}
.hexagon-gallery .hex:nth-child(3) {
  grid-row: 1 / span 2;
  grid-column: 2;
  align-self: center;
}

/* Style ảnh lục giác */
.hex {
  width: 150px;
  height: 150px;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  background-color: #fff; /* chính là viền */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.hex-inner {
  width: 100%;
  height: 100%;
  clip-path: inherit; /* giữ nguyên hình bát giác bên trong */
  overflow: hidden;
}

.hex-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.hex-inner img:hover {
  transform: scale(1.05);
}

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
