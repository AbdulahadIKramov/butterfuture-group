<template>
  <div class="conetent">
    <div class="contect_left">
      <h1 class="title">Готовы присоединиться и развиваться вместе с нами?</h1>
      <p class="text">Заполните форму, и мы свяжемся с вами!</p>

      <div class="contact_inp">
        <div>
          <label for="name">Имя</label><br />
          <input type="text" id="name" />
        </div>

        <div>
          <label for="surname">ИФамилиямя</label><br />
          <input type="text" id="surname" />
        </div>
      </div>

      <div class="contact_inp">
        <div>
          <label for="tel">Номер телефона</label><br />
          <input type="number" id="tel" maxlength="12" placeholder="+998"/>
        </div>

        <div>
          <label for="direction">Направление</label><br />
          <input type="text" id="direction" />
        </div>
      </div>

      <div class="contact_inp">
        <div>
          <label for="Город">Город</label><br />
          <input type="text" id="Город" />
        </div>

        <div>
          <label for="Район">Район</label><br />
          <input type="text" id="Район" />
        </div>
      </div>

      <div class="contact_inp">
        <button class="btn">Отправить</button>
      </div>

    </div>
    <div class="content_right">
      <img src="../assets/contact_img.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.conetent {
  width: 100%;
  padding: 0 6.5%;
  display: flex;
}
.title {
  width: 80%;
  margin-top: 170px;
  color: #1f2937;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px;
  margin-bottom: 32px;
}

.text {
  color: #374151;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 27px;
}
.contect_left {
  width: 65%;
  padding-left: 3.5%;
}

.content_right {
  width: 35%;
  margin-top: 70px;
}

.contact_inp {
  display: flex;
  gap: 28px;
  margin-bottom: 28px;
  width: 85%;
  justify-content: center;
}


label {
  color: #374151;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 8px;
  cursor: pointer;
}

input {
  width: 348px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--gray-300, #d1d5db);
  background: var(--white, #fff);
  text-indent: 12px;
  font-size: 16px;
  color: #374151;
  cursor: pointer;
}


.btn {
    width: 345px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

@media screen and (max-width: 800px) {
    
    .contect_left {
        width: 100%;
        padding: 0;
    }

    .title {
        font-size: 20px;
        margin-top: 80px;
        line-height: 32px;
    }
    .text {
        font-size: 16px;
    }

    .contact_inp {
        flex-direction: column;
        width: 100%;
    }

    input{
        width: 100%;
    }

    .btn {
        width: 100%;
    }
    .content_right {
        display: none;
    }
}

</style>
