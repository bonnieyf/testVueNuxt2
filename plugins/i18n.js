// import Vue from 'vue';
// import VueI18n from 'vue-i18n';

// Vue.use(VueI18n);

// export default ({ app, store }) => {
//   const loadedLanguages = store.state.locale;

//   app.i18n = new VueI18n({
//     locale: loadedLanguages,
//     fallbackLocale: 'us',
//   });

//   // if(process.server){

//   app.$axios.get(`/api/LabelProvider/label/${loadedLanguages}.json`).then((res)=>{
//     app.i18n.setLocaleMessage(loadedLanguages,res.data)
//   });
//   // }
  
//   app.i18n.path = (link) => {
//     if (app.i18n.locale === app.i18n.fallbackLocale) {
//       return `/${link}`;
//     }
//     return `/${app.i18n.locale}/${link}`;
//   }

  
// }


// export default function ({ app }) {
//   // beforeLanguageSwitch called right before setting a new locale
//   app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
//     console.log(oldLocale, newLocale)
//   }
//   // onLanguageSwitched called right after a new locale has been set
//   app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
//     console.log(oldLocale, newLocale)
//   }
// }