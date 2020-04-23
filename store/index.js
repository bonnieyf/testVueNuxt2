export const state = () => ({
    siteInfo: null,
    siteInfoGetCountry: null,
    languages: null,
    localesId: [],
    locales: [],
    locale: "en",
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
    SET_CURRENT_LOCALES:(state)=>{
        let currentLocation = state.countryId;
        let countries = state.languages;

        let result = countries.filter((item,index)=>{
            return item[index].countryCode
        })
        console.log(result)
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
            commit('SET_CURRENT_LOCALES',rep.data);
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
        state.languages.forEach(function(item) {
            localesArray.push(item.langCode);
            localesIdArray.push(item.lanId);
        });
        commit('SET_LOCALES',{localesArray,localesIdArray})
    }
}