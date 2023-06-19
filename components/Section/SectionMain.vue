<script setup>
const props = defineProps({
    colorMode: String
})
</script>

<template>
    <section class="w100" :class="colorMode">
        section
        <div class="mainWidth">
            <slot />
        </div>
    </section>
</template>

<style scoped>
section .mainWidth{
    padding-top: 30px;
    padding-bottom: 30px;
}
section.dark {
    background-image: url('/images/cloth-pattern.jpg')
}
section.dark * {
    color: white;
}
</style>