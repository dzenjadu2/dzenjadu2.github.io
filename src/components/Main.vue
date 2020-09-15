<template>
    <main id="main" class="main page__main main__frontpage">
        <canvas id="canvas" class="canvas"></canvas>
        <section id="promo" class="promo">
            <div class="promo__heading">
                <h1 id="frontpage-title" class="promo__title" >Company</h1>
                <svg class="animated-title" viewBox="0 0 1320 300">
                    <text class="animated-title__text" x="50%" y="30%" dy=".35em" text-anchor="middle">Company</text>
                </svg>
            </div>
        </section>
    </main>
</template>

<script>
    import mixins from '../mixins';

    export default {
        mixins: [mixins],
    }
</script>
