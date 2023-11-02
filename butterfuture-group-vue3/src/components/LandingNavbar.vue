<template>
   <!-- SHADOW -->
   <div>
      <div class="shadow" :class="openMenu ? 'block' : ''"></div>

    <div class="navbar">
      <!-- BURGER -->
      <button @click="openMenu = true" class="burger">
        <img src="../assets/menu.svg" alt="" />
      </button>
      <!-- LOGO -->
      <div class="logo">
        <img src="../assets/logo.svg" alt="logo" />
      </div>
      <!-- COLLECTIONS -->
      <ul class="collections" :class="openMenu ? 'active' : ''">
        <li @click="openMenu = false" class="">
          <i class="fa-solid fa-xmark close"></i>
        </li>
        <li class="item">
          <a href="#">{{ $t("captions.about_us") }}</a>
        </li>
        <li class="item"><a href="#">Edu Coozin</a></li>
        <li class="item"><a href="#">Почему Coozin?</a></li>
        <li class="item"><a href="#">Мероприятия</a></li>
        <li class="item">
          <button class="btn item_btn">Присоединиться</button>
        </li>
      </ul>

      <!-- BUTTON vs LANGUAGE -->
      <div class="login">
        <div class="lang">
         <div class="lang_2">
            <span>En</span>
            <span>Ru</span>
         </div>
         <div>
            Uz
         </div>
        </div>

        <button class="btn none">Присоединиться</button>
      </div>
    </div>
   </div>
</template>

<script setup>
   import { ref } from "vue";
   const openMenu = ref(false);
</script>

<style scoped>

.navbar {
  width: 100%;
  height: 90px;
  padding-left:  6.5%;
  padding-right:  6.5%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  backdrop-filter: blur(10px);
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
}
.burger {
  display: none;
}
.collections {
  width: 50%;
  display: flex;
  gap: 2rem;
  background-color: #fff;
  color: #374151;
}

.item:hover {
  color: dodgerblue;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

/* LANGUAGE */
.lang {
   background-color: #F3F4F6;
   color: #1F2937;
   display: flex;
   justify-content: right;
   gap: 2rem;
   padding: 8px 0;
   padding-right: 14px;
   font-size: 16px;
   border-radius: 16px;
   transition: .3s;
   width: 45px;
   position: relative;
}
.lang_2 {
   display: flex;
   gap: 2rem;
   display: none;
   position: absolute;
   right: 0;
}

.lang:hover {
   display: flex;
   width: 150px;
}

.lang:hover .lang_2 {
   display: flex;
   right: 60px;
}

.shadow {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0000009c;
  display: none;
  overflow: hidden;
}
.block {
  display: block;
}

.close {
  display: none;
}
.item_btn {
  display: none;
}

/* MEDIA */

@media screen and (max-width: 850px) {
  .none {
    display: none;
  }

  .burger {
    display: inline;
    cursor: pointer;
    border: none;
    font-size: 24px;
    transition: 0.3s;
    background: none;
  }

  .burger:hover {
    font-size: 28px;
    transform: scale(1.1);
  }

  .collections {
    position: fixed;
    flex-direction: column;
    top: 0;
    left: -100%;
    width: 80%;
    height: 450px;
    padding-left: 40px;
    transition: 0.5s;
    padding-top: 30px;
    z-index: 999;
    border-radius: 0 0 10px 0;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  .item_btn {
   display: block;
  }
  .close {
    display: block;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;
    height: 40px;
  }

  .close:hover {
    transform: scale(1.03);
    font-size: 28px;
  }

  .active {
    left: 0;
  }
}


@media screen and (max-width: 500px) {
  .navbar {
    padding: 0 2.5%;
  }
}
</style>
