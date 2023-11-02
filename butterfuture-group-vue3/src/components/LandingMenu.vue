<template>
  <!-- CONTENT LEFT -->
  <div class="content">
    <div class="content_left">
      <div class="content_text">
        <h1 class="title">Раскрой свой потенциал вместе с Coozin!</h1>
        <p class="text">
          Универсальная платформа Coozin предоставляют множество возможностей
          для самозанятых женщин. На платформе можно продавать товары и услуги,
          а также учиться новым навыкам и развивать свой бизнес
        </p>
        <button class="btn">Присоединиться</button>
      </div>
      <div class="content_left_bottom">
        <p style="margin-bottom: 20px">Достижения</p>
        <div class="collectins">
          <div class="item">
            <h2>1K</h2>
            <span
              >женщин прошли <br />
              обучение</span
            >
          </div>
          <div class="item">
            <h2>130K</h2>
            <span
              >присоединились <br />
              в платформу</span
            >
          </div>
          <div class="item">
            <h2>1K</h2>
            <span
              >пользователей <br />
              платформы</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- CONTENT RIGHT -->

    <div class="content_right">
      <div class="image">
        <img class="img_1" src="../assets/image-01.png" alt="" />
        <img class="img_2" src="../assets/image-02.png" alt="" />
      </div>
      <div class="image">
        <img class="img_2" src="../assets/image-03.png" alt="" />
        <img class="img_1" src="../assets/image-04.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.content {
  display: flex;
}

/* CONTENT LEFT */

.content_left {
  width: 50%;
  margin-top: 125px;
  padding-left: 6.5%;
}

.title {
  width: 90%;
  font-weight: 600;
  color: #1f2937;
  line-height: 48px;
  font-size: 40px;
  margin-bottom: 12px;
}
.text {
  width: 93%;
  color: #4b5563;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.32px;
  margin-bottom: 45px;
}

/* content left bottom */

.content_left_bottom {
  margin-top: 130px;
}

.collectins {
  width: 80%;
  display: flex;
  justify-content: space-between;
}

.item h2 {
  color:  #1f2937;
  font-family: sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 40px;
}

.item span {
  color:  #374151;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; 
}

/* CONTENT RIGTH */
.content_right {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content_right .image img {
  margin-top: 10px;
  padding-right: 20px;
}

/* MEDIA */

@media screen and (max-width: 900px) {
  .content {
    flex-direction: column-reverse;
  }

  .content_left_bottom {
    display: none;
  }

  .content_left {
    width: 100%;
  }

  .content_right {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
  }

  .image .img_1 {
    width: 70%;
    height: 270px;
  }

  .image .img_2 {
    width: 30%;
    height: 270px;
  }
}

@media screen and (max-width: 500px) {
    .content_left {
        margin-top: 10px;
        padding: 0 2.5%;
    }
    .title {
    font-size: 25px;
    line-height: 32px;
  }

  .text {
    margin-bottom: 24px;
  }

  .btn {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    margin-top: 0px;
  }


  .content_right {
    padding-left: 10px;
  }
  .image .img_1 {
    width: 70%;
    height: 178px;
  }

  .image .img_2 {
    width: 30%;
    height: 178px;
  }
  .content_right .image img {
    margin-top: 0px;
    padding-right: 10px;
  }

 
  

}
</style>
