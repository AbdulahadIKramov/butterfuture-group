<template>
  <div class="content">
    <!-- CONTENT LEFT -->
    <div class="content_left">
      <picture>
        <source media="(max-width:565px)"  srcset="../assets/frame500.png" />
        <img src="../assets/frame.png" alt="Frame" class="content_left_img" />
      </picture>
    </div>

    <!-- CONTENT RIGHT -->

    <div class="content_right">
      <div class="title">
        <h2 class="title_1">EDU COOZIN</h2>
        <p class="text_1">
          Онлайн-академия Coozin предоставляет обучение и помощь в развитии
          бизнеса.
        </p>
      </div>
      <div>
        <div class="title_2">
          <div class="flex">
            <img src="../assets/check.png" alt="check" />
            <span>Курсы и мастер-классы</span>
          </div>
          <p class="text_2">
            На платформе доступны онлайн-курсы и мастер-классы по различным
            темам, связанным с бизнесом, такими как управление продажами,
            маркетинг, финансы и другие.
          </p>
        </div>

        <div class="title_2">
          <div class="flex">
            <img src="../assets/check.png" alt="check" />
            <span>Опытные специалисты</span>
          </div>
          <p class="text_2">
            Курсы ведут опытные специалисты, которые делятся своими знаниями и
            опытом.
          </p>
        </div>

        <div class="title_2">
          <div class="flex">
            <img src="../assets/check.png" alt="check" />
            <span>Обучись и начни свое дело</span>
          </div>
          <p class="text_2">
            Пользователи которые успешно прошли курсы имеют возможность
            присоединиться к торговой площадке Coozin.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.content {
  display: flex;
  padding: 0 6.5%;
  margin-top: 100px;
  justify-content: space-between;
  margin-bottom: 50px;
}

.content_left {
    width: 570px;
}
.content_left_img {
    width: 100%;
}

.content_right {
  display: flex;
  flex-direction: column;
}

.title {
  margin-top: 140px;
}

.flex {
  display: flex;
  align-items: center;
  margin-top: 30px;
  color: #374151;

}

.title_1 {
  color: #1f2937;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  margin-bottom: 24px;
}

.text_1 {
  width: 80%;
  color: #374151;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 56px;
}

.text_2 {
  width: 506px;
  color: #374151;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

@media screen and (max-width: 900px) {  
    .content {
        flex-direction: column;
        margin-top: 20px;
    }
    .content_left {
        width: 100%;
    }

    .title {
        margin-top: 24px;
    }

    .flex{
        margin-top: 20px;
    }

    .text_1{
        margin-bottom: 20px;
    }

    .text_2 {
        width: 100%;
    }

}

@media screen and (max-width: 565px) {  
    .content {
        padding: 0 2.5%;
    }
    .content_left {
        width: 100%;
    }

    .title_1 {
      font-size: 22px;
    }

}

</style>
