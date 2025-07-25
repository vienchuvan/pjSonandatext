<template>
  <Layout_Menu_SonAndatex />

  <div class="container py-5" style="margin-top: 5%;">
    <h2 class="text-primary">Liên hệ với chúng tôi</h2>
    <hr class="dotted-line my-3" />

    <div class="row mt-4 g-4">
      <!-- Bản đồ -->
      <div class="col-12 col-md-6">
        <div class="map-wrapper mb-3">
          <iframe
            class="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7454.341971849204!2d105.88555382432975!3d20.905439415315115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b100610eaa35%3A0x218cd59d6901ff12!2zTmjDoCB2xINuIGhvw6EgdGjDtG4gxJDhuqFpIEzhu5k!5e0!3m2!1sen!2s!4v1753452234454!5m2!1sen!2s"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            aria-label="Google Map - Nhà máy sản xuất"
          ></iframe>
        </div>

        <div class="map-wrapper">
          <iframe
            class="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.7061331722743!2d103.22165963650164!3d21.519227569857758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312d6d86cd5194a1%3A0xebec3f93aad1df68!2za2jDtMyBaSA4LCB0dC4gTcaw4budbmcg4bqibmcsIE3GsOG7nW5nIOG6om5nIERpc3RyaWN0LCBEaWVuIEJpZW4sIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1753452510287!5m2!1sen!2s"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            aria-label="Google Map - Văn phòng giao dịch"
          ></iframe>
        </div>
      </div>

      <!-- Thông tin & Liên hệ -->
      <div class="col-12 col-md-6">
        <div class="contact-info">
          <p><strong>Công ty TNHH AN ĐẠT 38</strong></p>
          <p>🏭 Nhà máy SX: Thôn Đại Lộ, Xã Hồng Vân, TP Hà Nội</p>
          <p>🏢 VPGD: Số nhà 487, TDP 8, xã Mường Ảng, Điện Biên</p>
        </div>

        <div class="d-grid gap-3 mt-4">
          <a
            class="btn btn-facebook"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-f me-2"></i> Chat Facebook
          </a>

          <a
            class="btn btn-zalo"
            href="https://chat.zalo.me/?phone=0963888912"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="zalo-icon me-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1024px-Icon_of_Zalo.svg.png"
              alt="Zalo"
            />
            Chat Zalo
          </a>

          <a
            class="btn btn-call"
            href="tel:0963888912"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-phone me-2"></i> Gọi ngay: 0963.888.912
          </a>
        </div>
      </div>
    </div>
  </div>

  <Layout_Footer_SonAndatex />
  <FloattingContact />
</template>


<script>
import FloattingContact from "../view/FloattingContact.vue";
import Layout_Footer_SonAndatex from "../view/layout_Footer_SonAndatex.vue";
import Layout_Menu_SonAndatex from "../view/layout_Menu_SonAndatex.vue";

export default {
  components: {
    FloattingContact,
    Layout_Menu_SonAndatex,
    Layout_Footer_SonAndatex,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {},
};
</script>

<style scoped>
.google-map {
  width: 100%;
  height: 250px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.dotted-line {
  border-bottom: 1px dotted #ccc;
}

.btn-facebook {
  background-color: #1877f2;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  padding: 12px;
}

.btn-zalo {
  background-color: #0180c7;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  padding: 12px;
  display: flex;
  align-items: center;
}

.zalo-icon {
  width: 20px;
  height: 20px;
}

.btn-call {
  background-color: #28a745;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  padding: 12px;
}

@media (max-width: 768px) {
  .google-map {
    height: 200px;
  }

  .btn-zalo,
  .btn-facebook,
  .btn-call {
    font-size: 14px;
    padding: 10px;
  }
}

</style>
