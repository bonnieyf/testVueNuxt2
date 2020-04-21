<template>
  <div class="container">
    <div class="init-msg">
      <h1 v-if="error.statusCode === 404">頁面不存在</h1>
      <h1 v-else>程式發生異常</h1>
      <br>
      <router-link :to="{ name: 'lang'}" class="btn-sweep">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'errorPage'
}
</script>