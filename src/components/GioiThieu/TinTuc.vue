<template>
  <div>
    <layout_Menu_SonAndatex />

    <main class="tintuc-wrapper mt-5">
      <!-- Nội dung chính -->
      <section class="tintuc-main">
        <h1 class="page-title">Tin tức & Mẹo Sơn Nhà</h1>

        <!-- Timeline Item -->
        <article
          v-for="(item, idx) in news"
          :key="idx"
          class="tintuc-item"
          itemscope
          itemtype="https://schema.org/Article"
        >
          <!-- Timeline Line -->
          <div class="timeline-line" v-if="idx !== news.length - 1"></div>

          <!-- Cột trái: Ngày + Ảnh -->
          <div class="tintuc-left">
            <div class="tintuc-date">
              <span class="date-day">{{ item.day }}</span>
              <span class="date-month">{{ item.month }}</span>
            </div>
            <div class="img-wrapper">
              <img
                :src="item.urlImgBaiViet"
                class="tintuc-img"
                :alt="item.title"
                itemprop="image"
              />
            </div>
          </div>

          <!-- Nội dung bên phải -->
          <div class="tintuc-content">
            <h2 class="tintuc-title" itemprop="headline">{{ item.title }}</h2>
            <p class="tintuc-desc" itemprop="description">{{ item.shortContent }}</p>
            <a href="#" class="read-more">Đọc tiếp →</a>
          </div>
        </article>
      </section>

      <!-- Sidebar -->
      <aside class="tintuc-aside">
        <section class="hotro-box">
          <h3>HỖ TRỢ TRỰC TUYẾN</h3>
          <div class="hotro-item">
            <span class="hotline-label">HOTLINE:</span>
            <a href="tel:0926388888" class="hotline-number">092.63.88888</a>
          </div>
          <div class="hotro-item">
            <span class="hotro-icon">📞</span>
            <a href="tel:0929699999">092.96.99999</a>
          </div>
          <div class="hotro-item">
            <span class="hotro-icon">📞</span>
            <a href="tel:0869845555">0869.84.5555</a>
          </div>
          <div class="hotro-item">
            <span class="hotro-icon">✉️</span>
            <a href="mailto:sonvinilaux.com.vn">sonvinilaux.com.vn</a>
          </div>
        </section>

        <section class="baiviet-box">
          <h3>BÀI VIẾT MỚI NHẤT</h3>
          <ul>
            <li
              v-for="(item, idx) in news.slice(0, 5)"
              :key="'aside-' + idx"
              class="baiviet-item"
            >
              <img :src="item.img" class="baiviet-thumb" :alt="item.title" />
              <span class="baiviet-title">{{ item.title }}</span>
            </li>
          </ul>
        </section>
      </aside>
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
      news: [
        {
          day: "25",
          month: "Th3",
          img: "https://i.imgur.com/0y8Ftya.jpg",
          title: "Sơn tường chưa khô hậu quả thế nào?",
          desc: "Thời tiết lý tưởng nhất để sơn nhà, bả tường là khi trời nắng ráo, khô thoáng. Nếu như sơn mà gặp trời mưa bên ngoài thì cần dừng ngay để tránh hỏng bề mặt sơn...",
        },
        {
          day: "22",
          month: "Th3",
          img: "https://i.imgur.com/2pQwQnB.jpg",
          title: "Những màu sơn nhà được ưa chuộng nhất hiện nay",
          desc: "Chọn màu sơn nhà đẹp là bước quan trọng cuối cùng để hoàn thiện không gian sống của bạn...",
        },
        {
          day: "22",
          month: "Th3",
          img: "https://i.imgur.com/8QfQwQn.jpg",
          title: "Quy trình các bước sơn trong nhà bạn cần nắm rõ",
          desc: "Trước khi tiến hành sơn, chủ nhà nên tham khảo quy trình sơn trong nhà cơ bản để đạt hiệu quả tốt nhất...",
        },
        {
          day: "22",
          month: "Th3",
          img: "https://i.imgur.com/1QfQwQn.jpg",
          title: "Công nghệ sơn tĩnh điện",
          desc: "Sơn tĩnh điện là công nghệ hiện đại, tạo lớp phủ đều, bền và thẩm mỹ cho sản phẩm...",
        },
      ],
    };
  },

  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        let data = {
          funcId: "10",
        };
        // Thực hiện POST request
        const response = await axios.post(apiBaiViet, data, header);
        this.news = response.data.data;
        console.log("response ", response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

body {
  font-family: "Inter", sans-serif;
  background: #f9fafb;
}

/* Layout chính */
.tintuc-wrapper {
  display: flex;
  gap: 32px;
  padding: 30px 20px;
  max-width: 1280px;
  margin: auto;
}

.tintuc-main {
  flex: 1;
  position: relative;
}
.page-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 28px;
  color: #1e293b;
}

/* ITEM */
.tintuc-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 60px;
  position: relative;
}

/* LINE TIMELINE */
.timeline-line {
  position: absolute;
  left: 84px;
  top: 90px;
  width: 3px;
  height: calc(100% - 90px);
  background: #e2e8f0;
  z-index: 0;
}

/* Cột trái: Ngày + ảnh */
.tintuc-left {
  position: relative;
  width: 170px;
  text-align: center;
}

/* Ô ngày */
.tintuc-date {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: #fff;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}
.date-day {
  font-size: 24px;
  font-weight: 700;
}
.date-month {
  font-size: 13px;
}

/* Ảnh chồng lên ngày */
.img-wrapper {
  margin-top: -25px;
  position: relative;
}
.tintuc-img {
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}
.tintuc-img:hover {
  transform: scale(1.05);
}

/* Nội dung bên phải */
.tintuc-content {
  flex: 1;
  background: #fff;
  border-radius: 14px;
  padding: 22px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s ease;
}
.tintuc-content:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}
.tintuc-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #1f2937;
}
.tintuc-desc {
  font-size: 15px;
  color: #4b5563;
  margin-bottom: 12px;
  line-height: 1.6;
}
.read-more {
  font-weight: 600;
  color: #2563eb;
  text-decoration: none;
}
.read-more:hover {
  text-decoration: underline;
}

/* Sidebar */
.tintuc-aside {
  width: 320px;
  position: sticky;
  top: 30px;
  height: fit-content;
}
.hotro-box,
.baiviet-box {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 28px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
}
.hotro-box h3,
.baiviet-box h3 {
  color: #2563eb;
  font-size: 18px;
  margin-bottom: 16px;
}
.hotro-item {
  margin-bottom: 12px;
  font-size: 16px;
}
.hotline-label,
.hotline-number {
  font-weight: 700;
  color: #e11d48;
}
.hotro-icon {
  margin-right: 8px;
}

/* Bài viết mới nhất */
.baiviet-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.baiviet-item {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  cursor: pointer;
}
.baiviet-thumb {
  width: 42px;
  height: 42px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 12px;
}
.baiviet-title {
  font-size: 15px;
  color: #1f2937;
  font-weight: 500;
}
.baiviet-item:hover .baiviet-title {
  color: #2563eb;
}

/* ✅ Responsive */
@media (max-width: 1024px) {
  .tintuc-wrapper {
    flex-direction: column;
  }
  .tintuc-aside {
    width: 100%;
    position: static;
    margin-top: 20px;
  }
  .tintuc-item {
    flex-direction: column;
    align-items: center;
  }
  .tintuc-left {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tintuc-img {
    width: 90%;
    height: auto;
  }
  .tintuc-content {
    width: 100%;
    margin-top: 15px;
  }
  .timeline-line {
    display: none;
  }
}
</style>
