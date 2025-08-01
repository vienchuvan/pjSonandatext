<template>
  <div class="container py-5">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="title-section">TIN TỨC MỚI NHẤT</h2>
      <a href="/tin-tuc" class="view-more-link">XEM THÊM &gt;</a>
    </div>

    <!-- Layout -->
    <div class="row">
      <!-- Bài viết nổi bật -->
      <div class="col-lg-6 mb-4">
        <div class="highlight-article shadow-sm">
          <img
            :src="articles[0]?.urlImgBaiViet"
            :alt="articles[0]?.title"
            class="img-fluid rounded-top w-100"
          />
          <div class="p-3">
            <a
              :href="'bai-viet/' + articles[0]?.id + 'andatex' + articles[0]?.title"
              
            >
              <h5 class="fw-bold text-uppercase text-dark">
                {{ articles[0]?.title }}
              </h5>
              <p class="text-muted small">
                {{ articles[0]?.shortContent?.slice(0, 160) }}...
              </p>
            </a>
          </div>
        </div>
      </div>

      <!-- Bài viết còn lại -->
      <div class="col-lg-6">
        <div class="row g-3">
          <!-- 2 bài to bên phải -->
          <div
            class="col-12 col-md-6"
            v-for="item in articles.slice(1, 3)"
            :key="item.id"
          >
            <div class="highlight-article shadow-sm">
              <img
                :src="item.urlImgBaiViet"
                :alt="item.title"
                class="img-fluid rounded-top w-100"
              />
              <div class="p-2">
                  <a
              :href="'bai-viet/' + item.id + 'andatex' + item.title"
              
            >
                <p class="fw-bold text-dark small text-center text-uppercase mb-1">
                  {{ item.title }}
                </p>
                </a>
                <div class="line mx-auto"></div>
              </div>
            </div>
          </div>

          <!-- Danh sách dọc 3 bài còn lại -->
          <div class="col-12 col-md-12 d-flex flex-column justify-content-between">
            <div
              v-for="item in articles.slice(3, 6)"
              :key="item.id"
              class="d-flex mb-3 align-items-center small-card"
            >
              <img
                :src="item.urlImgBaiViet"
                :alt="item.title"
                class="me-2 rounded"
                width="80"
                height="55"
                style="object-fit: cover"
              />
              <div>
                  <a
              :href="'bai-viet/' + item.id + 'andatex' + item.title"
              
            >
                <p class="fw-bold text-dark small text-uppercase mb-1">
                  {{ item.title }}
                </p>
                  </a>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { apiBaiViet } from "@/assets/js/api";
import { header } from "@/assets/js/snapService";

export default {
  name: "TinTuc",
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.post(apiBaiViet, { funcId: "10" }, header);
        this.articles = response.data.data || [];
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
      }
    },
  },
};
</script>

<style scoped>
.title-section {
  font-weight: bold;
  font-size: 1.4rem;
  background-color: #002c77;
  color: white;
  padding: 0.4rem 1.2rem;
  border-radius: 20px 20px 0 20px;
  position: relative;
}
.view-more-link {
  color: #002c77;
  font-weight: 600;
  text-decoration: none;
  position: relative;
}
/* .view-more-link::before {
  content: "";
  position: absolute;
  left: -20px;
  top: 50%;
  width: 100px;
  height: 2px;
  background-color: #002c77;
  transform: translateY(-50%);
} */
.highlight-article {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.highlight-article:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}
.card-article {
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  transition: 0.3s;
}
.card-article:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
}
.small-card:hover p {
  color: #002c77;
}
.line {
  height: 2px;
  width: 20px;
  background-color: #002c77;
}
</style>
