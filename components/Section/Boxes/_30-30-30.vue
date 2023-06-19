<script setup>
const props = defineProps({
    boxes: Number,
    flexWrapMode: String,
    middleWrapFirst: Bolean
})
</script>

<template>
    <div class="mainWidth" :class="[flexWrapMode, { 'middleWrapFirst' : middleWrapFirst }]" >
        <div class="sectionBox">
            <slot name="leftbox"></slot>
        </div>
    </div>
</template>

<style scoped>


/* media queries for middleWrapFirst,  */

</style>