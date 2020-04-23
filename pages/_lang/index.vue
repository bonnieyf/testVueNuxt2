<template>
  <div>
    <!-- <h2>{{$t('About.AboutUs')}}</h2> -->
    <!-- <homepageTemplate :langText="this.GET_I18NJSON"></homepageTemplate> -->
    <test :msg="this.get_msg"></test>
  </div>
</template>

<script>
import { LANG_FUNCTION } from "~/lang/lang.js";
import homepageTemplate from "~/layouts/homepageTemplate";

import test from "~/components/template/test";

export default {
  layout: 'defult',
  mixins: [LANG_FUNCTION],
  components:{
    homepageTemplate,
    test
  },
  computed:{
    get_msg(){
      return this.$store.state.i18nJSON
    }
  }
};
</script>
