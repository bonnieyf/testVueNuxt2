<template>
  <div class="txt-template fullwidth height80 grid">
    <div class="col-12">
      <div class="txt-info color-white txt-align-right">
        <h3>{{title}}</h3>
        <p>{{msg}}</p>

        <div class="txt-info-btn">
          <a href="#" class="btn-sweep btn-sweep-white">了解更多</a>
        </div>
      </div>
    </div>
    <div class="txt-img">
      <img src="~assets/imgs/template-img3.jpg" :alt="msg">
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