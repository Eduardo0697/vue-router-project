<template>
  <TheNavigation></TheNavigation>
  <div class="container">
    <router-view v-slot="{ Component }" mode="out-in">
      <transition name="slide">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation";
export default {
  components: { TheNavigation },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
