<template>
  <div class="content">
    <div class="title">
      <h1>Мероприятия</h1>
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
        <div>
          <img src="../assets/c_1.jpg" alt="carul image" />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div>
          <img src="../assets/c_2.jpg" alt="carul image" />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div>
          <img src="../assets/c_3.jpg" alt="carul image" />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div>
          <img src="../assets/c_1.jpg" alt="carul image" />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div>
          <img src="../assets/c_2.jpg" alt="carul image" />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div>
          <img src="../assets/c_3.jpg" alt="carul image" />
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

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
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
