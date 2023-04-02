<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="column q-pa-md">
        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        />
      </div>
      <div class="column"><IndexDevCarousel /></div>
    </div>
  </q-page>
</template>

<script setup>
import IndexDevCarousel from "components/IndexDevCarousel.vue";
</script>
