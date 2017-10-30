import Vue from 'vue';
import {SnotifyService} from '../../SnotifyService';
import { Component } from 'vue-property-decorator';
import {SnotifyToast} from '../../SnotifyToast.model';

@Component({
  template: require('./button.html'),
  props: ['toast']
})
export class SnotifyButton extends Vue {
  toast: SnotifyToast;
  remove() {
    SnotifyService.remove(this.toast.id);
  }
}
