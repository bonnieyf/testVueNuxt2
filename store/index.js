export const state = () => ({
    siteInfo: null,
    siteInfoGetCountry: null,
    languages: null,
    localesId: [],
    locales: [],
    locale: "en",
    i18nJSON:''
})


export const getters = {
    GET_SITEINFO : state => {
        return state.siteInfo
    },
    GET_SITEINFO_COUNTRY_ID : state => {
        return state.siteInfoGetCountry
    },
    GET_LANGUAGES : state => {
        return state.languages
    },
    GET_I18NJSON: state=> {
        return state.i18nJSON;
    }
}

export const mutations = {
    SET_SITEINFO: (state ,payload) =>{
        state.siteInfo = payload;
    },
    SET_SITEINFO_GET_COUNTRY: (state, payload) =>{
        state.siteInfoGetCountry = payload;
    },
    SET_LANGUAGES: (state ,payload) =>{
        state.languages = payload;
    },
    SET_LOCALES: (state ,payload) =>{
        state.locales = payload.localesArray;
        state.localesId = payload.localesIdArray;
    },
    SET_LOCALE: (state ,payload) =>{
        state.locale = payload;
    },
    SET_I18NJSON:(state,payload)=>{
        state.i18nJSON = payload;
    }
    
}


export const actions = {
    async SITEINFO({commit}){
        await this.$axios.get("/api/SiteInfo/ip-info").then(rep => {
            commit('SET_SITEINFO',rep.data);
        });
    },
    async SITEINFO_GET_COUNTRY({state,commit}){
        await this.$axios.get("/api/SiteInfo/getCountry",{
            headers: {
                "X-Country-Id": state.siteInfo.countryId
            }
        }).then(rep => {
            commit('SET_SITEINFO_GET_COUNTRY',rep.data);
        });
        
    },
    async LANGUAGES({commit}){
        await this.$axios.get("/api/SiteInfo/Languages").then(rep => {
            commit('SET_LANGUAGES',rep.data);
        });
    },
    FILTER_COUNTRY({state,commit}){
        let localesArray = [];
        let localesIdArray = [];
        state.languages.forEach(item => {
            localesArray.push(item.langCode);
            localesIdArray.push(item.lanId);
        });
        commit('SET_LOCALES',{localesArray,localesIdArray})
    },
    CURRENT_LOCALES({state,commit}){
        let currentLocation = state.siteInfoGetCountry.countryId;
        let countries = state.languages;

        let result;
        
        countries.filter(item=>{
            if(item.countryCode == currentLocation){
                result = item.langCode
            }
        });
        commit('SET_LOCALE',result);

    },
    async I18NJSON({state,commit}){
        await this.$axios.get(`/api/LabelProvider/label/${state.locale}.json`).then(rep => {
            commit('SET_I18NJSON',rep.data);
        });
    }
}