import mixins from './mixins';

export default {
    mixins: [mixins],
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        this.getPosts()
        this.$router.afterEach((to, from) => {
            this.getPosts()
        })
    },

    methods: {
        getPosts() {
            this.posts = [
                {
                    id: 1,
                    name: this.T('post_1'),
                    desc: [this.T('desc_1'), this.T('desc_2'), this.T('desc_3'), this.T('desc_4'),],
                    plusses: [this.T('plus_1'), this.T('plus_2'), this.T('plus_3'),],
                    conditions: [this.T('condition_1'), this.T('condition_2'), this.T('condition_3'),]
                },
                {
                    id: 2,
                    name: this.T('post_2'),
                    desc: [this.T('desc_2'), this.T('desc_3'), this.T('desc_4'), this.T('desc_5'),],
                    plusses: [this.T('plus_2'), this.T('plus_3'), this.T('plus_4'),],
                    conditions: [this.T('condition_2'), this.T('condition_3'), this.T('condition_4'),]
                },
                {
                    id: 3,
                    name: this.T('post_3'),
                    desc: [this.T('desc_3'), this.T('desc_4'), this.T('desc_5'),],
                    plusses: [this.T('plus_3'), this.T('plus_4'), this.T('plus_5'),],
                    conditions: [this.T('condition_3'), this.T('condition_4'), this.T('condition_5'),]
                },
            ]
        },
    }
}
