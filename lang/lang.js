export const LANG_FUNCTION = {
    async asyncData({store}){
        await store.dispatch('BROWSER_LANG');
        // await store.dispatch('SITEINFO');
        // await store.dispatch('SITEINFO_GET_COUNTRY');
        // await store.dispatch('LANGUAGES')
        // await store.dispatch('FILTER_COUNTRY')
        // await store.dispatch('CURRENT_LOCALES');
        // await store.dispatch('I18NJSON');
    },
    mounted(){

        let userLang = navigator.language || navigator.userLanguage || "";
        let languageDictionary =[{
            "zh-TW"
        }]
        // window.language = window.language || "";
        // window.language != localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE")&&(document.querySelectorAll('div[id*\x3d"ematic_"]')
        // .forEach(function(b){b.remove()}),console.info("Ematic overlay destroyed."));

        // localStorage.setItem('LOCALIZE_DEFAULT_LANGUAGE',userLang)
        console.log(userLang)
    }
}