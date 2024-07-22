

import { swiper } from 'swiper.js';
swiper;
const app = Vue.createApp({
    data() {
        return {
            currentClass: "home",
            text: "hi"
        }
    },
    methods: {
        changeBackground(className) {
            this.currentClass = className;
        }
   }
});

app.mount('#app');