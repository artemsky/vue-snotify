import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import {SnotifyToast} from '../SnotifyToast/toast.model';

@Component({
  template: require('./button.html'),
  props: ['toast']
})
export class SnotifyButton extends Vue {
  toast: SnotifyToast;
  remove() {
    this.$snotify.remove(this.toast.id);
  }
}
