<template>
  <div>
    <!-- <h2>{{$t('About.AboutUs')}}</h2> -->
    <homepageTemplate :langText="this.get_msg"></homepageTemplate>

    <!-- test clearTitleComponent -->
    <!-- <component :is="item.name" v-for="item in this.datas" :key="item.id" :componentText="item.properties"></component> -->
  </div>
</template>

<script>
import { LANG_FUNCTION } from "~/lang/lang.js";
import homepageTemplate from "~/layouts/homepageTemplate";
import ClearTitleComponent from "~/components/template/ClearTitleComponent";

import test from "~/components/template/test";

export default {
  layout: 'defult',
  mixins: [LANG_FUNCTION],
  components:{
    homepageTemplate,
    test,
    ClearTitleComponent
  },
  computed:{
    get_msg(){
      return this.$store.state.i18nJSON
    }
  },
  // data(){
  //   return{
  //     datas: ''
  //   }
  // },
  // async asyncData ({ $axios, store }) {
  //   let id = store.getters.GET_LOCALE_ID;
  //   let api_url = `DynamicPage/campaign/${id}/component-test`;
  //   return await $axios.$get(`/api/${api_url}`)
  //     .then((res) => {
  //       return {datas: res}
  //     })
  // }
};
</script>
