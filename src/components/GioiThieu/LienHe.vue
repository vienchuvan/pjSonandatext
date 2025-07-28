<template>
  <Layout_Menu_SonAndatex />

  <section class="contact-section py-5 mt-5">
    <div class="container">
      <h2 class="section-title1 animate__animated animate__fadeInDown">
        Liên hệ với chúng tôi
      </h2>
      <hr class="section-divider" />

      <div class="row mt-4 g-4">
        <!-- BẢN ĐỒ -->
        <div class="col-md-6">
          <div
            class="map-wrapper animate__animated animate__fadeInLeft animate__delay-1s"
          >
            <iframe
              class="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7454.341971849204!2d105.88555382432975!3d20.905439415315115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b100610eaa35%3A0x218cd59d6901ff12!2zTmjDoCB2xINuIGhvw6EgdGjDtG4gxJDhuqFpIEzhu5k!5e0!3m2!1sen!2s!4v1753452234454!5m2!1sen!2s"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              aria-label="Google Map - Nhà máy sản xuất"
            ></iframe>
          </div>

          <div
            class="map-wrapper animate__animated animate__fadeInLeft animate__delay-2s mt-3"
          >
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

        <!-- THÔNG TIN & LIÊN HỆ -->
        <div
          class="col-md-6 animate__animated animate__fadeInRight animate__delay-1s"
        >
          <div class="contact-info">
            <h4 class="fw-bold mb-2">CÔNG TY TNHH AN ĐẠT 38</h4>
            <p>
              <i class="fa fa-industry me-2 text-primary"></i>🏭 Nhà máy SX:
              Thôn Đại Lộ, Xã Hồng Vân, TP Hà Nội
            </p>
            <p>
              <i class="fa fa-building me-2 text-primary"></i>🏢 VPGD: Số nhà
              487, TDP 8, xã Mường Ảng, Điện Biên
            </p>
          </div>
          <p class="text-justify mt-3">
            Trong hành trình phát triển ngành xây dựng và hoàn thiện không gian
            sống, sơn không chỉ đơn thuần là lớp phủ bảo vệ bề mặt – mà còn là
            yếu tố quyết định đến
            <strong> thẩm mỹ, độ bền và giá trị của công trình.</strong> Thấu
            hiểu điều đó, <strong> CÔNG TY TNHH AN ĐẠT 38</strong> đã cho ra đời
            thương hiệu <strong>SƠN ANDATEX </strong> – giải pháp sơn toàn diện,
            mang sứ mệnh
            <strong
              >góp phần nâng tầm chất lượng không gian sống của người
              Việt.</strong
            >
          </p>

          <div class="d-grid gap-3 mt-4">
            <a class="btn btn-contact btn-facebook" href="#">
              <i class="fa fa-facebook-f me-2"></i> Chat Facebook
            </a>

            <a
              class="btn btn-contact btn-zalo"
              href="https://chat.zalo.me/?phone=0963888912"
              target="_blank"
            >
              <img
                class="zalo-icon me-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1024px-Icon_of_Zalo.svg.png"
                alt="Zalo"
              />
              Chat Zalo
            </a>

            <a class="btn btn-contact btn-call" href="tel:0963888912">
              <i class="fa fa-phone me-2"></i> Gọi ngay: 0963.888.912
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

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
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.contact-section {
  background: #f9f9f9;
}

.section-title1 {
  color: #004aad;
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
}

.section-divider {
  border: none;
  height: 3px;
  background: linear-gradient(to right, #1877f2, #0180c7, #28a745);
  width: 150px;
  margin: 0 auto 30px auto;
}

.google-map {
  width: 100%;
  height: 250px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}

.contact-info p {
  margin-bottom: 0.5rem;
  font-size: 16px;
}

.btn-contact {
  font-size: 16px;
  padding: 14px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.btn-facebook {
  background: #1877f2;
  color: white;
}

.btn-zalo {
  background: #0180c7;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.zalo-icon {
  width: 20px;
  height: 20px;
}

.btn-call {
  background: #28a745;
  color: white;
}

@media (max-width: 768px) {
  .google-map {
    height: 200px;
  }

  .section-title1 {
    font-size: 1.5rem;
  }

  .btn-contact {
    font-size: 14px;
    padding: 12px;
  }
}
</style>
