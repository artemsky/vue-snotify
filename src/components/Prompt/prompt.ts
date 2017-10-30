import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import {SnotifyToast} from '../../SnotifyToast.model';

@Component({
    template: require('./prompt.html'),
    props: ['toast']
})
export class SnotifyPrompt extends Vue {
  toast: SnotifyToast;
  isPromptFocused = false;
  valueChanged (e) {
    this.toast.value = e.target.value;
    this.toast.eventEmitter.$emit('input');
  }
}
