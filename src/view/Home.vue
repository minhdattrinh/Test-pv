<template>
  <div>
    <Packets />
    <About />
    <FaqContent />
  </div>
</template>

<script>
import Packets from "@/components/HomePage/Packets.vue";
import About from "@/components/HomePage/About.vue";
import FaqContent from "@/components/FaqContent.vue";

export default {
  name: "Home-view",
  components: { Packets, About, FaqContent },
};
</script>

<style>
body {
}
</style>
