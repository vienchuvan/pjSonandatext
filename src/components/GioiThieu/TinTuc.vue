<template>
  <div>
    <layout_Menu_SonAndatex />

    <main class="container-fluid my-5 mt-5" style="padding-top:50px">
      <div class="row g-4">
        <!-- Nội dung chính -->
        <section class="col-lg-8">
          <h1 class="fw-bold mb-4 text-gradient animate__animated animate__fadeInDown">
            Tin tức & Mẹo Sơn Nhà
          </h1>

          <!-- ✅ Bài viết -->
          <article
            v-for="(item, idx) in news"
            :key="idx"
            class="card border-0 shadow-lg p-3 mb-4 rounded-4 animate__animated animate__fadeInUp"
            :style="{ animationDelay: (0.15 * idx) + 's' }"
            itemscope
            itemtype="https://schema.org/Article"
          >
            <div class="row g-3">
              <!-- Ảnh -->
              <div class="col-md-5">
                <div class="overflow-hidden rounded-4">
                  <img
                    :src="item.urlImgBaiViet"
                    class="img-fluid w-100 h-100 object-fit-cover tintuc-img"
                    :alt="item.title"
                    itemprop="image"
                  />
                </div>
              </div>

              <!-- Nội dung -->
              <div class="col-md-7 d-flex flex-column justify-content-between">
                <div>
                  <h2 class="h5 fw-bold text-dark mb-2" itemprop="headline">
                    {{ item.title }}
                  </h2>
                  <p class="text-muted small mb-2">
                    <i class="bi bi-calendar3"></i> {{ item.date || "Cập nhật mới" }}
                  </p>
                  <p class="text-dark small text-justify" itemprop="description">
                    {{ item.shortContent }}
                  </p>
                </div>
                <div>
                  <a
                    :href="'bai-viet/' + item.id + 'andatex' + item.title"
                    class="btn btn-warning btn-sm fw-bold px-3 rounded-pill mt-2"
                  >
                    Đọc tiếp →
                  </a>
                </div>
              </div>
            </div>
          </article>
        </section>

        <!-- ✅ Sidebar -->
        <aside class="col-lg-4 animate__animated animate__fadeInRight">
          <!-- Hỗ trợ -->
          <div class="card mb-4 shadow-sm border-0 hover-card rounded-4">
            <div class="card-body">
              <h3 class="h6 text-primary fw-bold mb-3">📞 HỖ TRỢ TRỰC TUYẾN</h3>
              <p class="mb-1">
                <strong>HOTLINE:</strong>
                <a href="tel:0963888912" class="text-danger fw-bold">0963 888 912</a>
              </p>
              <p class="mb-0">
                ✉️ <a href="mailto:sonandatex.com.vn">sonandatex.com.vn</a>
              </p>
            </div>
          </div>

          <!-- Bài viết mới -->
          <div class="card shadow-sm border-0 hover-card rounded-4">
            <div class="card-body">
              <h3 class="h6 text-primary fw-bold mb-3">📰 BÀI VIẾT MỚI NHẤT</h3>
              <ul class="list-unstyled m-0">
                <li
                  v-for="(item, idx) in news.slice(0, 5)"
                  :key="'aside-' + idx"
                  class="d-flex align-items-center mb-3 animate__animated animate__fadeInRight"
                  :style="{ animationDelay: (0.2 * idx) + 's' }"
                >
                  <img
                    :src="item.urlImgBaiViet"
                    class="rounded-3 me-3 shadow-sm"
                    style="width: 50px; height: 50px; object-fit: cover;"
                    :alt="item.title"
                  />
                  <span class="text-dark small fw-medium">{{ item.title }}</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>

    <Layout_Footer_SonAndatex />
  </div>
</template>

<script>
import Layout_Footer_SonAndatex from "../view/layout_Footer_SonAndatex.vue";
import layout_Menu_SonAndatex from "../view/layout_Menu_SonAndatex.vue";
import { header } from "@/assets/js/snapService";
import axios from "axios";
import { apiBaiViet } from "@/assets/js/api";

export default {
  components: { layout_Menu_SonAndatex, Layout_Footer_SonAndatex },
  name: "TinTuc",
  data() {
    return {
      news: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        let data = { funcId: "10" };
        const response = await axios.post(apiBaiViet, data, header);
        this.news = response.data.data;
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style scoped>
/* 🌈 Gradient title cho sang trọng */
.text-gradient {
  background: linear-gradient(90deg, #2563eb, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Hover card đẹp hơn */
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15) !important;
}

/* Hover zoom cho ảnh */
.tintuc-img {
  transition: transform 0.4s ease;
}
.tintuc-img:hover {
  transform: scale(1.07);
}
</style>

