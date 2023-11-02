<template>
    <div>
		<LandingNavbar/>
    <LandingMenu/>
    <LandingEduCoozin/>
    <LandingWhyUs/>
    <LandingCantact/>
    <LandingCarucel/>
    <LandingOurWorker/>
    <LandingFooter/>
       <div>
        <img class="imge_vector" src="../assets/vector.png" alt="">
       </div>
    
    </div>
</template>

<script setup>

import LandingEduCoozin from '../components/LandingEduCoozin.vue';
import LandingMenu from '../components/LandingMenu.vue';
import LandingNavbar from '../components/LandingNavbar.vue';
import LandingWhyUs from '../components/LandingWhyUs.vue';
import LandingCantact from '../components/LandingCantact.vue'
import LandingCarucel from '../components/LandingCarucel.vue';
import LandingOurWorker from '../components/LandingOurWorker.vue';
import LandingFooter from '../components/LandingFooter.vue';
	
</script>

<style scoped>
    .imge_vector {
      position: absolute;
      top: 0;
      right: 0px;
      object-fit: cover;
    }

    @media screen and (max-width: 850px) {
      .imge_vector {
        display: none;
      }
    }
</style>