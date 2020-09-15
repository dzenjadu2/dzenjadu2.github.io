<template>
    <main id="main" class="main page__main main__about">

        <section class="first">
            <img class="first__img" src="../public/images/dest/bg.png" alt="" data-aos="zoom-out-up" data-aos-duration="1500">
            <div class="page-wrap">
                <div class="first__heading">
                    <h1 class="first__title page-title">{{ T('about') }}</h1>
                    <svg class="animated-title" viewBox="0 0 1320 300">
                        <text class="animated-title__text subtitle" x="10%" y="40%" dy=".35em" text-anchor="start">
                            {{ T('about') }}
                        </text>
                    </svg>
                </div>
                <div class="first__inner">
                    <div class="first__description">
                        <p class="first__description-item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="0" data-aos-offset="0">
                            {{ T('aboutText1') }}
                        </p>
                        <p class="first__description-item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                            {{ T('aboutText2') }}
                        </p>
                        <p class="first__description-item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0">
                            {{ T('aboutText3') }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <div class="page-wrap">
            <div class="animated-line js-line"></div>
        </div>

        <div class="features">
            <div class="page-wrap">
                <div class="features__inner" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                    <div class="features__item">
                        <span class="features__item-value" data-count-to="9">0</span>
                        <div class="features__item-delimiter animated-line js-line"></div>
                        <p class="features__item-title">{{ T('year') }}</p>
                    </div>
                    <div class="features__item">
                        <span class="features__item-value" data-count-to="16" data-plus="true">0</span>
                        <div class="features__item-delimiter animated-line js-line"></div>
                        <p class="features__item-title">{{ T('developers') }}</p>
                    </div>
                    <div class="features__item">
                        <span class="features__item-value" data-count-to="12">0</span>
                        <div class="features__item-delimiter animated-line js-line"></div>
                        <p class="features__item-title text-center">{{ T('clients') }}</p>
                    </div>
                    <div class="features__item">
                        <span class="features__item-value" data-count-to="222" data-plus="true">0</span>
                        <div class="features__item-delimiter animated-line js-line"></div>
                        <p v-html="T('projects')" class="features__item-title"></p>
                    </div>
                    <div class="features__item">
                        <span class="features__item-value" data-count-to="21">0</span>
                        <div class="features__item-delimiter animated-line js-line"></div>
                        <p  v-html="T('serts')" class="features__item-title"></p>
                    </div>
                    <div class="features__item">
                        <span class="features__item-value" data-count-to="1234" data-plus="true">0</span>
                        <div class="features__item-delimiter animated-line js-line"></div>
                        <p  v-html="T('doneProjects')" class="features__item-title"></p>
                    </div>
                </div>

                <div class="features__nav" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                    <router-link :to="{params: {lng: $route.params.lng}, name: 'services'}" class="features__nav-link link">
                        <span :data-content="T('more')">{{ T('more') }}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import mixins from '../mixins';

    export default {
        mixins: [mixins],
    }
</script>
