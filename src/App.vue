<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import store from './store/index.js'

export default {
  store,
}
</script>

<style lang="css">
@import 'styles/style.css';
</style>
