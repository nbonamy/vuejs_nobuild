
// sfc loader options
const options = {
  moduleCache: {
    vue: Vue,
  },
  getFile(url) {
    return fetch(url).then(res => res.ok ? res.text() : Promise.reject(new Error(res.statusText)));
  },
  addStyle(styleStr) {
    const style = document.createElement('style');
		style.textContent = styleStr;
		const ref = document.head.getElementsByTagName('style')[0] || null;
		document.head.insertBefore(style, ref);
  },
}

// sfc module loader
const { loadModule } = window['vue3-sfc-loader'];

Vue.createApp({
  'components': {
    'hello': Vue.defineAsyncComponent(() => loadModule('./components/hello.vue', options)),
    'goodbye': Vue.defineAsyncComponent(() => loadModule('./components/goodbye.vue', options)),
  },
  data() {
    return {
      username: 'World',
    }
  },
}).mount('#app');
