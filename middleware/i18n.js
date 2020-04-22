

// export default function ({ 
//   isHMR, app, store, route, params, error, redirect 
// }) {
//   if (isHMR) {
//     return;
//   }
//   else if (store.state.locales.indexOf(route.params.lang) == -1) { 
//       return redirect(`/${store.state.locale}`);
//   }

//   store.commit('SET_LANG');

// }