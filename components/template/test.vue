<template>
  <div>
    <div class="txt-template right2left height70 grid">
    <div class="col-8">
      <div class="txt-img">
        <img src="~assets/imgs/template-img2.jpg" :alt="msg">
      </div>
    </div>
    <div class="col-4">
      <div class="txt-info color-black txt-align-right">
        <h3>{{msg.Home.ShopNow}}</h3>
        <p>{{msg.Footer.FlagshipStores}}</p>

        <div class="txt-info-btn">
          <a href="#" class="btn-sweep btn-sweep-black">了解更多</a>
        </div>
      </div>
    </div>
  </div>
  <div class="txt-template right2left height70 grid">
    <div class="col-4">
      <div class="txt-info color-black txt-align-right">
        <h3>{{msg.CategoryPage.FilterName}}</h3>
        <p>{{msg.CategoryPage.ProductNotFoundWithFilter}}</p>

        <div class="txt-info-btn">
          <a href="#" class="btn-sweep btn-sweep-black">了解更多</a>
        </div>
      </div>
    </div>
    <div class="col-8">
      <div class="txt-img">
        <img src="~assets/imgs/template-img2.jpg" :alt="msg">
      </div>
    </div>
  </div>
  <div class="txt-template right2left height70 grid">
    <div class="col-8">
      <div class="txt-img">
        <img src="~assets/imgs/template-img2.jpg" :alt="msg">
      </div>
    </div>
    <div class="col-4">
      <div class="txt-info color-black txt-align-right">
        <h3>{{msg.Account.EmailConfirm}}</h3>
        <p>{{msg.Account.EmailValidation}}</p>

        <div class="txt-info-btn">
          <a href="#" class="btn-sweep btn-sweep-black">了解更多</a>
        </div>
      </div>
    </div>
  </div>
  <div class="txt-template right2left height70 grid">
    <div class="col-4">
      <div class="txt-info color-black txt-align-right">
        <h3>{{msg.Account.AddressList}}</h3>
        <p>{{msg.Account.AccountBindingInquiry}}</p>

        <div class="txt-info-btn">
          <a href="#" class="btn-sweep btn-sweep-black">了解更多</a>
        </div>
      </div>
    </div>
    <div class="col-8">
      <div class="txt-img">
        <img src="~assets/imgs/template-img2.jpg" :alt="msg">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    props: {
      msg:{
        type: Object,
        default(){
          return []
        }

      }
    },
  };
</script>