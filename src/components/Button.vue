<template>
  <div class="snotifyToast__buttons">
    <button type="button"
            v-for="button in toast.config.buttons"
            :class="{'snotifyToast__buttons--bold': button.bold}"
            @click="button.action ? button.action(toast) : remove()">
      {{button.text}}
    </button>
  </div>
</template>

<script>
  import SnotifyService from '../SnotifyService'

  export default {
    props: ['toast'],
    methods: {
      remove() {
        SnotifyService.remove(this.id);
      }
    }
  }
</script>
