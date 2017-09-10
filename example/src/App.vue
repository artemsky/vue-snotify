<template>
  <div class="wrapper">
    <aside>
      <h3 class="text-center">Toast config</h3>

      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="title" type="text" id="title" class="form-control">
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <textarea v-model="body" id="body" rows="2" class="form-control"></textarea>
      </div>
      <div class="row">
        <div class="col-xs-6">
          <div class="form-group">
            <label for="titlemaxlen">Title max-length</label>
            <input v-model.number="titleMaxLength" type="text" min="0" id="titlemaxlen" class="form-control">
          </div>
        </div>
        <div class="col-xs-6">
          <div class="form-group">
            <label for="bodymaxlen">Body max-length</label>
            <input v-model.number="bodyMaxLength" type="text" min="0" id="bodymaxlen" class="form-control">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6">
          <div class="form-group">
            <label for="timeout">Timeout</label>
            <input v-model.number="timeout" type="number" min="0" id="timeout" class="form-control">
          </div>
        </div>
        <div class="col-xs-6">
          <div class="form-group">
            <label for="maxheight">Toast max-height</label>
            <input v-model.number="maxHeight" type="number" min="0" id="maxheight" class="form-control">
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="position">Position</label>
        <div class="row">
          <div class="col-sm-12">

            <select v-model="position" id="position" class="form-control">
              <option value="leftTop">LEFT - TOP</option>
              <option value="leftCenter">LEFT - CENTER</option>
              <option value="leftBottom">LEFT - BOTTOM</option>
              <option value="rightTop">RIGHT - TOP</option>
              <option value="rightCenter">RIGHT - CENTER</option>
              <option value="rightBottom">RIGHT - BOTTOM</option>
              <option value="centerTop">CENTER - TOP</option>
              <option value="centerCenter">CENTER - CENTER</option>
              <option value="centerBottom">CENTER - BOTTOM</option>
            </select>
          </div>
        </div>
      </div>
      <div class="switch-group-wrapper">
        <div class="switch-wrapper">
          <strong>Show progress bar?</strong>
          <div class="switch">
            <input v-model="progressBar" id="progressBar" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
            <label for="progressBar" data-on="On" data-off="Off"></label>
          </div>
        </div>
        <div class="switch-wrapper">
          <strong>Close on click?</strong>
          <div class="switch">
            <input v-model="closeClick" id="closeClick" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
            <label for="closeClick" data-on="On" data-off="Off"></label>
          </div>
        </div>
        <div class="switch-wrapper">
          <strong>Pause on hover?</strong>
          <div class="switch">
            <input v-model="pauseHover" id="pauseHover" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
            <label for="pauseHover" data-on="On" data-off="Off"></label>
          </div>
        </div>
        <div class="switch-wrapper">
          <strong>New items on top?</strong>
          <div class="switch">
            <input v-model="newTop" id="newTop" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
            <label for="newTop" data-on="On" data-off="Off"></label>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="backdrop">
          Backdrop (0-1)
        </label>
        <input v-model="backdrop" type="number" id="backdrop" class="form-control" min="-1" max="1" step="0.1">
      </div>


      <div class="row">
        <div class="col-xs-6">
          <div class="form-group">
            <label for="dockMax">
              Max on screen
            </label>
            <input v-model="dockMax" type="number" id="dockMax" class="form-control" min="1">
          </div>
        </div>
        <div class="col-xs-6">
          <div class="form-group">
            <label for="blockMax">
              Max at position
            </label>
            <input v-model="blockMax" type="number" id="blockMax" class="form-control" min="1">
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="style">Toast Style</label>
        <div class="row">
          <div class="col-sm-12">
            <select v-model="style" id="style" class="form-control">
              <option value="material">Material</option>
              <option value="dark">Dark</option>
              <option value="simple">Simple</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="buttons">
          <div class="btn-group btn-group-justified">
            <div class="btn btn-success" @click="onSuccess">Success</div>
            <div class="btn btn-info" @click="onInfo">Info</div>
            <div class="btn btn-danger" @click="onError">Error</div>
            <div class="btn btn-warning" @click="onWarning">Warning</div>

          </div>
          <div class="btn-group btn-group-justified">
            <div class="btn btn-default" @click="onSimple">Simple</div>
            <div class="btn btn-blue" @click="onAsyncLoading">Async</div>
            <div class="btn btn-teal" @click="onConfirmation">Confirm</div>
            <div class="btn btn-black" @click="onPrompt">Prompt</div>
          </div>
          <div class="btn-group btn-group-justified">
            <div class="btn btn-default" @click="onHtml">HTML</div>
          </div>
        </div>
      </div>

      <div class="btn btn-block btn-primary" @click="onClear">Clear all</div>


    </aside>
    <div class="content">
      <main>
        <div class="brand">
          <h1>Vue-Snotify</h1>
          <p>Vue.js 2 Notification Center</p>
        </div>
      </main>
      <footer>
        <div class="footer">
          <a href="https://github.com/artemsky/vue-snotify/tree/master/documentation#overview" target="_blank">Documentation</a> &#9673;
          <a href="https://github.com/artemsky/vue-snotify" target="_blank">GitHub</a> &#9673;
          <a href="https://www.npmjs.com/package/vue-snotify" target="_blank">NPM</a>
          <h6>MIT &copy; 2017 <a href="https://github.com/artemsky/">artemsky</a></h6>
        </div>
      </footer>
      <vue-snotify :class="style"></vue-snotify>
    </div>
  </div>
</template>

<script>
  import {SnotifyPosition, SnotifyAction} from 'vue-snotify';
  export default {
    data() {
      return {
        style: 'material',
        title: 'Snotify title!',
        body: 'Lorem ipsum dolor sit amet!',
        timeout: 3000,
        position: SnotifyPosition.rightBottom,
        progressBar: true,
        closeClick: true,
        newTop: true,
        backdrop: -1,
        dockMax: 6,
        blockMax: 3,
        pauseHover: true,
        maxHeight: 300,
        titleMaxLength: 15,
        bodyMaxLength: 80
      }
    },
    methods: {
      /**
       * Change global configuration
       */
      setGlobal () {
        this.$snotify.setConfig({
          bodyMaxLength: this.bodyMaxLength,
          titleMaxLength: this.titleMaxLength,
          backdrop: this.backdrop
        }, {
          newOnTop: this.newTop,
          position: this.position,
          maxOnScreen: this.dockMax,
          maxAtPosition: this.blockMax,
          maxHeight: this.maxHeight
        });
      },
      onSuccess () {
        this.setGlobal();
        this.$snotify.success(this.body, this.title, {
          timeout: this.timeout,
          showProgressBar: this.progressBar,
          closeOnClick: this.closeClick,
          pauseOnHover: this.pauseHover
        });
      },

      onInfo() {
        this.setGlobal();
        this.$snotify.info(this.body, this.title, {
          timeout: this.timeout,
          showProgressBar: this.progressBar,
          closeOnClick: this.closeClick,
          pauseOnHover: this.pauseHover
        });
      },
      onError() {
        this.setGlobal();
        this.$snotify.error(this.body, this.title, {
          timeout: this.timeout,
          showProgressBar: this.progressBar,
          closeOnClick: this.closeClick,
          pauseOnHover: this.pauseHover
        });
      },
      onWarning() {
        this.setGlobal();
        this.$snotify.warning(this.body, this.title, {
          timeout: this.timeout,
          showProgressBar: this.progressBar,
          closeOnClick: this.closeClick,
          pauseOnHover: this.pauseHover
        });
      },
      onSimple() {
        this.setGlobal();

        // const icon = `assets/custom-svg.svg`;
        const icon = `https://placehold.it/48x100`;

        this.$snotify.simple(this.body, this.title, {
          timeout: this.timeout,
          showProgressBar: this.progressBar,
          closeOnClick: this.closeClick,
          pauseOnHover: this.pauseHover,
          icon: icon
        });
      },

      onAsyncLoading() {
        this.setGlobal();
        this.$snotify.async('This will resolve with success', 'Async toast 1',
          // You should pass Promise of type SnotifyConfig to change some data or do some other actions
          () => new Promise((resolve) => {
            setTimeout(() => resolve({
              title: 'Success',
              body: 'Example. Data loaded!',
              config: {
                closeOnClick: true,
                timeout: this.timeout,
                showProgressBar: true,
                pauseOnHover: true
              }
            }), this.timeout)
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
            }), this.timeout)
          })
        );
      },

      onConfirmation() {
        this.setGlobal();
        /*
        Here we pass an buttons array, which contains of 2 element of type SnotifyButton
         */
        const id = this.$snotify.confirm(this.body, this.title, {
          timeout: this.timeout,
          showProgressBar: this.progressBar,
          closeOnClick: this.closeClick,
          pauseOnHover: this.pauseHover,
          buttons: [
            {text: 'Yes', action: () => console.log('Clicked: Yes'), bold: false},
            {text: 'No', action: () => console.log('Clicked: No')},
            {
              text: 'Later', action: (toastId) => {
              console.log('Removed with animation');
              this.$snotify.$emit('remove', toastId);
            }
            },
            {
              text: 'Remove', action: () => {
              console.log('Removed instantly');
              this.$snotify.remove(id);
            }, bold: true
            },
          ]
        });
      },

      onPrompt() {
        this.setGlobal();
        /*
         Here we pass an buttons array, which contains of 2 element of type SnotifyButton
         At the action of the first button we can get what user entered into input field.
         At the second we can't get it. But we can remove this toast
         */
        const id = this.$snotify.prompt(this.body, this.title, {
          timeout: this.timeout,
          showProgressBar: this.progressBar,
          closeOnClick: this.closeClick,
          pauseOnHover: this.pauseHover,
          buttons: [
            {text: 'Yes', action: (toastId, text) => console.log('Said Yes: ' + text + ' ID: ' + toastId)},
            {
              text: 'No', action: (toastId, text) => {
              console.log('Said No: ' + text);
              this.$snotify.remove(id);
            }
            },
          ],
          placeholder: 'This is the example placeholder which you can pass' // Max-length = 40
        });
      },

      onHtml() {
        this.setGlobal();

        this.$snotify.html(`<div class="snotifyToast__title"><b>Html Bold Title</b></div>
            <div class="snotifyToast__body"><i>Html</i> <b>toast</b> <u>content</u></div> `, {
          timeout: this.timeout,
          showProgressBar: this.progressBar,
          closeOnClick: this.closeClick,
          pauseOnHover: this.pauseHover,
        });
      },


      onClear() {
        this.$snotify.clear();
      }
    },
    created () {
      console.log(this)
      this.$snotify.$on(SnotifyAction.mounted, (toast) => {
        console.log('[CALLBACK]: mounted', toast)
      });
      this.$snotify.$on(SnotifyAction.destroyed, (toast) => {
        console.log('[CALLBACK]: destroyed', toast)
      });
      this.$snotify.$on(SnotifyAction.beforeDestroy, (toast) => {
        console.log('[CALLBACK]: beforeDestroy', toast)
      });
      this.$snotify.$on(SnotifyAction.onInput, (toast, value) => {
        console.log('[CALLBACK]: onInput', toast, value)
      });
      this.$snotify.$on(SnotifyAction.onClick, (toast) => {
        console.log('[CALLBACK]: onClick', toast)
      });
      this.$snotify.$on(SnotifyAction.onHoverEnter, (toast) => {
        console.log('[CALLBACK]: onHoverEnter', toast)
      });
      this.$snotify.$on(SnotifyAction.onHoverLeave, (toast) => {
        console.log('[CALLBACK]: onHoverLeave', toast)
      });
      this.$snotify.$on(SnotifyAction.beforeShow, (toast) => {
        console.log('[CALLBACK]: beforeShow', toast)
      });
      this.$snotify.$on(SnotifyAction.shown, (toast) => {
        console.log('[CALLBACK]: shown', toast)
      });
      this.$snotify.$on(SnotifyAction.beforeHide, (toast) => {
        console.log('[CALLBACK]: beforeHide', toast)
      });
      this.$snotify.$on(SnotifyAction.hidden, (toast) => {
        console.log('[CALLBACK]: hidden', toast)
      })
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Audiowide');

  .material {
    @import "~vue-snotify/styles/material";
  }
  .simple {
    @import "~vue-snotify/styles/simple";
  }
  .dark {
    @import "~vue-snotify/styles/dark";
  }



  .snotify-icon {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center;
  }



  .wrapper {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    @media (max-width: 767px) {
      flex-flow: column nowrap;
      height: auto;
      font-size: 12px;
    }

    aside {
      flex: 0 0 350px;
      padding: 10px 15px;
      overflow-y: auto;
      z-index: 5;
      .btn-group {
        .btn {
          padding: 6px 9px;
        }
      }

      h3 {
        margin: 0;
      }

      @media (max-width: 767px) {
        order: 1;
        overflow: initial;
      }
    }

    .content {
      position: relative;
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      background: #EA5C54; /* Old browsers */
      background: -moz-linear-gradient(-45deg, #EA5C54 0%, #bb6dec 100%); /* FF3.6+ */
      background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, #EA5C54), color-stop(100%, #bb6dec)); /* Chrome,Safari4+ */
      background: -webkit-linear-gradient(-45deg, #EA5C54 0%, #bb6dec 100%); /* Chrome10+,Safari5.1+ */
      background: -o-linear-gradient(-45deg, #EA5C54 0%, #bb6dec 100%); /* Opera 11.10+ */
      background: -ms-linear-gradient(-45deg, #EA5C54 0%, #bb6dec 100%); /* IE10+ */
      background: linear-gradient(135deg, #EA5C54 0%, #bb6dec 100%); /* W3C */
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#EA5C54 ', endColorstr='#bb6dec', GradientType=1); /* IE6-9 fallback on horizontal gradient */

      main {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .brand {
          position: absolute;
          color: #ffffff;

          h1 {
            font-family: 'Audiowide', cursive;
            font-display: swap;
            font-size: 6em;
          }
          p {
            font-size: 2em;
            text-align: center;
          }

          @media (max-width: 992px) {
            h1 {
              font-size: 4.5em;
            }
            p {
              font-size: 1.8em;
            }

            @media (max-width: 767px) {
              h1 {
                font-size: 4em;
              }
              p {
                font-size: 1.5em;
              }
            }
          }

        }

        @media (max-width: 767px) {
          flex-flow: column nowrap;
          order: 0;
          height: 110px;
        }
      }

      footer {
        flex: 0 0 65px;
        text-align: center;
        color: #ffffff;
        font-size: 1em;
        a {
          color: #fff;
        }
        h6 {
          font-size: .9em;
        }

        @media (max-width: 767px) {
          flex: 0 0 40px;
        }
      }
    }
  }

  .buttons {
    margin: 20px 0;
  }

  .btn-group {
    margin: 5px 0 0;
  }

  .btn-black {
    color: #f8f8f8;
    background-color: #2d2d2d;
    border-color: #000000;
    &:hover {
      color: #fff;
      background-color: #000000;
      border-color: #000000;
    }
  }

  .btn-blue {
    color: #f8f8f8;
    background-color: #2095F2;
    border-color: #1a80d1;
    &:hover {
      color: #fff;
      background-color: #1a80d1;
      border-color: #1a80d1;
    }
  }

  .btn-teal {
    color: #f8f8f8;
    background-color: #009587;
    border-color: #018175;
    &:hover {
      color: #fff;
      background-color: #018175;
      border-color: #018175;
    }
  }

  .switch-wrapper {
    width: 50%;
  }

  .switch-group-wrapper {
    display: flex;
    flex-flow: row wrap;
    margin: 5px 0 10px;
  }

  .cmn-toggle {
    position: absolute;
    margin-left: -9999px;
    padding: 2px;
    width: 60px;
    height: 30px;
    visibility: hidden;

    + label {
      display: block;
      position: relative;
      padding: 2px;
      width: 60px;
      height: 30px;
      cursor: pointer;
      outline: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &::before,
      &::after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        color: #fff;
        font-family: "Roboto Slab", serif;
        font-size: 20px;
        text-align: center;
        line-height: 30px;
      }
      &::before {
        background-color: #dddddd;
        content: attr(data-off);
        transition: transform 0.5s;
        backface-visibility: hidden;
      }

      &::after {
        background-color: #8ce196;
        content: attr(data-on);
        transition: transform 0.5s;
        transform: rotateY(180deg);
        backface-visibility: hidden;
      }
    }

    &:checked {
      + label {
        &::before {
          transform: rotateY(180deg);
        }
        &::after {
          transform: rotateY(0);
        }
      }
    }
  }
</style>
