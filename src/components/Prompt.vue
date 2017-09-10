<template>
  <span class="snotifyToast__input" :class="{'snotifyToast__input--filled': isPromptFocused}">
    <input @input="valueChanged"
           class="snotifyToast__input__field" type="text"
           :id="id"
           @focus="isPromptFocused = true"
           @blur="isPromptFocused = !!length"/>
    <label class="snotifyToast__input__label" :for="id">
      <span class="snotifyToast__input__labelContent">{{placeholder | truncate}}</span>
    </label>
  </span>
</template>

<script>
  export default {
    props: ['placeholder'],
    data () {
      return {
        id: 545,
        isPromptFocused: false,
        length: 0
      }
    },
    methods: {
      valueChanged (e) {
        const value = e.target.value.trim();
        this.length = value.length;
        this.$emit('valueChanged', value)
      }
    }
  }
</script>
