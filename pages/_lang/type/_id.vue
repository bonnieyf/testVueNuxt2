
<template>
    <div class="center">
        <nuxt-link class="btn-sweep btn-sweep-black" :to="{ path: localePath('product')}">Back</nuxt-link>
        <div class="products grid-2_xs-1">
            <div class="col">
                <img src="https://picsum.photos/seed/picsum/500/500" alt="">
            </div>
            <div class="col">
                <div class="info">
                    <h1>{{ post.title }}</h1>
                    <pre>{{ post.body }}</pre>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
      async asyncData({ params }) {
       		 let { data } = await 
             axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        	return { post: data }
      },
      head() {
      		return {
                title: this.post.title
            }
      }
}
</script>