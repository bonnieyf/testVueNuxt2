
<template>
    <div class="center">
        <router-link class="btn-sweep btn-sweep-black" :to="{ name: 'lang-product'}">Back</router-link>
        <br><br>
        <div class="products grid-2_xs-1">
            <div class="col">
                <img src="https://picsum.photos/seed/picsum/500/500" alt="">
            </div>
            <div class="col">
                <div class="info">
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.body }}</p>
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