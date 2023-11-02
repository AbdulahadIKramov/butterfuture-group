<template>
  <div class="vector">
    <img class="img_vector"  src="../assets/vector.png" alt="Vector" />
  </div>
  <div class="content">
    <h1 class="title">Почему Coozin?</h1>
    <div class="why_us">
      <div class="descriptions">
        <img width="140px" height="140px" src="../assets/1.png" alt="rocet" />
        <p class="des_title">
          <b> Универсальная платформа </b>
        </p>
        <p>
          Предназначенная для самозанятых женщин превратить свое хобби в
          прибыльный бизнес
        </p>
      </div>
      <div class="descriptions">
        <img width="140px" height="140px" src="../assets/2.png" alt="biznes" />
        <p class="des_title">
          <b>Обучение и бизнес </b>
        </p>
        <p>
          Женщины экономят время и ресурсы, которые могут быть направлены на
          развитие своего бизнеса
        </p>
      </div>
      <div class="descriptions">
        <img
          width="140px"
          height="140px"
          style="margin-bottom: 5px"
          src="../assets/3.png"
          alt="earnings"
        />
        <p class="des_title">
          <b> Дополнительный заработок </b>
        </p>
        <p>
          Домохозяйки могут стать партнерами нашего проекта и получить
          инструменты для управления своим бизнесом.
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.vector {
    position: absolute;
    height: 1450px;
    overflow: hidden;
}
.content {
  widows: 100%;
  padding: 0 6.5%;
  display: flex;
  flex-direction: column;
  min-height: 540px;
}

.title {
  text-align: center;
  margin-top: 100px;
  color: #1f2937;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
}

.why_us {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  padding: 0 100px;
}

.descriptions {
  text-align: center;
  width: 25%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4b5563;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
}

.des_title {
  margin-bottom: 12px;
}
@media screen and (max-width: 800px) {

    .vector {
        display: none;
    }
    .content {
        padding: 0 5%;
        height: 100vh;
    }
    .why_us {
        flex-direction: column;
        padding: 0;
    }

    .title {
        margin-top: 32px;
        font-size: 22px;
    }

    .descriptions {
        width: 100%;
        margin-bottom: 30px;
    }
}
</style>
