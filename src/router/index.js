import BangMau from '@/components/BangMau/BangMau.vue';
import DboardQuanTri from '@/components/Dboard/DboardQuanTri.vue';
import HomeView from '@/components/Home/HomeView.vue';
import ProductDetail from '@/components/Product/ProductDetail.vue';
import { createRouter, createWebHistory } from 'vue-router'

import BlogGioiThieu from '@/components/Dboard/BlogGioiThieu.vue';
import LoginVue from '@/components/Dboard/LoginVue.vue';
import ListSanPhamTheoDanhMuc from '@/components/GioiThieu/ListSanPhamTheoDanhMuc.vue';
import LienHe from '@/components/GioiThieu/LienHe.vue';
import ListProduct from '@/components/GioiThieu/ListProduct.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:nameProduct',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/danh-muc/:nameDanhMuc',
    name: 'nameDanhMuc',
    component: ListSanPhamTheoDanhMuc,
  },
  // {
  //   path: '/gio-hang.html',
  //   name: 'cart',
  //   component: Cart
  // },
  // {
  //   path: '/giohang',
  //   name: 'ListCart',
  //   component: ListCart
  // },
  // {
  //   path: '/du-an-hoan-thien',
  //   name: 'DuAnTrienKhaiVue',
  //   component: DuAnTrienKhaiVue
  // },
  {
    path: '/san-pham',
    name: 'sanpham',
    component: ListProduct
  },

  {
    path: '/lien-he',
    name: 'lienhe',
    component: LienHe
  },
  {
    path: '/dangnhap',
    name: 'Login',
    component: LoginVue
  },
  {
    path: '/dashboard/quantri', name: 'quantri', 
  
    component: DboardQuanTri
  },
  {
    path: '/bai-viet/:shortUrl', name: 'baiviet', component: BlogGioiThieu
   },
   {
    path: '/bang-mau', name: 'BangMaMau', component: BangMau
   },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
