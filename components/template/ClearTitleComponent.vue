<template>
  <div class="txt-template fullwidth height80 grid">
    <div class="col-12">
      <div class="txt-info color-white txt-align-right">
        <h3>{{componentText.textTitle}}</h3>
        <p>{{componentText.textDescription}}</p>
      </div>
    </div>
    <div class="txt-img">
      <img src="~assets/imgs/template-img3.jpg">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      componentText: '',
      name: '',
    },
  };
</script>