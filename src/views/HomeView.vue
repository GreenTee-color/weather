
<template>
  <div>
    <div class="block">
      <el-cascader v-model="value" :options="options" :props="{ expandTrigger: 'hover' }" @change="handleChange" 
      placeholder="请选择/搜索城市" filterable
      >
      </el-cascader>
    </div>
    <div><button @click="getweather">点击获取天气</button></div>
  </div>
</template>
<script>

import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
export default {
  data() {
    return {
      value: [],
      options:  regionData,
      addressAll: [],
      weathData: {},
    };
  },
  methods: {
    handleChange(value) {
      for(var i=0;i<value.length; i++){
        this.addressAll[i]=CodeToText[value[i]];
      }
      console.log(this.addressAll);
    },
    getweather(){
      console.log('获取天气');
      console.log(this.$api.getCityWeather(15));
    }
  }
};
</script>