<template>
  <div class="snotifyToast__buttons">
    <button type="button"
            v-for="button in toast.config.buttons"
            :class="[{'snotifyToast__buttons--bold': button.bold}, button.className]"
            @click.prevent.stop="button.action ? button.action(toast) : remove()">
      {{button.text}}
    </button>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: ['toast'],
    methods: {
      remove() {
        this.$snotify.remove(this.toast.id);
      }
    }
  })
</script>

<style lang="scss">

</style>
