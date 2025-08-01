<template>
  <div class="color-group">
    <div class="color-header" :style="{ backgroundColor: bgColor }">
      <div class="color-text pl-4 text-justify">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <img :src="image" alt="Màu sắc minh họa" class="color-img" />
    </div>

    <div class="color-squares mt-3">
      <div v-for="(color, i) in displayColorsFull" :key="i" class="color-square-wrapper">
        <div
          class="color-square"
          :style="{ backgroundColor: color.hex }"
          :title="color.hex"
        ></div>
        <div class="color-code">{{ color.code }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { jsonBangMauVang } from "@/assets/js/json/jsonBangMauVang";
import { jsonBangMauDo } from "@/assets/js/json/jsonBangMauDo";
import { jsonBangMauGreen } from "@/assets/js/json/jsonBangMauGreen";
import { jsonBangMauXanhDaTroi } from "@/assets/js/json/jsonBangMauXanhDaTroi";
import { jsonBangMauNau } from "@/assets/js/json/jsonBangMauNau";
import { jsonBangMauXam } from "@/assets/js/json/jsonBangMauXam";

export default {
  name: "ColorGroup",
  props: {
    title: String,
    description: String,
    image: String,
    colors: Array,
    bgColor: String,
  },
  data() {
    return {
      yellowColors: jsonBangMauVang,
      redColor: jsonBangMauDo,
      greenColor:jsonBangMauGreen,
      xanhDaTroi:jsonBangMauXanhDaTroi,
      mauXam:jsonBangMauXam,
      mauNau:jsonBangMauNau
    };
  },
  computed: {
    displayColorsFull() {
      if (this.colors && this.colors.includes("#f1c40f")) {
        return this.yellowColors;
      } else if (this.colors && this.colors.includes("#e74c3c")) {
        return this.redColor;
      }else if (this.colors && this.colors.includes("#27ae60")) {
        return this.greenColor;
      }else if (this.colors && this.colors.includes("#00bcd4")) {
        return this.xanhDaTroi;
      }else if (this.colors && this.colors.includes("#f9e6d8")) {
        return this.mauNau;
      }else if (this.colors && this.colors.includes("#e2e5e0")) {
        return this.mauXam;
      }
      if (Array.isArray(this.colors)) {
        return this.colors.map((hex) => ({ code: hex, hex }));
      }
      return [];
    },
  },
  
};
</script>

<style scoped>
.color-group {
  /* border: 1px solid #ddd; */
  border-radius: 30px;
  overflow: hidden;
}

.color-header {
  display: flex;
  color: white;
  /* padding: 20px; */
  border-radius: 30px;
  align-items: center;
  justify-content: space-between;
}

.color-text {
  width: 50%;
}

.color-text h3 {
  margin: 0 0 10px;
  font-size: 18px;
  text-transform: uppercase;
}

.color-text p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.color-img {
  width: 45%;
  height: auto;
  border-radius: 30px;
  object-fit: cover;
}

.color-squares {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}
.color-square-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.color-square {
  width: 100%;
  padding-top: 70%;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 1px solid #ccc;
  position: relative;
}
.color-code {
  margin-top: 6px;
  font-size: 13px;
  color: #333;
  text-align: center;
  word-break: break-all;
}

.color-square {
  width: 100%;
  /* height: 31px; */
  padding-top: 70%;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 1px solid #ccc;
  position: relative;
}

.color-square::after {
  content: "";
  position: absolute;
  inset: 0;
}
</style>
