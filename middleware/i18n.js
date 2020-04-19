import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

let localeCountry = {
    "US": "en",
    "TW": "tw",
}

export default ({ app, store }) => {
    let ipData;
    let countryId;

    app.$axios.get("/api/SiteInfo/ip-info")
        .then(result => {
            ipData = result.data
            // console.log("ok", ipData.countryId)
            getCountry(ipData.countryId)
        })
        .catch((err) => {
            console.error(err)
        });


    function getCountry(params) {
        if (ipData != undefined) {
            app.$axios.get("/api/SiteInfo/getCountry", {
                headers: {
                    "X-Country-Id": params
                }
            })
                .then(result => {
                    console.log("ok2", result.data)
                    countryId = result.data.countryId
                    setCountryId(countryId);
                })
                .catch((err) => {
                    console.log("fail")
                });
        }

    }

    function setCountryId(countryId) {
        app.i18n = new VueI18n({
            locale: localeCountry[countryId],
            fallbackLocale: 'en',
            messages: {
                // 'en': app.$axios.get('/api/LabelProvider/label/en.json'),
            }
        });

        console.log("ok4" + app.$axios.get('/api/LabelProvider/label/en.json'))

        app.i18n.path = (link) => {
            if (app.i18n.locale === app.i18n.fallbackLocale) {
                return `/${link}`;
            }
            return `/${app.i18n.locale}/${link}`;
        }

        console.log("ok3 locale:" + localeCountry[countryId])
    }
}
