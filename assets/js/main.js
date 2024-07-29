var app; // 全域變數

document.addEventListener('DOMContentLoaded', function () {
    app = new Vue({
        el: '#app',
        data: {
            text: 'Hello, Vue!',
            backgrounds: {
                home: 'assets/images/home-bg.png',
                instructions01: 'assets/images/instructions01.png',
                instructions02: 'assets/images/instructions02.png',
                points01: '', // Add this line if you have a background for points01
                poster: 'assets/images/poster.png',
            },
            nowPage: 'home',
            orgPage: true
        },
        methods: {
            switchBackground(page) {
                this.nowPage = page;
            },
            handleMessage(event) {
                if (event.data === 'goToInstructions01') {
                    this.switchBackground('instructions02');
                }
                if (event.data === 'changeToPoster') {
                    this.switchBackground('home');
                }
            }
        },
        watch: {
            nowPage() {
                this.orgPageShow();
            }
        },
        computed: {
            orgPageShow(){
                return !(this.nowPage === 'poster' || this.nowPage === 'points01');
            },
            currentBackgroundImage() {
                return this.backgrounds[this.nowPage];
            },
            showNavigationButtons() {
                return this.nowPage === 'instructions01' || this.nowPage === 'instructions02';
            },
            showStartButton() {
                return this.nowPage === 'home';
            },
            previousPage() {
                if (this.nowPage === 'instructions02') {
                    return 'instructions01';
                }
                return 'home';
            },
            nextPage() {
                if (this.nowPage === 'instructions01') {
                    return 'instructions02';
                }
                if (this.nowPage === 'instructions02') {
                    return 'points01';
                }
                return 'home';
            }
        },
        mounted() {
            window.addEventListener('message', this.handleMessage);
        },
        beforeDestroy() {
            window.removeEventListener('message', this.handleMessage);
        },
     
    });
});