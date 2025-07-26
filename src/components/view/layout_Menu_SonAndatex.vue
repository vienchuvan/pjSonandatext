<template>
  <header>
    <div class="header">
      <section>
        <span class="cross parallelogram">
          <a href="/">
            <img
              src="/img/logo/logoAnDatRM.png"
              class="logo skew-fix"
              alt="LOGO."
          /></a>
        </span>
      </section>
      <section>
        <div class="top-tab">
          <span>
            <a href="tel:0963888912"><i class="fa fa-phone"></i>0963 888 912</a>
            <a href="mailto:support@sonandatex.com.vn">
              <i class="fa fa-envelope"></i> support@sonandatex.com.vn
            </a>
          </span>
          <span>
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a>
          </span>
        </div>

        <div class="topnav" id="myTopnav">
          <a href="/">
            <img
              src="/img/logo/logoAnDatRM.png"
              style="width: 40px"
              id="res_logo"
              alt="LOGO."
          /></a>

          <a href="/" class="active">Trang chủ</a>

          <div class="dropdown">
            <button class="dropbtn" @click="clickSanPham">
              Sản phẩm <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a
                style="font-size: 14px"
                v-for="(item, idx) in productLinks"
                :key="idx"
                :href="'danh-muc/' + item.sortUrl"
              >
                {{ item.tenDanhMuc }}
              </a>
            </div>
          </div>

          <a href="/bang-mau">Bảng màu</a>
          <a href="#about">Tin tức</a>
          <a href="/lien-he">Liên hệ</a>

          <a href="javascript:void(0);" class="icon" @click="toggleMenu"
            >&#9776;</a
          >
        </div>
      </section>
    </div>
  </header>
</template>

<script>
import { imageUrls } from "@/assets/js/imgUrl.js";
import { apiGetDanhMuc } from "@/assets/js/api";
import { header } from "@/assets/js/snapService";
import axios from "axios";

export default {
  name: "LayoutMenuSonAndatexHome",
  data() {
    return {
      imageUrls,
      isScrolled: false,
      productLinks: [],
    };
  },

  mounted() {
    this.fetchDanhMuc();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMenu() {
      const topnav = document.getElementById("myTopnav");
      topnav.classList.toggle("responsive");
    },
    fetchDanhMuc() {
      let data = {
        funcId: 10,
      };
      axios
        .post(apiGetDanhMuc, data, {
          headers: header,
        })
        .then((response) => {
          console.log(response.data);
          this.productLinks = response.data.data;
          console.log("this.danhMuc ", this.danhMuc);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    },
    clickSanPham() {
      this.$router.push({ path: "/san-pham" });
    },
  },
};
</script>
<style scoped>
/*HEADER*/
header {
  width: 100%;
}

.header {
  width: 100%;
  position: relative;
  display: flex;
  align-items: Center;
}

.header section {
  width: 100%;
  overflow: hidden;
}

.header section:nth-child(1) {
  width: 30%;
}

.cross {
  background: #0e2b14;
  display: inline-block;
  font-size: 2em;
  padding: 0.5em 2em;
  text-decoration: none;
  position: absolute;
  left: -5%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39%;
  z-index: 2;
}

.parallelogram {
  transform: skew(-20deg);
}

.skew-fix {
  display: inline-block;
  transform: skew(20deg);
  width: 128px;
}

/* .header .logo {
  filter: brightness(0) invert(1);
  padding: 1rem 2rem;
} */

.top-tab {
  width: 100%;
  background-color: #006317;
  display: flex;
  align-items: center;
  justify-content: Center;
  padding: 0.6rem 1rem;
  padding-left: 10rem;
}

.top-tab span {
  width: 100%;
  text-align: center;
  white-space: nowrap;
}

.top-tab span a {
  margin: 0 10px;
  color: var(--white);
  white-space: nowrap;
}

.top-tab span:nth-child(1) a .fa {
  margin: 0 5px;
}

@media (max-width: 1120px) {
  .header section:nth-child(1) {
    display: none;
  }
  .cross {
    position: static;
  }
  .header .logo {
    width: 100%;
  }
  .top-tab {
    padding-left: 0rem;
  }
  .top-tab span:nth-child(1) {
    display: none;
  }
  .top-tab span:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: Center;
  }
}

/*NAV*/
.topnav {
  /* overflow: hidden; */
  background-color: var(--white);
  padding-left: 10rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  /* margin-bottom: 1rem; */
}

.topnav a {
  float: left;
  display: block;
  color: var(--dark);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 18px;
  margin: 10px 20px;
}

.active {
  color: var(--primary);
}

.topnav .icon {
  display: none;
}

.dropdown {
  float: left;
  /* overflow: hidden; */
}
.dropbtn {
  position: relative;
}
.dropdown .dropbtn {
  font-size: 18px;
  border: none;
  outline: none;
  color: var(--dark);
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 10px 20px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-top: 2px solid var(--primary);
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  margin: 0;
}

.topnav a:hover,
.dropdown:hover .dropbtn {
  background-color: #555;
  color: white;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}

#res_logo {
  display: none;
}

@media screen and (max-width: 1120px) {
  #res_logo {
    display: inline-block;
    width: 200px;
  }
  .topnav a:not(:first-child),
  .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 1120px) {
  .topnav {
    padding-left: 0;
  }
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
    margin: 0px;
  }
  .topnav.responsive #res_logo {
    max-width: 200px;
    min-width: 200px;
  }
  .topnav.responsive .dropdown {
    float: none;
  }
  .topnav.responsive .dropdown-content {
    position: relative;
  }
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
    margin: 0px;
  }
}
</style>
