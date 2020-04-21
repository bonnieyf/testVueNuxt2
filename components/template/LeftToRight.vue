<template>
  <div class="txt-template left2right height70 grid">
      <div class="col-4">
        <div class="txt-info color-black txt-align-right">
          <h3>{{title}}</h3>
          <p>{{msg}}</p>

          <div class="txt-info-btn">
            <a href="#" class="btn-sweep btn-sweep-black">了解更多</a>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="txt-img">
          <img src="~assets/imgs/template-img1.jpg" :alt="msg">
        </div>
      </div>
  </div>
</template>


<script>
  export default {
    props: {
      title: '',
      msg: '',
    },
  };
</script>