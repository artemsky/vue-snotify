<template>
  <div class="snotifyToast__buttons">
    <button type="button"
            v-for="button in buttons"
            :class="{'snotifyToast__buttons--bold': button.bold}"
            @click="button.action && button.action(id, value)">
      {{button.text}}
    </button>
  </div>
</template>

<script>
  export default {
    props: ['buttons', 'value', 'id']
  }
</script>
