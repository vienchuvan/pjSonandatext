<template>
<Layout_Menu_SonAndatex></Layout_Menu_SonAndatex>
  <div class="wrapper row3 mt-5" style="padding-top: 50px">
    <main class="hoc container clear bv ">
      <div style="min-height: 500px " class="padding-top15">
        <div
          class="title-bai-viet"
          style="color: rgb(23, 162, 184); font-size: 30px; font-weight: 600"
          v-html="titleHeThong"
        ></div>
        <div v-html="contentHeThong" class="conntent-bai-viet mt-4"></div>
      </div>
      <ListProduct></ListProduct>

    </main>
  </div>
  <Layout_Footer_SonAndatex></Layout_Footer_SonAndatex>
  <FloattingContact></FloattingContact>
</template>

<script>
import { apiBaiViet } from "@/assets/js/api";
import axios from "axios";
import { imageUrls } from "@/assets/js/imgUrl";
import ListProduct from "../Product/ListProduct.vue";
import Layout_Menu_SonAndatex from "../view/layout_Menu_SonAndatex.vue";
import Layout_Footer_SonAndatex from "../view/layout_Footer_SonAndatex.vue";
import FloattingContact from "../view/FloattingContact.vue";


export default {
  components: { Layout_Menu_SonAndatex, Layout_Footer_SonAndatex,FloattingContact, ListProduct},
  data() {
    return {
      isMenuVisible: false,
      imageUrls: imageUrls,
      lang: "",
      base64: "",
      base64Title: "",
      //title
      titleHeThong: "",
      //content
      contentHeThong: "",
      hasMounted: false,
      shortURL: "",
    };
  },

  mounted() {
    if (!this.hasMounted) {
      this.hasMounted = true;
      this.shortURL = this.$route.params.shortURL.split('andatex')[0];
      console.log("this.$route.params.shortURL; ", this.$route.params.shortURL.split('andatex')[0]);

      if (this.lang) {
        // Kiểm tra giá trị của this.lang trước khi sử dụng
        this.$router.push({
          path: "/bai-viet/" + this.shortURL,
        });
      }
    }
    this.performPostRequest(this.shortURL);
  },

  methods: {
    toggleMenu() {
      this.isMenuVisible = true;
    },

    async performPostRequest(shortURL) {
      try {
        const response = await axios.post(apiBaiViet, {
          funcId: 11,
          id: shortURL,
        });
console.log("response ", response);

        this.base64 = response.data.data[0].content;
        this.base64Title = response.data.data[0].title;
        console.log(" this.base64Title ", response.data.data);
        console.log(" this.base64Title ", response.data.data[0].title);

        this.titleHeThong = this.base64Title;
        this.$nextTick(() => {
          this.contentHeThong =
            `<div class="content-bai-viet">` +
            this.base64 +
            `</div>`;
        });

        console.log("this.titleHeThong ", this.titleHeThong);
      } catch (error) {
        console.error("Error:", error);
      }
    },
    decodeBase64(encodedString) {
      var decode = atob(encodedString);
      decode = decodeURIComponent(escape(decode));
      return decode;
    },
  },
};
</script>
<style scoped>
.f-s--title {
  font-size: 16.4px;
}
::v-deep(.content-bai-viet) {
  color: rgb(22, 23, 24);
  text-align: justify !important;
}
::v-deep(.content-bai-viet h3),
::v-deep(.content-bai-viet h2),
::v-deep(.content-bai-viet a),
::v-deep(.content-bai-viet div),
::v-deep(.content-bai-viet p) {
  text-align: justify !important;
  color: rgb(15, 16, 17) !important;
}
::v-deep(.content-bai-viet img) {
  width: 100% !important;
}
</style>
