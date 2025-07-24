<template>
  <section
    class="about-section py-5 mt-5"
    style="background: linear-gradient(to right, #eef3f8, #e0f7fa)"
    aria-labelledby="about-title"
    role="region"
  >
    <div class="container">
      <div class="row align-items-center">
        <!-- Image -->
        <div
          class="col-lg-6 mb-4 mb-lg-0 wow fadeInLeft"
          data-wow-duration="1.2s"
          data-wow-delay="0.1s"
        >
          <div class="image-wrapper position-relative">
            <img
              :src="imageUrls.noithat3"
              alt="Nội thất AN ĐẠT 38"
              class="img-fluid rounded-modern shadow"
            />
            <div class="img-border-glow"></div>
          </div>
        </div>

        <!-- Text Content -->
        <div
          class="col-lg-6 wow fadeInRight"
          data-wow-duration="1.5s"
          data-wow-delay="0.3s"
        >
          <article class="glass-card p-4 p-md-5" role="article">
            <h2 id="about-title" class="text-dark mb-3 fw-bold fs-2">
              <span class="text-primary">CÔNG TY TNHH AN ĐẠT 38</span>
            </h2>
            <h6><strong> Giải pháp sơn nội & ngoại thất</strong> </h6>
            <!-- Hotline -->
            <div
              class="hotline-box bg-light rounded p-3 mb-3 d-flex align-items-center shadow-sm"
            >
              <span class="me-3 fs-4 text-danger">📞</span>
              <div>
                <p class="mb-0 fw-bold text-dark">
                  HOTLINE hỗ trợ:
                  <a href="tel:0963888912" class="text-decoration-none text-danger"
                    >0963.888.912</a
                  >
                </p>
              </div>
            </div>

            <!-- Lời chúc -->
            <p class="text-dark fw-medium fs-6 fst-italic mb-3">
              “Xin kính chúc quý khách thật nhiều sức khỏe, thành đạt và hạnh phúc.”
            </p>

            <!-- Nội dung chính -->
            <p class="text-dark lh-lg fs-6 text-justify">
              Chúng tôi là đơn vị chuyên sản xuất, cung cấp và thi công sơn nội – ngoại
              thất cao cấp. Với chất lượng dịch vụ tận tâm và chi phí tối ưu, AN ĐẠT 38
              luôn đồng hành cùng bạn trong việc nâng tầm không gian sống và công trình.
            </p>
            <p class="text-dark lh-lg fs-6 mb-4 text-justify">
              Hãy để chúng tôi giúp bạn biến ý tưởng thành hiện thực với phong cách thi
              công chuyên nghiệp, uy tín và đầy cảm hứng.
            </p>

            <!-- CTA -->
            <div>
              <a
                href="#products"
                class="btn  btn-primary px-4 py-2 rounded-pill shadow me-3 tex"
              >
                Xem sản phẩm
              </a>
              <a href="#contact" class="btn btn-primary px-4 py-2 rounded-pill">
                Liên hệ ngay
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { imageUrls } from "@/assets/js/imgUrl";
import WOW from "wowjs";
import { onMounted } from "vue";

export default {
  name: "AboutSectionModern",
  data() {
    return {
      imageUrls,
    };
  },
  setup() {
    onMounted(() => {
      new WOW.WOW().init();
    });
  },
};
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}
.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}
.image-wrapper {
  position: relative;
}
.rounded-modern {
  border-top-left-radius: 80px;
  border-bottom-right-radius: 80px;
  border-radius: 10px;
  z-index: 1;
}
.img-border-glow {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
  height: 100%;
  border-radius: 80px 0 80px 0;
  background: linear-gradient(135deg, #2291a3 0%, transparent 100%);
  z-index: 0;
  opacity: 0.15;
}
.hotline-box a:hover {
  text-decoration: underline;
}
.btn-primary {
  background-color: #2291a3;
  border-color: #2291a3;
}
.btn-outline-secondary:hover {
  background-color: #2291a3;
  color: white;
  border-color: #2291a3;
}

@media (max-width: 768px) {
  .fs-2 {
    font-size: 1.4rem !important;
  }
  .glass-card {
    padding: 20px;
  }
}
</style>
