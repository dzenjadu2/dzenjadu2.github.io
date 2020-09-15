<template>
    <main id="main" class="main page__main main__prices">

        <img class="first__img" src="../public/images/dest/bg.png" alt="" data-aos="zoom-out-up" data-aos-duration="1500">
        <section class="first">
            <div class="page-wrap">
                <div class="first__heading">
                    <h1 class="first__title page-title">{{ T('prices') }}</h1>
                    <svg class="animated-title" viewBox="0 0 1320 300">
                        <text class="animated-title__text subtitle" x="10%" y="40%" dy=".35em" text-anchor="start">
                            {{ T('prices') }}
                        </text>
                    </svg>
                </div>
            </div>
        </section>

        <div class="prices__promo promo">
            <div class="page-wrap">
                <div class="promo__inner">
                    <div class="promo__left">
                        <p class="promo__left-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                            {{ T('how_cost') }}
                        </p>
                        <div class="promo__left-info info">
                            <div class="info__item--circle-wrapper">
                                <div class="border border__left">
                                    <div class="border__left-inner js-border"></div>
                                </div>
                                <div class="border border__right">
                                    <div class="border__right-inner js-border"></div>
                                </div>
                                <div class="info__item info__item--circle parallax__wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                                    <div class="info__item-wrapper parallax__item">
                                        <span class="info__item-value">68-99%</span>
                                        <p class="info__item-description">{{ T('dev_and_init') }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="info__item info__item--square parallax__wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                                <div class="border border__left js-border"></div>
                                <div class="border border__right js-border"></div>
                                <div class="info__item-wrapper parallax__item">
                                    <span class="info__item-value">1-7%</span>
                                    <p class="info__item-description">{{ T('analysis') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="promo__right" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                        <div class="promo__right-item">
                            <p class="promo__right-text">
                                {{ T('cost_info') }}
                            </p>
                        </div>
                        <div class="promo__right-item">
                            <p class="promo__right-text">{{ T('details_info') }}</p>
                        </div>
                        <router-link :to="{params: {lng: $route.params.lng}, name: 'contacts'}" class="btn btn-contacts" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                            <span class="btn-text">{{ T('contact') }}</span>
                        </router-link>
                    </div>
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
