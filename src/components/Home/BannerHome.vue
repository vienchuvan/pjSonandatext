<template>
  <main>
    <section
      id="banner"
      ref="bannerSection"
      class="py-5 text-white mt-5 banner-modern"
      :style="bannerStyle"
      aria-label="Giới thiệu không gian sống"
    >
      <div class="container m-auto">
        <div class="row align-items-center min-vh-60">
          <!-- Tiêu đề chính -->
          <div
            class="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0 animate__animated"
            :class="{ 'animate__fadeInLeft': showAnim }"
          >
            <h1 class="fw-bold banner-heading" aria-label="Slogan truyền cảm hứng">
              <span class="highlight">Inspire</span>
              <span class="subtext">Không gian sống đẳng cấp & sáng tạo</span>
            </h1>
            <p class="lead mt-3 d-none d-md-block" aria-label="Mô tả ngắn">
              Mang lại giải pháp sơn nội & ngoại thất chuyên nghiệp cho không gian sống của bạn.
            </p>
            <a href="#contact" class="btn btn-warning btn-lg mt-4 shadow">Liên hệ ngay</a>
          </div>

          <!-- Bộ sưu tập ảnh -->
          <div
            class="col-lg-6 d-none d-md-flex justify-content-center align-items-center animate__animated"
            :class="{ 'animate__fadeInRight': showAnim }"
          >
            <div class="hexagon-gallery-modern" aria-label="Bộ sưu tập hình ảnh nội thất hiện đại">
              <div
                v-for="(img, idx) in hexImages"
                :key="idx"
                class="hex-modern"
                :style="{ animationDelay: `${0.2 * idx}s` }"
              >
                <div class="hex-inner-modern">
                  <img :src="img.src" :alt="img.alt" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { imageUrls } from "@/assets/js/imgUrl.js";
import { ref, onMounted } from "vue";

export default {
  name: "LandingBanner",
  data() {
    return {
      imageUrls,
    };
  },
  computed: {
    bannerStyle() {
      return {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('${
          this.imageUrls.bannerBg ||
          "https://wallpapers.com/images/featured/plant-background-mh4y9mexexlv960o.jpg"
        }')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "500px",
      };
    },
    hexImages() {
      return [
        { src: this.imageUrls.noithat1, alt: "Phòng khách sang trọng với nội thất hiện đại" },
        { src: this.imageUrls.noithat2, alt: "Không gian bếp tối giản và sáng sủa" },
        { src: this.imageUrls.noithat3, alt: "Phòng ngủ với ánh sáng tự nhiên" },
        { src: this.imageUrls.noithat, alt: "Góc làm việc ấm cúng và tiện nghi" },
      ];
    },
  },
  setup() {
    const showAnim = ref(false);
    const bannerSection = ref(null);

    onMounted(() => {
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              showAnim.value = true;
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      if (bannerSection.value) observer.observe(bannerSection.value);
    });

    return { showAnim, bannerSection };
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.banner-modern {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  margin-bottom: 40px;
}
.min-vh-60 {
  min-height: 60vh;
  align-items: center;
}
.banner-heading .highlight {
  font-size: 3rem;
  font-weight: bold;
  color: #d4ff00;
  font-family: "Pacifico", cursive;
  display: block;
  letter-spacing: 2px;
  text-shadow: 2px 2px 8px #00000044;
}
.banner-heading .subtext {
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  display: block;
  margin-top: 10px;
  text-shadow: 1px 1px 6px #00000033;
}
.btn-warning {
  background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
  border: none;
  color: #333;
  font-weight: bold;
  border-radius: 30px;
  padding: 12px 36px;
  transition: background 0.3s;
}
.btn-warning:hover {
  background: linear-gradient(90deg, #ffa751 0%, #ffe259 100%);
  color: #111;
}

/* Hex gallery hiện đại */
.hexagon-gallery-modern {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  align-items: center;
  max-width: 380px;
}
.hex-modern {
  width: 110px;
  height: 125px;
  clip-path: polygon(
    25% 6%, 75% 6%,
    100% 50%,
    75% 94%, 25% 94%,
    0% 50%
  );
  background: rgba(255,255,255,0.85);
  box-shadow: 0 4px 18px rgba(0,0,0,0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, box-shadow 0.3s;
  animation: fadeInUp 0.7s both;
}
.hex-modern:hover {
  transform: translateY(-10px) scale(1.07);
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
}
.hex-inner-modern {
  width: 98%;
  height: 98%;
  clip-path: inherit;
  overflow: hidden;
  border-radius: 12px;
}
.hex-inner-modern img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.hex-inner-modern img:hover {
  transform: scale(1.08);
}

/* Animation keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 991px) {
  .banner-heading .highlight { font-size: 2.2rem; }
  .banner-heading .subtext { font-size: 1.2rem; }
  .hexagon-gallery-modern { max-width: 260px; }
  .hex-modern { width: 80px; height: 90px; }
}
@media (max-width: 767px) {
  .banner-modern { border-radius: 0; }
  .min-vh-60 { min-height: 350px; }
  .hexagon-gallery-modern { gap: 12px; }
}
</style>