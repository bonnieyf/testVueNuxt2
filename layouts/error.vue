<template>
  <div class="container">
    <div class="init-msg">
      <h1 v-if="error.statusCode === 404">頁面不存在</h1>
      <h1 v-else>程式發生異常</h1>
      <br>
      <!-- <nuxt-link :to="localePath('/')" class="btn-sweep">{{$t("pages.home")}}</nuxt-link> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'errorPage'
}
</script>