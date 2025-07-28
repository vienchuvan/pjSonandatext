<template>
  <div class="noi-dung">
    <div class="form">
      <h2>Đăng Nhập</h2>
      <form action="" >
        <div class="input-form">
          <span>Tên Người Dùng</span>
          <input
            type="text"
            name=""
            id="username"
            v-model="username"
            placeholder="Nhập tên tài khoản"
          />
        </div>
        <div class="input-form">
          <span>Mật Khẩu</span>
          <input
            type="password"
            name=""
            id="password"
            v-model="password"
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div class="d-flex w-100 justify-content-between">
          <div class="nho-dang-nhap">
            <label style="color: #2d804b"
              ><input type="checkbox" name="" /> Nhớ Đăng Nhập</label
            >
          </div>
          <div class="input-form">
            <p style="color: #2d804b">
              Bạn Chưa Có Tài Khoản? <a href="#">Đăng Ký</a>
            </p>
          </div>
        </div>
        <div class="input-form">
          <input @click="onClickLogin()" value="Đăng Nhập" />
        </div>
      </form>
      <h3>or</h3>
      <ul class="icon-dang-nhap">
        <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
        <li><i class="fa fa-google" aria-hidden="true"></i></li>
        <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
      </ul>
    </div>
  </div>
</template>
<script>
import { postLogin } from "@/assets/js/snapService";

import { useAuthStore } from "@/assets/js/dboard/auth.js";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
  async onClickLogin() {
      try {
        const userStore = useAuthStore();
        console.log("userStore:", userStore);
        const resLogin = await postLogin(this.user, this.pass);
        this.statusCode = resLogin.status;
        userStore.login(resLogin.user);
        this.hideLoading();
        if (this.statusCode == 200) {
          this.showModalAct(1500);
          setTimeout(() => {
            this.$router.push("/dashboard/quantri");
          }, 1500);
        } else {
          this.showModalAct(1500);
        }

        console.log(resLogin);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

