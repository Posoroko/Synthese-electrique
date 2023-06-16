<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        options: ['boxed', 'unboxed']
    },
    line: {
        type: Boolean,
    }
})
</script>

<template>
    <h2 class="bodyTitle titleResponsiveLeftPadding" 
        :class="[
            type,
            { 'line': line == true}
        ]"> {{ title }} </h2>
</template>


<style scoped>
.bodyTitle.line::after {
    content: "";
    display: block;
    width: 150px;
    height: 6px;
    background-color: var(--brand-color-2);
    margin-top: 5px;
}
.titleResponsiveLeftPadding {
    padding-left: 5%;
}

</style>