<template>
  <Layout_Menu_SonAndatex></Layout_Menu_SonAndatex>
  <section
    class="container-fluid palette-section mt-5"
    aria-label="Bảng màu sơn phong thủy nội thất"
  >
    <div class="palette-grid">
      <ColorGroup
        v-for="(group, index) in colorGroups"
        :key="index"
        :title="group.title"
        :description="group.description"
        :image="group.image"
        :colors="group.colors"
        :bgColor="group.bgColor"
      />
    </div>

    <p class="note">
      Những màu trên đây chịu ảnh hưởng của thời gian, ánh sáng, nhiệt độ và phương pháp
      in. Do vậy màu sắc trên bảng màu có thể sai lệch chút ít so với màu sơn thực tế.
    </p>
    <p class="note-green">
      Tên màu được tính theo quy ước trên bảng giá chi tiết của công ty
    </p>
  </section>
  <Layout_Footer_SonAndatex></Layout_Footer_SonAndatex>
</template>

<script>
import { imageUrls } from "@/assets/js/imgUrl";
import Layout_Footer_SonAndatex from "../view/layout_Footer_SonAndatex.vue";
import Layout_Menu_SonAndatex from "../view/layout_Menu_SonAndatex.vue";
import ColorGroup from "./ColorGroup.vue";

export default {
  name: "ColorPalette",
  components: { ColorGroup, Layout_Menu_SonAndatex, Layout_Footer_SonAndatex },
  data() {
    return {
      imageUrls: imageUrls,
      colorGroups: [
        {
          title: "VÀNG TRUYỀN THỐNG",
          description:
            "Biểu trưng cho sự hưng thịnh và vượng. Có thể kết hợp cùng tone màu Đỏ làm điểm nhấn. Phù hợp cho gia chủ mệnh THỔ.",
          image: imageUrls.noithatvang,
          bgColor: "#f1c40f",
          colors: Array(30).fill("#f1c40f"),
        },
        {
          title: "XANH CÁ TÍNH",
          description: "Phù hợp với gia chủ cá tính và năng động. Phù hợp mệnh MỘC.",
          image: imageUrls.noithatxanh,
          bgColor: "#00bcd4",
          colors: Array(30).fill("#00bcd4"),
        },
        {
          title: "XANH LÁ CÂY",
          description: "Màu của sức sống, tái sinh. Phù hợp mệnh MỘC.",
          image: imageUrls.noithatgreen,
          bgColor: "#27ae60",
          colors: Array(30).fill("#27ae60"),
        },
        {
          title: "ĐỎ MẠNH MẼ",
          description: "Gam màu ấm áp, mạnh mẽ và tràn đầy sinh lực. Phù hợp mệnh HỎA.",
          image: imageUrls.noithatdo,
          bgColor: "#e74c3c",
          colors: Array(30).fill("#e74c3c"),
        },
        {
          title: "XÁM HIỆN ĐẠI ",
          description:
            "Biểu tượng cho sự an toàn chắc chắn. Gia chủ mệnh Kim có thể sử dụng riêng màu này kết hợp với màu nâu vàng theo nghĩa Thổ sinh Kim",
          image: imageUrls.noithatxam,
          bgColor: "#b1babc",
          colors: Array(30).fill("#e2e5e0"),
        },
        {
          title: "XÁM NÂU CỔ ĐIỂN",
          description:
            "Gam màu cổ điển, lưu trữ giá trí bền lâu, mạnh mẽ. Phù hợp mới mệnh Thổ",
          image: imageUrls.noithatnau,
          bgColor: "#ca8b7b",
          colors: Array(30).fill("#f9e6d8"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.palette-section {
  padding: 60px 20px;
  background: white;
}

.palette-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: auto;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .palette-grid {
    grid-template-columns: 1fr 1fr; /* tablet: 2 cột */
  }
}

@media (min-width: 1200px) {
  .palette-grid {
    grid-template-columns: 1fr 1fr 1fr; /* desktop: 3 cột */
  }
}
.note {
  text-align: center;
  color: #666;
  font-size: 14px;
  margin-top: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.note-green {
  text-align: center;
  color: #2d8b38;
  font-weight: bold;
  margin-top: 10px;
}
</style>
