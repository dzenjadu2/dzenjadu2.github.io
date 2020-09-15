import Vue from 'vue';
import VueRouter from 'vue-router'
import Main from './components/Main';
import About from './components/About';
import Services from './components/Services';
import Prices from './components/Prices';
import Information from './components/Information';
import Contacts from './components/Contacts';

Vue.use(VueRouter);

const routes = [
    {
        name: 'main',
        path: '/:lng([a-z]{2})?/',
        component: Main,
    },
    {
        name: 'about',
        path: '/:lng([a-z]{2})?/about',
        component: About
    },
    {
        name: 'services',
        path: '/:lng([a-z]{2})?/services',
        component: Services
    },
    {
        name: 'prices',
        path: '/:lng([a-z]{2})?/prices',
        component: Prices
    },
    {
        name: 'information',
        path: '/:lng([a-z]{2})?/information',
        component: Information
    },
    {
        name: 'contacts',
        path: '/:lng([a-z]{2})?/contacts',
        component: Contacts
    },
    {path: '*', component: Main},
];

const router = new VueRouter({
    // mode: 'history',
    routes
});

export default router;
