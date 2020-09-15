import appInit from './public/js/app.js';

export default {
    mounted() {
        appInit();
        this.$router.afterEach((to, from) => {
            if (to.name !== from.name) {
                window.scrollTo(0, 0);
            }
        })
    },
    methods: {
        T(key) {
            const lng = this.$route.params.lng || 'ru';
            return this.$store.state.dictionary[lng][key];
        }
    }
}
