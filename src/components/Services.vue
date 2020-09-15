<template>
    <main id="main" class="main page__main main__services">
        <section class="first">
            <img class="first__img" src="../public/images/dest/bg.png" alt="" data-aos="zoom-out-up" data-aos-duration="1500">
            <div class="page-wrap">
                <div class="first__heading">
                    <h1 class="first__title page-title">{{ T('services') }}</h1>
                    <svg class="animated-title" viewBox="0 0 1320 300">
                        <text class="animated-title__text subtitle" x="10%" y="40%" dy=".35em" text-anchor="start">
                            {{ T('services') }}
                        </text>
                    </svg>
                </div>
            </div>
        </section>

        <div class="services__promo promo">
            <div class="page-wrap">
                <div class="promo__inner">
                    <div class="promo__left">
                        <div class="promo__left-block" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                            <p class="promo__left-text">{{ T('planing') }}<span class="red-dot">.</span><br></p>
                            <p class="promo__left-text">{{ T('develop') }}<span class="red-dot">.</span><br></p>
                            <p class="promo__left-text">{{ T('making') }}<span class="red-dot">.</span></p>
                        </div>
                    </div>
                    <div class="promo__right" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                        <div class="promo__right-item">
                            <p class="promo__right-text">
                                {{ T('servText1') }}
                            </p>
                        </div>
                        <div class="promo__right-item">
                            <p class="promo__right-text">
                                {{ T('servText2') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="services">
            <div class="page-wrap">
                <div class="services__items">
                    <div class="services__item">
                        <div class="services__item-wrapper  parallax__wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                            <div class="services__item-icon parallax__item">
                                <img src="../public/../public/images/dest/services1.png" alt="">
                            </div>
                            <p class="services__item-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                                {{ T('planing_po') }}
                            </p>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services__item-wrapper  parallax__wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                            <div class="services__item-icon parallax__item">
                                <img src="../public/images/dest/services2.png" alt="">
                            </div>
                            <p class="services__item-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                                {{ T('make_site') }}
                            </p>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services__item-wrapper  parallax__wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                            <div class="services__item-icon parallax__item">
                                <img src="../public/images/dest/services3.png" alt="">
                            </div>
                            <p class="services__item-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                                {{ T('mobi_po') }}
                            </p>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services__item-wrapper  parallax__wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                            <div class="services__item-icon parallax__item">
                                <img src="../public/images/dest/services4.png" alt="">
                            </div>
                            <p class="services__item-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                                {{ T('automatization') }}
                            </p>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services__item-wrapper  parallax__wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                            <div class="services__item-icon parallax__item">
                                <img src="../public/images/dest/services5.png" alt="">
                            </div>
                            <p class="services__item-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                                {{ T('integration') }}
                            </p>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services__item-wrapper  parallax__wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                            <div class="services__item-icon parallax__item">
                                <img src="../public/images/dest/services6.png" alt="">
                            </div>
                            <p class="services__item-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                                {{ T('it') }}
                            </p>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services__item-wrapper  parallax__wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                            <div class="services__item-icon parallax__item">
                                <img src="../public/images/dest/services7.png" alt="">
                            </div>
                            <p class="services__item-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                                {{ T('support') }}
                            </p>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services__item-wrapper  parallax__wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                            <div class="services__item-icon parallax__item">
                                <img src="../public/images/dest/services8.png" alt="">
                            </div>
                            <p class="services__item-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                                {{ T('update_po') }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="services__trigger" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                    <router-link :to="{params: {lng: $route.params.lng}, name: 'contacts'}" class="btn btn-contacts">
                        <span class="btn-text">
                            {{ T('contact') }}
                        </span>
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
