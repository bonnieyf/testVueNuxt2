<template>
  <div class="row">
    <component :is="item.template" v-for="item in this.data.components" :key="item.id" :title="item.title" :msg="item.description"></component>
  </div>
</template>

<script>
import FullWidth from "~/components/template/FullWidth";
import LeftToRight from "~/components/template/LeftToRight";
import RightToLeft from "~/components/template/RightToLeft";

export default {
  components:{
    FullWidth,
    LeftToRight,
    RightToLeft
  },
  data(){
    return{
      data: "",
      tempArray: [],
      all: "",
      page: false
    }
  },
  created: function() {
    this.$axios.get("https://gist.githubusercontent.com/kusasen/79df0c07d3224d2caa2040df7367722c/raw/cfff878e186a90c328bd80af9dfa4f391781d7b8/protect.json")
      .then(response => (this.data = response.data));
      
  },
  mounted: function(){
    let currentPath  = this.$route.path
    let importTemplate = this.data.path;

    if(currentPath == importTemplate){
      return this.page = true
    }

    this.$gsap.to(".init-msg",{y:30, duration:1 })

  },
}
</script>