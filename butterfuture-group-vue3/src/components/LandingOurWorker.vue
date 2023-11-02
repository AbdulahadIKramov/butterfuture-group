<template>
  <div class="content">
    <div class="title">
      <h1>Наши довольные вендоры</h1>
    </div>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '340': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }"
      :modules="modules"
    >
      <swiper-slide>
        <div class="card">
          <div class="card_title">
            <img src="../assets/quote.svg" alt="carul image" />
          </div>
          <div class="text">
            When our designs need an expert opinion or approval, I know I can
            rely on your agency Thank you for all your help-I will be
            recommending you to everyone
          </div>
        </div>

        <div class="image">
            <img src="../assets/worker_1.png" alt="carul image" />
            <p><b>Name</b></p>
            <p>Designation</p>
          </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <div class="card_title">
            <img src="../assets/quote.svg" alt="carul image" />
          </div>
          <div class="text">
            When our designs need an expert opinion or approval, I know I can
            rely on your agency Thank you for all your help-I will be
            recommending you to everyone
          </div>
        </div>

        <div class="image">
            <img src="../assets/worker_2.png" alt="carul image" />
            <p><b>Name</b></p>
            <p>Designation</p>
          </div>
      </swiper-slide> 
      <swiper-slide>
        <div class="card">
          <div class="card_title">
            <img src="../assets/quote.svg" alt="carul image" />
          </div>
          <div class="text">
            When our designs need an expert opinion or approval, I know I can
            rely on your agency Thank you for all your help-I will be
            recommending you to everyone
          </div>
        </div>

        <div class="image">
            <img src="../assets/worker_3.png" alt="carul image" />
            <p><b>Name</b></p>
            <p>Designation</p>
          </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSwiper } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
      useSwiper,
    };
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  padding: 0 6.5%;
  margin-top: 150px;
}

.title {
  text-align: center;
  margin-bottom: 60px;
}

.title h1 {
  color: #1f2937;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
}
.card {
    display: flex;
padding: 48px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
align-self: stretch;
border-radius: 16px;
background: var(--gray-100, #F3F4F6);
}

.text{ 
    color: var(--gray-700, #374151);
text-align: center;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%;
}
.image {
    margin-top: 45px;
}


@media screen and (max-width: 768px) {
  .content {
    margin-top: 28px;
  }
  .title h1 {
    font-size: 22px;
  }
}
</style>
