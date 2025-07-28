<template>
  <main>
    <section
      id="banner"
      ref="bannerSection"
      class="py-5 text-white mt-5 banner-modern"
      :style="bannerStyle"
      aria-label="Giới thiệu không gian sống"
    >
      <div class="container-fluid px-lg-5">
        <div class="row align-items-center min-vh-60">
          <!-- Tiêu đề chính -->
          <div
            class="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0 animate__animated px-4"
            :class="{ 'animate__fadeInLeft': showAnim }"
          >
            <h1 class="fw-bold banner-heading" aria-label="Slogan truyền cảm hứng">
              <span class="subtext">Kiến tạo vẻ đẹp – Vững bền theo năm tháng</span>
            </h1>
            <p class="lead mt-3 d-none d-md-block">
              Mang lại giải pháp sơn nội & ngoại thất chuyên nghiệp cho không gian sống của bạn.
            </p>
            
            <a href="/lien-he" class="btn btn-warning btn-lg mt-4 shadow-lg">Liên hệ ngay</a>
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
                :style="{ animationDelay: `${0.15 * idx}s` }"
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
          this.imageUrls.bannerEco ||
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
  border-radius: 28px;
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.2);
  margin-bottom: 48px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* position: relative; */
}

.min-vh-60 {
  min-height: 65vh;
  display: flex;
  align-items: center;
}

.banner-heading .subtext {
  font-size: 30px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  text-align: start;
  text-shadow: 1px 2px 8px rgba(0, 0, 0, 0.4);
  margin-top: 0.5rem;
  display: block;
}

.lead {
  font-size: 1.1rem;
  color: #f1f1f1;
  text-align: start;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
  max-width: 90%;
}

.btn-warning {
  background: linear-gradient(90deg, #ffdd00, #fca311);
  border: none;
  border-radius: 32px;
  font-weight: 600;
  padding: 14px 40px;
  transition: all 0.3s ease-in-out;
}

.btn-warning:hover {
  background: linear-gradient(90deg, #fca311, #ffdd00);
  transform: scale(1.05);
  box-shadow: 0 6px 24px rgba(255, 200, 0, 0.4);
  color: #111;
}

/* Hex gallery hiện đại */
.hexagon-gallery-modern {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 420px;
}

.hex-modern {
  width: 160px;
  height: 160px;
  clip-path: polygon(
    25% 6%, 75% 6%,
    100% 50%,
    75% 94%, 25% 94%,
    0% 50%
  );
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s, box-shadow 0.4s;
  animation: fadeInUp 0.6s ease both;
}

.hex-modern:hover {
  transform: scale(1.06) translateY(-6px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);
}

.hex-inner-modern {
  width: 96%;
  height: 96%;
  clip-path: inherit;
  overflow: hidden;
  border-radius: 10px;
}

.hex-inner-modern img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
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

/* Responsive */
@media (max-width: 991px) {
  .banner-heading .subtext {
    font-size: 1.6rem;
  }
  .hexagon-gallery-modern {
    max-width: 280px;
  }
  .hex-modern {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 767px) {
  .banner-modern {
    border-radius: 0;
  }
  .min-vh-60 {
    min-height: 360px;
  }
  .lead {
    font-size: 1rem;
  }
}

</style>