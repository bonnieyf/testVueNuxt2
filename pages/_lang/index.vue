<template>
  <div>
    <h2></h2>
    <!-- <homepageTemplate></homepageTemplate> -->
  </div>
</template>

<script>
import { LANG_FUNCTION } from "~/lang/lang.js";
import homepageTemplate from "~/layouts/homepageTemplate";

export default {
  layout: 'defult',
  mixins: [LANG_FUNCTION],
  components:{
    homepageTemplate
  },
};
</script>
