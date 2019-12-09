<template>
  <button :class="'i-button-size' + size" :disabled="disabled" @click="handClick">
    <slot name="icon"></slot>
    <slot>按钮</slot>
  </button>
</template>

<script>
// 判断参数是否是其中之一
function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

export default {
  name: 'i-button',
  inheritAttrs: false,
  inject: ['app'],
  props: {
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handClick (event) {
      this.$emit('on-click', event)
    }
  },
  mounted () {
    this.$on('on-click', (event) => {
      console.log('i-button on self', event)
    })
  }
}
</script>
