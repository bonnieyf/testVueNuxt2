export const state = () => ({
    locales: ["us", "es", "fr", "de", "jp", "cn", "tw", "ru"],
    locale: "us",
})

export const mutations = {
    SET_LANG(state) {
        if(process.server){
            console.log('test');
            this.$axios.$get("/api/SiteInfo/ip-info").then(rep => rep.countryId).then((res)=>{
                this.$axios.$get("/api/SiteInfo/getCountry", {
                    headers: {
                        "X-Country-Id": res
                    }
                })
                .then((res)=>{
                    state.locale = res.countryId.toLowerCase();
                    
                    console.log(state.locale)
                })
                .catch(err=>console.log(err));
              });
        }
        // this.$axios.$get("/api/SiteInfo/ip-info").then(rep => rep.countryId).then((res)=>{
        //     this.$axios.$get("/api/SiteInfo/getCountry", {
        //         headers: {
        //             "X-Country-Id": res
        //         }
        //     })
        //     .then((res)=>{
        //         state.locale = res.countryId.toLowerCase();
        //     })
        //     .catch(err=>console.log(err));
        //   });
        

      }

    
}
