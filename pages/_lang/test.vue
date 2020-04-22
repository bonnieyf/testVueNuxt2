<template>
    <div>
      <component :is="item.name" v-for="item in this.datas" :key="item.id" :componentText="item.properties"></component>
    </div>
</template>



<script>
import ClearTitleComponent from "~/components/template/ClearTitleComponent";

export default {
  components:{
    ClearTitleComponent
  },
  data(){
    return{
      datas: ''
    }
  },
  asyncData ({ $axios }) {
    let api_url = `DynamicPage/campaign/1/component-test`;
    return $axios.$get(`/api/${api_url}`)
      .then((res) => {
        return {datas: res}
      })
  }

};
</script>
