<template>
  <div class="content-iframe">
    <iframe
      :src="this.$store.getters.gamelink"
      responsive-iframe
      width="100%"
      height="100%"
      allowfullscreen
      style="border: none"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
