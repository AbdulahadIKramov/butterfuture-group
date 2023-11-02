<template>
    <div class="content">
        <div class="footer">
    <img class="logo" src="../assets/coozin.svg" alt="logo" />
    <ul class="collections">
      <li class="item"><a href="#">О нас</a></li>
      <li class="item"><a href="#">Почему Coozin?</a></li>
      <li class="item"><a href="#">Присоединиться</a></li>
      <li class="item"><a href="#">Мероприятия</a></li>
    </ul>
    <div class="brend">
      <span> При поддержке </span>

      <img src="../assets/cola.svg" alt="coca cola" />
      <img src="../assets/osce.svg" alt="osce" />
    </div>
    <div class="support">
      <p class="sup_text">При поддержке</p>
      <p class="line"></p>
      <div class="icons">
        <button class="icon">
          <i class="fa-brands fa-instagram"></i>
        </button>
        <button class="icon">
          <i class="fa-brands fa-facebook"></i>
        </button>

        <button class="icon">
          <i class="fa-brands fa-youtube"></i>
        </button>
      </div>
      <img class="logo_2" src="../assets/coozin.svg" alt="logo" />
    </div>
    <p style="text-align: center; width: 100%;">2023 Coozin. All Rights Reserved</p>
  </div>
    </div>
</template>

<script setup></script>

<style scoped>
.footer {
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
}

.collections {
  display: flex;
  gap: 42px;
}

.item {
  color: var(--gray-800, #1f2937);
  font-size: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; 
}

.brend {
  display: flex;
  gap: 32px;
}

.support {
  display: flex !important;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.sup_text {
  text-transform: uppercase;
  color: #1F2937;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.icon {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 2px solid #1f2937;
}

.logo_2 {
  display: none;
}
.line {
  width: 64px;
height: 1px;
background: #1F2937;
}

@media screen and (max-width: 565px) {

  .footer {
    align-items: start;
  }
  .logo {
    display: none;
  }

  .collections {
    flex-direction: column;
    width: 100%;
  }

  .item {
    border-bottom: 1px solid #999;
    padding:  20px  0 5px 0;
  }

  .brend {display: none;}

  .sup_text {
  display: none;
}
.line {
  display: none;
}

.support {
  width: 100%;
  justify-content: space-between;
}

.icon {
  font-size: 18px;
  height: 40px;
  width: 40px;
}

.logo_2 {
  display: inline;
}


}



</style>
