<template>
  <TheNavigation></TheNavigation>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation";
export default {
  components: { TheNavigation },
};
</script>
