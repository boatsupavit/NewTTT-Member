<template>
  <div class="d-flex justify-content-center">
    <div
      v-show="loading"
      class="lds-default"
      :style="{ width: `${size}px`, height: `${size}px` }"
    >
      <div
        v-for="i in 12"
        :key="`lds-default-${i}`"
        v-bind:style="[spinnerStyle, divsStyles[i - 1]]"
      />
    </div>
  </div>
</template>

<script>
import validateDuration from '../helpers/validateDuration.js'
import calcPropertyValue from '../helpers/calcPropertyValue.js'

export default {
  name: 'DefaultLoader',
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    size: {
      type: Number,
      default: 80,
    },
    color: {
      type: String,
      default: '#ffbd09',
    },
    duration: {
      type: String,
      default: '1.2s',
      validator: validateDuration,
    },
  },
  data() {
    return {
      spinnerStyle: {
        background: this.color,
        animationDuration: this.duration,
      },
    }
  },
  computed: {
    divsStyles() {
      const divsStyles = []
      for (let i = 1; i <= 12; i++) {
        divsStyles.push(
          calcPropertyValue(
            'animationDelay',
            this.duration,
            0.083 * (13 - i) - 1,
          ),
        )
      }
      return divsStyles
    },
  },
}
</script>

<style scoped>
@import './../styles/_spinner.css';
</style>
