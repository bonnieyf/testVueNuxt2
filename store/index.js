export const state = () => ({
    locales: ["us", "tw"],
    locale: "us",
})

export const mutations = {
    SET_LANG(state ,locale) {
        this.$axios.$get("/api/SiteInfo/ip-info").then(rep => rep.countryId).then((res)=>{
            this.$axios.$get("/api/SiteInfo/getCountry", {
                headers: {
                    "X-Country-Id": res
                }
            })
            .then((res)=>{
                let country = res.countryId.toLowerCase();
                state.locale = country;

                let current = state.locale; 

                if (state.locales.indexOf(current) !== -1) {
                    state.locale = current
                }
            })
            .catch(err=>console.log(err));
        });
      }

    
}
