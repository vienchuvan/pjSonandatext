<template>
  <menuShop></menuShop>
  <div class="container mt-intro" >
    <div class="row">
      <div class="col-lg-2 p-0 h-auto mb-30 danh-muc">
        <table class="rwd-table p-1">
          <tbody>
            <tr>
              <th>DANH MỤC</th>
            </tr>
            <tr v-for="item in danhMuc" :key="item.idDanhMuc">
              <td class="p-1" style="font-size: 13px" data-th="Supplier Code">
                <a style="color: black;" :href='"/danh-muc/" + item.sortUrl'>  {{ item.tenDanhMuc }} </a>
             
              
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-4 mb-30">
        <div id="product-carousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner bg-light">
            <div class="carousel-item active">
              <img class="w-100 h-100" alt="Image" :src="'https://sonandatex.com.vn/uploads/'+product.imgSP" />
            </div>
            <div class="carousel-item">
              <img class="w-100 h-100" alt="Image" :src="'https://sonandatex.com.vn/uploads/'+product.imgSP" />
            </div>
            <div class="carousel-item">
              <img class="w-100 h-100" alt="Image" :src="'https://sonandatex.com.vn/uploads/'+product.imgSP" />
            </div>
            <div class="carousel-item">
              <img class="w-100 h-100" alt="Image" :src="'https://sonandatex.com.vn/uploads/'+product.imgSP" />
            </div>
          </div>
          <input name="" id="imgProduct" v-model="product.imgSP" hidden />
          <a class="carousel-control-prev" href="#product-carousel" data-slide="prev">
            <i class="fa fa-2x fa-angle-left text-dark"></i>
          </a>
          <a class="carousel-control-next" href="#product-carousel" data-slide="next">
            <i class="fa fa-2x fa-angle-right text-dark"></i>
          </a>
        </div>
      </div>

      <div class="col-lg-6 h-auto mb-30">
        <div class="h-100 bg-light p-30 d-flex flex-column align-items-sm-baseline">
          <h3>{{ product.tenSP }}</h3>
          <input name="" id="id" v-model="product.id" hidden />
          <input name="" id="nameProduct" v-model="product.tenSP" hidden />

          <div class="d-flex mb-3 flex-column">
            <strong class="pt-1">{{ product.tenSP }} {{ product.maSP }}</strong>
            <small class="pt-1" style="text-align: justify"> * {{ product.mota }}</small>
          </div>

          <!-- Hiển thị thông tin của item được chọn -->
          <div v-if="selectedItem" style="text-align: justify">
            <p class="font-weight-semi-bold mb-2" style="color: red">
              <strong>Giá bán:</strong> {{ formatCurrency(selectedItem.giaBan) }}
            </p>
            <p class="cut-text">
              <strong>Định mức:</strong> {{ selectedItem.dinhMuc }} m2/thùng
            </p>
          </div>
          <!-- <div class="d-flex align-items-center mb-4 pt-2" v-for="item in productDetail" :key="item.id">
            <button 
              class="btn btn-primary px-3 border-radius-10"
              type="button"
            > {{ item.quyCach }} - {{ item.giaBan +"  Vnđ" }} - {{ item.dinhMuc + "m2/thùng" }} 
              <i class="fa fa-shopping-cart mr-1"></i> 
            </button>
          </div> -->

          <!-- Cam kết từ chúng tôi -->
        

         


          <div class="d-flex">
            <div
              class="align-items-center mb-4 pt-2 ml-2"
              v-for="item in productDetail"
              :key="item.id"
            >
              <button
                class="btn btn-primary px-3 border-radius-10"
                type="button"
                @click="selectItem(item)"
              >
                {{ item.quyCach }}
                <i class="fa fa-shopping-cart mr-1"></i>
              </button>
            </div>
          </div>

          <div class="d-flex flex-column w-100">
            <div class="d-flex m-auto w-100">
              <button
                class="btn btn-primary-face px-3 w-50 border-radius-10"
                type="button"
              >
                <i class="fab fa-facebook-f mr-1"></i
                ><a style="color: white" href="#" target="_blank">Chat Facebook </a>
              </button>

              <a
                class="btn btn-primary-zalo px-3 w-50 border-radius-10"
                type="button"
                style="margin-left: 10px"
                href="https://chat.zalo.me/?phone=0963888912"
                target="_blank"
              >
                <img
                  class="img-icon"
                  src="https://vimass.vn/vmbank/services/media/getImage?id=iconzalo.png"
                />
                Chat Zalo
              </a>
            </div>

            <div class="d-flex m-auto w-100">
              <a
                class="btn btn-primary-live px-3 w-100 mt-2 border-radius-10"
                href="tel:0963888912"
                target="_blank"
                type="button"
              >
                <i class="fa fa-phone-square" aria-hidden="true"></i> Liên hệ trực tiếp :
                0963.888.912
              </a>
            </div>
          </div>
  <div class="commitment-box mb-3 mt-3">
            <div class="commitment-header">
              <strong>CAM KẾT TỪ CHÚNG TÔI</strong>
            </div>
            <ul class="commitment-list mt-2 mb-0 pl-0">
              <li>
                <span class="commitment-icon">✔️</span>
                Chất lượng sản phẩm tốt &amp; hàng chính hãng 100%
              </li>
              <li>
                <span class="commitment-icon">✔️</span>
                Hỗ trợ vận chuyển cho đơn hàng
              </li>
              <li>
                <span class="commitment-icon">✔️</span>
                Đội ngũ tư vấn nhiệt tình, chuyên nghiệp
              </li>
              <li>
                <span class="commitment-icon">✔️</span>
                Nhận những ưu đãi đặc biệt khi trở thành nhà phân phối
              </li>
            </ul>
          </div>
          <div class="d-flex pt-2">
            <strong class="text-dark mr-2">Share: </strong>
            <div class="d-inline-flex">
              <a class="text-dark px-2" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="text-dark px-2" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="text-dark px-2" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="text-dark px-2" href="">
                <i class="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
   <ListProduct></ListProduct>
  <FloattingContact></FloattingContact>
  <Layout_Footer_SonAndatex></Layout_Footer_SonAndatex>
  
</template>

<style></style>
<script>

import axios from "axios";
// eslint-disable-next-line no-unused-vars
import { apiDanhMuc, apiGetDanhMuc, apiSanPham , apiGetSanPham} from "@/assets/js/api";
// eslint-disable-next-line no-unused-vars
import SlideProduct from "./SlideProduct.vue";
import { header } from "@/assets/js/snapService";
import FloattingContact from '../view/FloattingContact.vue';
import menuShop from "../view/layout_Menu_SonAndatex.vue";
import Layout_Footer_SonAndatex from "../view/layout_Footer_SonAndatex.vue";
import ListProduct from "./ListProduct.vue";


export default {
  components: {
    // headerShop,
    menuShop,
    ListProduct,
    Layout_Footer_SonAndatex,
     FloattingContact,
  },
  name: "ProductDetail",

  data() {
    return {
      // product: {},
      product: {
        id: "",
        tenSP: "",
        imgSP: "",
      },
      productDetail: {},
      danhMuc: "",
      selectedItem: null, // Biến lưu trữ item được chọn
    };
  },
  created() {
    const nameProduct = this.$route.params.nameProduct;
    console.log("nameProduct ", nameProduct);

    this.fetchProductByName(nameProduct);
  },

  mounted() {
    this.fetchDanhMuc();
  },

  methods: {
    formatCurrency(value) {
      if (!value) return "0 Vnđ";
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
    selectItem(item) {
      this.selectedItem = item; // Gán item được chọn vào biến selectedItem
    },
    fetchDanhMuc() {
       let data= {
        funcId:10
      }
      axios
        .post(apiGetDanhMuc, data,   {
          headers: header,
        })
        .then((response) => {
          console.log(response.data);
          this.danhMuc = response.data.data;
          console.log("this.danhMuc ", this.danhMuc);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    },

    async fetchProductByName(shortURL) {
      var parts = shortURL.split("vnk");
      // var idDanhMuc = parts[0]; // "1"
      var tenSP = decodeURIComponent(parts[1]);

      console.log({
        funcId: 15,
        searchTerm: tenSP,
        // idDanhMuc: idDanhMuc,
      });

      try {
        const response = await axios.post(apiGetSanPham, {
          funcId: 15,
          searchTerm: tenSP,
          // idDanhMuc: String(idDanhMuc).replace('-', ''),
        });
       console.log("this.product ", response.data);
        this.product = response.data.data[0];

        this.fetchProductDetal(this.product.id);
      } catch (error) {
        console.error("Error:", error);
      }
    },

    async fetchProductDetal(id) {
    

      try {
        const response = await axios.post(apiGetSanPham, {
          funcId: 17,
          id: id,
        });
        this.productDetail = response.data.data[0].quycach;
        if (this.productDetail.length > 0) {
          this.selectedItem = this.productDetail[0];
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style scoped>
.mt-intro{
  margin-top: 5%;
}
  .commitment-box {
            border: 2px solid #003087;
            border-radius: 10px;
            background: #fff;
            padding: 16px 20px 10px 20px;
            max-width: 100%;
          }
          .commitment-header {
            background: #003087;
            color: #fff;
            text-align: center;
            font-weight: bold;
            border-radius: 6px 6px 0 0;
            padding: 8px 0;
            font-size: 17px;
            letter-spacing: 1px;
          }
          .commitment-list {
            list-style: none;
          }
          .commitment-list li {
            display: flex;
            align-items: center;
            font-size: 15px;
            margin-bottom: 7px;
          }
          .commitment-icon {
            color: #f44356;
            font-size: 18px;
            margin-right: 8px;
          }
.rwd-table {
  margin: auto;
  max-width: 100%;
  border-collapse: collapse;
}

.rwd-table tr:first-child {
  border-top: none;
  background: #428bca;
  color: #fff;
}

.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: #f5f9fc;
}

.rwd-table tr:nth-child(odd):not(:first-child) {
  background-color: #ebf3f9;
}

.rwd-table th {
  display: none;
}

.rwd-table td {
  display: block;
}

.rwd-table td:first-child {
  margin-top: 0.5em;
}

.rwd-table td:last-child {
  margin-bottom: 0.5em;
}

.rwd-table td:before {
  content: attr(data-th) ": ";
  font-weight: bold;
  width: 120px;
  display: inline-block;
  color: #000;
}

.rwd-table th,
.rwd-table td {
  text-align: left;
}

.rwd-table {
  color: #333;
  border-radius: 0.4em;
  overflow: hidden;
}

.rwd-table tr {
  border-color: #bfbfbf;
}

.rwd-table th,
.rwd-table td {
  padding: 0.5em 1em;
}
@media screen and (max-width: 601px) {
  .rwd-table tr:nth-child(2) {
    border-top: none;
  }
  .mt-intro{
  margin-top: 20%;
}
}
@media (max-width: 576px) {
  .danh-muc {
    display: none;
  }
  .mt-intro{
  margin-top: 20%;
}
}
@media screen and (min-width: 600px) {
  .rwd-table tr:hover:not(:first-child) {
    background-color: #d8e7f3;
  }
  .rwd-table td:before {
    display: none;
  }
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: 0.25em 0.5em;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
  .rwd-table th,
  .rwd-table td {
    padding: 1em !important;
  }

}
</style>
