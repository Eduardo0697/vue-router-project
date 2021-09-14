<template>
  <section v-if="destination">
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>
</template>

<script>
// import sourceData from "../data.json";
export default {
  props: {
    id: { type: Number, required: true },
    experienceSlug: { type: String, required: true },
    slug: { type: String },
  },
  data() {
    return {
      destination: null,
    };
  },
  computed: {
    // destination() {
    //   return sourceData.destinations.find(
    //     (destination) => destination.id === this.id
    //   );
    // },
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug === this.experienceSlug
      );
    },
  },
  methods: {
    async initData() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      const response = await fetch(
        `https://travel-dummy-api.netlify.app/${this.slug}.json`
      );
      this.destination = await response.json();
    },
  },
  async created() {
    this.initData();
  },
};
</script>
