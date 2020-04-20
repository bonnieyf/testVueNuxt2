<template>
  <div id="container">
    <Header />
    <div class="init-msg">
      <!-- <h1 class="title">{{ $t("About.AboutUs")}}</h1>
      <h2 class="subtitle">{{ $t("About.AboutUsDesc") }}</h2> -->

      <div class="links">
          <nuxt-link :to="localePath('/')" class="btn-sweep">A</nuxt-link>
          <nuxt-link :to="localePath('/protect')" class="btn-sweep">B</nuxt-link>
          <nuxt-link :to="localePath('/connect')" class="btn-sweep">C</nuxt-link>
          <nuxt-link :to="localePath('/product')" class="btn-sweep">D</nuxt-link>
          
      </div>
    </div>
    <nuxt />

    <Footer/>
  </div>
</template>

<script>

import Header from "~/components/Header";
import Footer from "~/components/Footer";
import {sleep} from "~/assets/js/tool.js"

export default {
  components:{
    Header,
    Footer
  },
  async asyncData(){
    await sleep(1000);
  },
}

</script>