<template>
    <div>
        <div v-for="(block, index) in getCategoriesVacancy()" class="wrap" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
            <p>{{ T(index) }}:</p>
            <ul>
                <li v-for="item in block">{{ item }}</li>
            </ul>
        </div>
    </div>

</template>

<script>
    import mixins from '../mixins';

    export default {
        mixins: [mixins],
        props: {
            selectedPost: {
                type: Object,
                Default: {}
            }
        },
        methods: {
            getCategoriesVacancy() {
                let categoriesVacancy = {...this.selectedPost};

                delete categoriesVacancy.id;
                delete categoriesVacancy.name;

                return categoriesVacancy;
            },
        }
    }
</script>
