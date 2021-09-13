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
  data() {
    return {
      destination: null,
    };
  },
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },
  },
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
    // To react to param changes we use watch
    this.$watch(
      () => this.$route.params, // function that returns what we want to watch for changes
      this.initData
    );
  },
};
</script>
