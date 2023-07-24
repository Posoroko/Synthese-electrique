<script setup>
const props = defineProps({
    title: String,
    typeClass: String,
    line: Boolean,
    leftPadding: String,
    lineWidth: String
})
</script>

<template>
    <div class="flex">
        <h2 class="titleResponsiveLeftPadding title bodyTitle arvo relative" :class="[typeClass, { 'line': line == true }]">
            {{ title }}
        </h2>
    </div>
</template>


<style scoped>
.title.line::after {
    content: "";
    display: block;
    width: max(50%, 6px);
    height: 3px;
    background-color: var(--brand-color-2);
    margin-top: 5px;
}
.titleResponsiveLeftPadding {
    padding-left: v-bind(leftPadding);
}

</style>