import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default ({ app, store }) => {
  const loadedLanguages = store.state.locale;

  app.i18n = new VueI18n({
    locale: loadedLanguages,
    fallbackLocale: 'en',
  });

  app.i18n.setLocaleMessage(loadedLanguages,store.state.locale)

  // app.$axios.get(`/api/LabelProvider/label/${loadedLanguages}.json`).then((res)=>{
  //   app.i18n.setLocaleMessage(loadedLanguages,res.data)
  // });
  
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }
    return `/${app.i18n.locale}/${link}`;
  }

  
}
