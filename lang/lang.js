export const LANG_FUNCTION = {
    async fetch({store}){
        await store.dispatch('SITEINFO');
        await store.dispatch('SITEINFO_GET_COUNTRY');
        await store.dispatch('LANGUAGES')
        await store.dispatch('FILTER_COUNTRY')
    }
}