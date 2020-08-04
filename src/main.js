import Vue from 'vue'
import App from './App.vue'
import i18n from "i18n"

i18n.configure({
  locales:['en', 'de'],
  directory: __dirname + '/locales'
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//translate something
i18n.setLocale('de');
let greeting = i18n.__('Hello');
console.log(greeting);

console.log("Hi Leon");