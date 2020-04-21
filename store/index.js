export const state = () => ({
    locales: ["us", "tw"],
    locale: "us",
})

export const mutations = {
    SET_LANG(state) {
        this.$axios.$get("/api/SiteInfo/ip-info").then(rep => rep.countryId).then((res)=>{
            this.$axios.$get("/api/SiteInfo/getCountry", {
                headers: {
                    "X-Country-Id": res
                }
            })
            .then((res)=>{
                state.locale = res.countryId.toLowerCase();
            })
            .catch(err=>console.log(err));
          });
        

      }

    
}
