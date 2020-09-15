<template>
    <main id="main" class="main page__main main__posts">
        <section class="first">
            <img class="first__img" src="../public/images/dest/bg.png" alt="" data-aos="zoom-out-up" data-aos-duration="1500">
            <div class="page-wrap">
                <div class="first__heading" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                    <h1 class="first__title page-title">{{ T('information') }}</h1>
                    <svg class="animated-title" viewBox="0 0 1320 300">
                        <text class="animated-title__text subtitle" x="10%" y="40%" dy=".35em" text-anchor="start">
                            {{ T('information') }}
                        </text>
                    </svg>
                </div>
            </div>
        </section>

        <div class="posts">
            <div class="page-wrap">
                <div class="posts__inner">
                    <div class="posts__left">
                        <ul class="posts__tabs tabs-list">
                            <template v-for="post in posts">
                                <li class="posts__tabs-item tabs-list__item">
                                    <a @click="handleClickPost(post.id)"
                                       :class="{'tabs-list__link--active': selectedPost === post.id}"
                                       href="javascript:void(0);"
                                       class="posts__list-link tabs-list__link link"
                                    >
                                        <span :data-content="post.name">{{ post.name }}</span>
                                    </a>
                                </li>
                                <div class="animated-line js-line"></div>
                            </template>
                        </ul>
                    </div>
                    <div class="posts__right tabs-content">
                        <div class="tabs-content__item">
                            <InformationDescription :selectedPost="selected_post"/>

                            <router-link :to="{params: {lng: $route.params.lng}, name: 'contacts'}" class="btn btn-response" data-aos-easing="ease-in-back" data-aos-delay="400" data-aos-offset="0">
                                <span class="btn-text">{{ T('respond') }}</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import mixins from '../mixins';
    import mixin_information from '../mixin_information';
    import InformationDescription from './InformationDescription';

    export default {
        mixins: [mixins, mixin_information],
        components: {
          InformationDescription,
        },
        data() {
            return {
                selectedPost: null,
                selected_post: {},
            }
        },
        mounted() {
            this.getSelectedPost();
            this.getSelectedPostId();
        },
        methods: {
            handleClickPost(id) {
                this.getSelectedPost(id);
                this.getSelectedPostId(id);
            },
            getSelectedPostId(id = 1) {
                this.selectedPost = id;
            },
            getSelectedPost(id = 1) {
                const [selectedPost] = this.posts.filter((post) => post.id === id);
                this.selected_post = selectedPost;
            }
        }
    }
</script>
