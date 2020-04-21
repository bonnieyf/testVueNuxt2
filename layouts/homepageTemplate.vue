<template>
  <div class="row">
    <component :is="item.template" v-for="item in this.data.components" :key="item.id" :title="$t('Home.Banner1Title')" :msg="$t('Home.Banner1Subtitle')"></component>
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
    this.$axios.get("https://gist.githubusercontent.com/kusasen/c08eeeee562306fe2da6772085ec63a7/raw/127e02e3e932a27bfdcf3b0fe4445944a90502fc/homepage.json")
      .then(response => (this.data = response.data));
      
  },
  mounted: function(){
    let currentPath  = this.$route.path
    let importTemplate = this.data.path;

    if(currentPath == importTemplate){
      return this.page = true
    }

  },
  
}
</script>