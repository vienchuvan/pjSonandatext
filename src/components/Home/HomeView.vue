<template>
  <Layout_Menu_SonAndatex_Home></Layout_Menu_SonAndatex_Home>
  <BannerHome />
  <VeChungToi />
  <ListProduct />
  <BannerHome2 />
   
  <FloattingContact></FloattingContact>
  <Layout_Footer_SonAndatex></Layout_Footer_SonAndatex>
</template>

<script>
import ListProduct from "../Product/ListProduct.vue";
import FloattingContact from "../view/FloattingContact.vue";
import Layout_Footer_SonAndatex from "../view/layout_Footer_SonAndatex.vue";
import Layout_Menu_SonAndatex_Home from "../view/layout_Menu_SonAndatex_Home.vue";
import BannerHome from "./BannerHome.vue";
import BannerHome2 from "./BannerHome2.vue";
import VeChungToi from "./veChungToi.vue";

export default {
  components: {
    Layout_Menu_SonAndatex_Home,
    BannerHome,
    VeChungToi,
    FloattingContact,
    BannerHome2,
    Layout_Footer_SonAndatex,
    ListProduct,
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
   
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
