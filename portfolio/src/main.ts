import { createApp } from 'vue'
import App from './App.vue'
import i18n from './plugins/i18n';
import './index.css'
import './marked_config'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import icons and add them to the Library */
import { faLink, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faLink, faArrowRight)

const app = createApp(App);
app.use(i18n);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
