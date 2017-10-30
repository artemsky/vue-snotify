import Vue from 'vue';
import {SnotifyPosition/*, SnotifyAction*/} from 'vue-snotify';
import { Component } from 'vue-property-decorator';

import './app.scss';

@Component({
    template: require('./app.html')
})
export class App extends Vue {

  style= 'material';
  title= 'Snotify title!';
  body= 'Lorem ipsum dolor sit amet!';
  timeout= 3000;
  position= SnotifyPosition.rightBottom;
  progressBar= true;
  closeClick= true;
  newTop= true;
  backdrop= -1;
  dockMax= 6;
  blockMax= 3;
  pauseHover= true;
  maxHeight= 300;
  titleMaxLength= 15;
  bodyMaxLength= 80;
  /**
   * Change global configuration
   */
  getConfig() {
    this.$snotify.setDefaults({
      global: {
        newOnTop: this.newTop,
        maxAtPosition: this.blockMax,
        maxOnScreen: this.dockMax,
      }
    });
    return {
      bodyMaxLength: this.bodyMaxLength,
      titleMaxLength: this.titleMaxLength,
      backdrop: this.backdrop,
      position: this.position,
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    };
  }
  onSuccess () {
    this.$snotify.success(this.body, this.title, this.getConfig());
  }

  onInfo() {
    this.$snotify.info(this.body, this.title, this.getConfig());
  }
  onError() {
    this.$snotify.error(this.body, this.title, this.getConfig());
  }
  onWarning() {
    this.$snotify.warning(this.body, this.title, this.getConfig());
  }
  onSimple() {
    // const icon = `assets/custom-svg.svg`;
    const icon = `https://placehold.it/48x100`;

    this.$snotify.simple(this.body, this.title, {
      ...this.getConfig(),
      icon: icon
    });
  }

  onAsyncLoading() {
    // eslint-disable-next-line
    // const {timeout, ...config} = this.getConfig(); // Omit timeout

    this.$snotify.async('This will resolve with success', 'Async toast 1',
      // You should pass Promise of type SnotifyConfig to change some data or do some other actions
      () => new Promise((resolve) => {
        setTimeout(() => resolve({
          title: 'Success',
          body: 'Example. Data loaded!',
          config: {
            closeOnClick: true,
          }
        }), this.timeout);
      })
    );
    this.$snotify.async('This will resolve with error', 'Async toast 2',
      // You should pass Promise of type SnotifyConfig to change some data or do some other actions
      () =>  new Promise((resolve, reject) => {
        setTimeout(() => reject({
          title: 'Error',
          body: 'Server error example!',
          config: {
            closeOnClick: true,
            timeout: this.timeout,
            showProgressBar: true,
            pauseOnHover: true,
          }
        }), this.timeout);
      })
    );
  }

  onConfirmation() {
    // eslint-disable-next-line
    const {timeout, closeOnClick, ...config} = this.getConfig(); // Omit props what i don't need
    /*
    Here we pass an buttons array, which contains of 2 element of type SnotifyButton
     */
    this.$snotify.confirm(this.body, this.title, {
      ...config,
      buttons: [
        {text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false},
        {text: 'No', action: () => console.log('Clicked: No')},
        {
          text: 'Later', action: (toast) => {
            console.log('Clicked: Later');
            this.$snotify.remove(toast.id);
          }
        },
        {
          text: 'Remove', action: (toast) => {
            console.log('Clicked: Close');
            this.$snotify.remove(toast.id);
          }, bold: true
        },
      ]
    });
  }

  onPrompt() {
    // eslint-disable-next-line
    const {timeout, closeOnClick, ...config} = this.getConfig(); // Omit props what i don't need
    /*
     Here we pass an buttons array, which contains of 2 element of type SnotifyButton
     At the action of the first button we can get what user entered into input field.
     At the second we can't get it. But we can remove this toast
     */
    this.$snotify.prompt(this.body, this.title, {
      ...config,
      buttons: [
        {text: 'Yes', action: (toast) => console.log('Said Yes: ' + toast.value) },
        {text: 'No', action: (toast) => { console.log('Said No: ' + toast.value); this.$snotify.remove(toast.id); }},
      ],
      placeholder: 'Enter "ng-snotify" to validate this input' // Max-length = 40
    }).on('input', (toast) => {
      console.log(toast.value);
      toast.valid = !!toast.value.match('ng-snotify');
    });
  }

  onHtml() {

    this.$snotify.html(`<div class="snotifyToast__title"><b>Html Bold Title</b></div>
            <div class="snotifyToast__body"><i>Html</i> <b>toast</b> <u>content</u></div> `, this.getConfig());
  }


  onClear() {
    this.$snotify.clear();
  }
}
