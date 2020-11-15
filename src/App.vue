<template>
  <div>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    this.$http("/api/all.json").then((res) => {
      console.log(res.data);
    });
  },
};
</script>

<style>
</style>
