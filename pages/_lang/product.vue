<template>
  <div class="center">
    <div class="products grid-3_xs-1">
      <div class="col" v-for="(post,idx) in posts" :key="idx">
        <nuxt-link :to="{ name: `lang-type-id___${$i18n.locale}` ,params: {id: post.id ,lang: $i18n.locale} }">
          <img src="https://picsum.photos/seed/picsum/500/500" alt="">
          <div class="info">
            <h3>{{ post.title }}</h3>
            <span>{{ post.body }}</span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
   asyncData({ req, params }) {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          return { posts: res.data.slice(0, 5) }
    })
	}
};
</script>
