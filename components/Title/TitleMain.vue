<script setup>
const props = defineProps({
    title: String,
    typeClass: String,
    line: Boolean,
    leftPadding: String
})
</script>

<template>
    <h2 class="titleResponsiveLeftPadding title" :class="[ typeClass, { 'line': line == true} ]">
        {{ title }}
    </h2>
</template>


<style scoped>
.title.line::after {
    content: "";
    display: block;
    width: 150px;
    height: 6px;
    background-color: var(--brand-color-2);
    margin-top: 5px;
}
.titleResponsiveLeftPadding {
    padding-left: v-bind(leftPadding);
}

</style>