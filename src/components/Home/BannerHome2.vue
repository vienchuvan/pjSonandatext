<template>
  <main>
    <!-- Banner -->
    <section
      id="banner"
      class="py-5 text-white mt-3"
      :style="bannerStyle"
      aria-label="Giới thiệu không gian sống"
    >
      
    </section>
  </main>
</template>

<script>
import { imageUrls } from "@/assets/js/imgUrl.js";

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
    hexImages() {
      return [
        { src: this.imageUrls.noithat1, alt: "Phòng khách sang trọng với nội thất hiện đại" },
        { src: this.imageUrls.noithat2, alt: "Không gian bếp tối giản và sáng sủa" },
        { src: this.imageUrls.noithat3, alt: "Phòng ngủ với ánh sáng tự nhiên" },
        { src: this.imageUrls.noithat, alt: "Góc làm việc ấm cúng và tiện nghi" },
      ];
    },
  },
};
</script>

<style scoped>
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
    30% 0%, 70% 0%,
    100% 30%,
    100% 70%,
    70% 100%, 30% 100%,
    0% 70%, 0% 30%
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
</style>
