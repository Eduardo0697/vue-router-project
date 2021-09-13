<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
    propTest: { type: String },
  },
  data() {
    return {
      destination: null,
    };
  },
  // computed: {
    // destinationId() {
    //   return parseInt(this.$route.params.id);
    // },
  // },
  methods: {
    async initData() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      const response = await fetch(
        `https://travel-dummy-api.netlify.app/${this.$route.params.slug}.json`
      );
      this.destination = await response.json();
    },
  },
  async created() {
    this.initData();
    // // To react to param changes we use watch
    // this.$watch(
    //   () => this.$route.params, // function that returns what we want to watch for changes
    //   this.initData
    //
    // To the second approach we will use vue keys, this is because every time a key changes in a component, vue will
    // destroy the currently rendered component that the key is applied to and then re-render form scratch
    // So we can assign the router-view a key attribute with the value of the route-path in App.js
    // The downside is that it does take a little more js computation a the component is completely destroyed and re-rendered


  },
};
</script>
