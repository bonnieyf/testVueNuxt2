<template>
  <div class="center">
    <!-- <div class="products grid-3_xs-1">
      <div class="col" v-for="(post,idx) in posts" :key="idx">
        <nuxt-link :to="{ name: 'lang-type-id' ,params: {id: post.id ,lang: $i18n.locale} }">
          <img src="https://picsum.photos/seed/picsum/500/500" alt="">
          <div class="info">
            <h3>{{ post.title }}</h3>
            <span>{{ post.body }}</span>
          </div>
        </nuxt-link>

      </div>
    </div> -->

    <!-- {{datas}} -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // asyncData({ req, params }) {
  // return axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //       return { posts: res.data.slice(0, 5) }
  // })
  // },
  data(){
    return{
      datas: ''
    }
  },
  // asyncData () {
  //   return axios.get(`/api/CategoryFilter/skuCard`,{
  //     headers: {
  //       "X-Country-Id": 'gGFQgQDyENbap0wNCos4dw==',
  //       "X-Site-Id": 'emu1p7U6zAP5WSXXoFWqfA=='
  //     }
  //   })
  //     .then((res) => {
  //       console.log(res)
  //       // return {datas: res}
  //     }).catch(error=>{console.log('error:'+error)})
  // }
};
</script>
