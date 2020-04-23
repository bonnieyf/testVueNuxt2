<template>
  <div id="container">
    <Header />
    <!-- <div class="init-msg">
      <h1 class="title">{{$t('Home.Banner1Title')}}</h1>
      <h2 class="subtitle">{{$t('Home.Banner1Subtitle')}}</h2>
      
      <div class="links">
          <router-link :to="{ name: 'lang'}" class="btn-sweep">Home</router-link>
          <router-link :to="{ name: 'lang-protect'}" class="btn-sweep">{{$t('Home.Category1')}}</router-link>
          <router-link :to="{ name: 'lang-connect'}" class="btn-sweep">{{$t('Home.Category2')}}</router-link>
          <router-link :to="{ name: 'lang-product'}" class="btn-sweep">{{$t('Home.Category3')}}</router-link>
      </div>
    </div> -->
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