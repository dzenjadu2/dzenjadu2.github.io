<template>
    <div id="cursor" class="cursor">
        <div class="cursor__inner"></div>
    </div>
</template>

<script>
    export default {
        mounted() {
            const cursor = document.getElementById('cursor');

            window.addEventListener('mousemove', (event) => {
                this.setCursorPosition(cursor, event);
                if (
                    event.target instanceof HTMLAnchorElement
                    || event.target.tagName.toLowerCase() == 'button'
                    || event.target.closest('a')
                    || event.target.closest('button')
                ) {
                    cursor.classList.add('is-active')
                }
                else {
                    cursor.classList.remove('is-active')
                }
            });
        },
        methods: {
            setCursorPosition(element, event) {
                element.style.transform = `translate3D(${event.pageX - 15}px, ${event.pageY - 15}px, 0)`
            }
        },
    }
</script>