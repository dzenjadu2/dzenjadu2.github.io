<template>
    <div>
        <header id="header" :class="{'header--dark': showMenu}" class="header page__header header__frontpage">
            <div class="page-wrap">
                <div class="header__inner">
                    <div class="header__logo">
                        <router-link id="header-logo" :to="{params: {lng: $route.params.lng}, name: 'main'}" class="logo">
                            <span class="logo__icon"><img src="../public/images/dest/logo.png" alt=""></span>
                            <span class="logo__title" data-content="Company">Company</span>
                        </router-link>
                    </div>
                    <div class="header__nav">
                        <ul class="header__lang lang-switcher">
                            <li class="lang-switcher__item header__lang-item">
                                <router-link
                                        :to="{params: {lng: 'ru'}}"
                                        :class="{'lang-switcher__link-active': !$route.params.lng || $route.params.lng === 'ru'}"
                                        class="lang-switcher__link header__lang-link"
                                >Рус</router-link>
                            </li>
                            <li class="lang-switcher__item header__lang-item">
                                <router-link
                                        :to="{params: {lng: 'en'}}"
                                        :class="{'lang-switcher__link-active': $route.params.lng === 'en'}"
                                        class="lang-switcher__link header__lang-link"
                                >Eng</router-link>
                            </li>
                        </ul>

                        <div class="header__burger">
                            <button @click="toggleMenu()" :class="{'burger--active': showMenu}" id="burger" class="burger">
                                <span class="burger__bar burger__bar-1 bar-1"></span>
                                <span class="burger__bar burger__bar-2 bar-2"></span>
                                <span class="burger__bar burger__bar-3 bar-3"></span>
                                <span class="burger__bar burger__bar-4 bar-4"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div id="header-menu" :class="{'header__menu--active': showMenu}" class="header__menu">
            <ul class="header__menu-lang-switcher lang-switcher">
                <li class="lang-switcher__item header__lang-item">
                    <router-link
                            :to="{params: {lng: 'ru'}}"
                            :class="{'lang-switcher__link-active': $route.params.lng === 'ru'}"
                            class="lang-switcher__link lang-switcher__link-active header__lang-link"
                    >Рус</router-link>
                </li>
                <li class="lang-switcher__item header__lang-item">
                    <router-link
                            :to="{params: {lng: 'en'}}"
                            :class="{'lang-switcher__link-active': $route.params.lng === 'en'}"
                            class="lang-switcher__link  header__lang-link"
                    >Eng</router-link>
                </li>
            </ul>
            <ul class="menu">
                <li @click="handleClickLink()" v-for="page in pages" class="header__menu-item menu__item">
                    <router-link class="header__menu-link menu__link" :to="{params: {lng: $route.params.lng}, name: page}">
                        <span :data-content="T(page)">{{ T(page) }}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import mixins from '../mixins';

    export default {
        mixins: [mixins],
        data () {
            return {
                pages: ['about', 'services', 'prices', 'information', 'contacts'],
                showMenu: false,
            }
        },
        methods: {
            handleClickLink() {
                this.showMenu = false;
            },
            toggleMenu() {
                this.showMenu = !this.showMenu;
            },
        }
    }
</script>
