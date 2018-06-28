<template>
<span class="snotifyToast__input" :class="{'snotifyToast__input--filled': isPromptFocused}">
    <input @input="valueChanged"
           class="snotifyToast__input__field" type="text"
           :id="toast.id"
           @focus="isPromptFocused = true"
           @blur="isPromptFocused = !!toast.value.length"/>
    <label class="snotifyToast__input__label" :for="toast.id">
      <span class="snotifyToast__input__labelContent">{{toast.config.placeholder | truncate}}</span>
    </label>
  </span>

</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: ['toast'],
    data() {
      return {
        isPromptFocused: false,
      }
    },
    methods: {
      valueChanged (e) {
        this.toast.value = e.target.value;
        this.toast.eventEmitter.$emit('input');
      }
    }
  })

</script>
