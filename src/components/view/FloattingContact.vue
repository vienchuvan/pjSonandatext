<template>
  <a>
    <button class="btn-floating scroll-to-top" @click="scrollToTop">
      <i class="fa fa-angle-double-up" aria-hidden="true"></i>
    </button>
  </a>
  <a href="tel:0963888912">
    <button class="btn-floating phone">
      <img src="https://i.imgur.com/FZuns9L.png" alt="Phone">
      <span>0963.888.912</span>
    </button>
  </a>

  <a href="https://chat.zalo.me/?phone=0963888912" target="_blank">
    <button class="btn-floating whatsapp">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1024px-Icon_of_Zalo.svg.png" width="20px" alt="Zalo">
      <span>0963.888.912</span>
    </button>
  </a>
</template>

<script>
import { imageUrls } from "@/assets/js/imgUrl";

export default {
  data() {
    return {
      imageUrls: imageUrls
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>
<style scoped>
/* Base */
.btn-floating:hover img {
  margin-bottom: -3px
}

.btn-floating {
    position: fixed;
    right: 25px;
    overflow: hidden;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: 0;
    z-index: 9999;
    color: white;
    transition: .2s;
}

.btn-floating:hover {
    width: auto;
    padding: 0 20px;
    cursor: pointer;
}

.btn-floating span {
    font-size: 16px;
    margin-left: 5px;
    transition: .2s;
    line-height: 0px;
    display: none;
}

.btn-floating:hover span {
    display: inline-block;
}
.btn-floating.scroll-to-top {
  bottom: 145px; /* Đặt vị trí phía trên nút điện thoại */
  background-color: #0a9343;
}


/* Phone */
.btn-floating.phone {
    bottom: 85px;
    background-color: #a8191b;
}

.btn-floating.phone:hover {
    background-color: #c03421;
}

/* WhatsApp */
.btn-floating.whatsapp {
    background-color: #13aad8;
    bottom: 25px;
}

.btn-floating.whatsapp:hover {
    background-color: #13aad8
}
</style>