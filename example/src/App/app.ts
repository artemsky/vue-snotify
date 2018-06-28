import Vue from 'vue';
import { SnotifyPosition, SnotifyToast, SnotifyToastConfig } from 'vue-snotify';
import { Component } from 'vue-property-decorator';

import './app.scss';

@Component({
    template: require('./app.html')
})
export class App extends Vue {
  style = 'material';
  title = 'Snotify title!';
  body = 'Lorem ipsum dolor sit amet!';
  timeout = 3000;
  position: SnotifyPosition = SnotifyPosition.rightBottom;
  progressBar = true;
  closeClick = true;
  newTop = true;
  backdrop = -1;
  dockMax = 8;
  blockMax = 6;
  pauseHover = true;
  titleMaxLength = 15;
  bodyMaxLength = 80;
  oneAtTime = false;
  preventDuplicates = false;
  /*
 Change global configuration
  */
  getConfig(): SnotifyToastConfig {
    this.$snotify.setDefaults({
      global: {
        newOnTop: this.newTop,
        maxAtPosition: this.blockMax,
        maxOnScreen: this.dockMax,
        oneAtTime: this.oneAtTime,
        preventDuplicates: this.preventDuplicates,
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
      pauseOnHover: this.pauseHover,
    };
  }

  mapCallbacks(toast: SnotifyToast) {
    toast.on('beforeShow', (toast) => { console.log(`${toast.title} - beforeShow`); });
    toast.on('mounted', (toast) => { console.log(`${toast.title} - mounted`); });
    toast.on('shown', (toast) => { console.log(`${toast.title} - shown`); });
    toast.on('beforeHide', (toast) => { console.log(`${toast.title} - beforeHide`); });
    toast.on('click', (toast) => { console.log(`${toast.title} - click`); });
    toast.on('destroyed', (toast) => { console.log(`${toast.title} - destroyed`); });
    toast.on('hidden', (toast) => { console.log(`${toast.title} - hidden`); });
    toast.on('input', (toast) => { console.log(`${toast.title} - input`); });
    toast.on('mouseenter', (toast) => { console.log(`${toast.title} - mouseenter`); });
    toast.on('mouseleave', (toast) => { console.log(`${toast.title} - mouseleave`); });
  }
  onSuccess() {
    const toast = this.$snotify.success(this.body, this.title, this.getConfig());
    this.mapCallbacks(toast);
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
    /*
      You should pass Promise or Observable of type Snotify to change some data or do some other actions
      More information how to work with observables:
      https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/create.md
     */
    const config = this.getConfig(); // Omit timeout
    this.$snotify.async('Called with promise', 'Error async', () => new Promise((resolve, reject) => {
      setTimeout(() => reject({
        title: 'Error!!!',
        body: 'We got an example error!',
        config: {
          ...config,
          closeOnClick: true,
          timeout: 8000
        }
      }), 2000);
    }));

    this.$snotify.async('Called with promise', 'Success async', () => new Promise((resolve, reject) => {
      setTimeout(() => resolve({
        title: 'Success!!!',
        body: 'We got an example success!',
        config: {
          ...config,
          closeOnClick: true
        }
      }), 2000);
    }));
  }

  onConfirmation() {
    /*
    Here we pass an buttons array, which contains of 2 element of type SnotifyButton
     */
    const {timeout, closeOnClick, ...config} = this.getConfig(); // Omit props what i don't need
    const toast = this.$snotify.confirm(this.body, this.title, {
      ...config,
      buttons: [
        {text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false},
        {text: 'No', action: () => console.log('Clicked: No') },
        {text: 'Later', action: (toast) => {console.log('Clicked: Later'); this.$snotify.remove(toast.id); } },
        {text: 'Close', action: (toast) => {console.log('Clicked: Close'); this.$snotify.remove(toast.id); }, bold: true, className: 'btn-cool'},
      ]
    });
    this.mapCallbacks(toast);
  }

  onPrompt() {
    /*
     Here we pass an buttons array, which contains of 2 element of type SnotifyButton
     At the action of the first button we can get what user entered into input field.
     At the second we can't get it. But we can remove this toast
     */
    const {timeout, closeOnClick, ...config} = this.getConfig(); // Omit props what i don't need
    const toast = this.$snotify.prompt(this.body, this.title, {
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


    this.mapCallbacks(toast);
  }

  onHtml() {
    const html = `<div class="snotifyToast__title"><b>Html Bold Title</b></div>
    <div class="snotifyToast__body"><i>Html</i> <b>toast</b> <u>content</u></div>`;
    this.$snotify.html(html, this.getConfig());
  }


  onClear() {
    this.$snotify.clear();
  }
}
