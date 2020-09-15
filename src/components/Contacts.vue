<template>
    <main id="main" class="main page__main main__contacts">

        <section class="first" data-aos="zoom-out-up" data-aos-duration="1500">
            <img class="first__img" src="../public/images/dest/contacts_2.png" alt="">
            <div class="pulse">
                <div class="pulse__circles">
                    <span class="pulse__circle pulse__circle--one"></span>
                    <span class="pulse__circle pulse__circle--two"></span>
                    <span class="pulse__circle pulse__circle--three"></span>
                    <span class="pulse__circle pulse__circle--four"></span>
                </div>
            </div>
            <div class="page-wrap">
                <div class="first__heading">
                    <h1 class="first__title page-title">{{ T('contacts') }}</h1>
                    <svg class="animated-title" viewBox="0 0 1320 300">
                        <text class="animated-title__text subtitle" x="10%" y="40%" dy=".35em" text-anchor="start">
                            {{ T('contacts') }}
                        </text>
                    </svg>
                </div>
            </div>
        </section>

        <div class="feedback">
            <div class="page-wrap">
                <div class="feedback__inner">
                    <div class="feedback__contacts contacts">
                        <div class="contacts__item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                            <p v-html="T('address')" class="contacts__link"></p>
                        </div>

                        <div class="contacts__item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0">
                            <a class="contacts__link" href="tel:+79337984598">+7 933 798 45 98</a>
                        </div>

                        <div class="contacts__item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                            <a class="contacts__link" href="mailto:info@pampam.co">info@pampam.com</a>
                        </div>

                        <div class="contacts__item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="400" data-aos-offset="0">
                            <p class="contacts__item-text">{{ T('work') }}</p>
                            <a class="contacts__link" href="mailto:hr@pampam.by">hr@pampam.by</a>
                        </div>
                    </div>
                    <div class="feedback__form">
                        <p class="feedback__form-title">{{ T('feebback') }}</p>
                        <form class="feedback__form-controls form" action="#">
                            <div class="form__control">
                                <input class="form__input" type="text" :placeholder="T('your_name')">
                                <div class="animated-line js-line"></div>
                            </div>
                            <div class="form__control">
                                <input class="form__input" type="text" :placeholder="T('company')">
                                <div class="animated-line js-line"></div>
                            </div>
                            <div class="form__control">
                                <input class="form__input" type="email" placeholder="Email">
                                <div class="animated-line js-line"></div>
                            </div>
                            <div class="form__control">
                                <input class="form__input" type="text" :placeholder="T('phone')">
                                <div class="animated-line js-line"></div>
                            </div>
                            <div class="form__control">
                                <div class="btn btn-submit" type="submit" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                                    <span class="btn-text">{{ T('send') }}</span>
                                </div>
                            </div>
                        </form>
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

