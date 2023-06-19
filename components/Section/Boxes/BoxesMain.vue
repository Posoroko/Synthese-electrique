<script setup>
const props = defineProps({
    boxes: Number,
    flexWrapMode: String,
    middleWrapFirst: Boolean
})
</script>

<template>
    <div class="mainWidth flex justifyCenter alignCenter g" :class="[flexWrapMode, { 'middleWrapFirst': middleWrapFirst }]">

        <div class="sectionBox r" v-for="n in Number(boxes)" :key="n" :class="`box${n}`">
            <slot :name="`box${n}`"></slot>
        </div>
    </div>
</template>

<style scoped>
.sectionBox {
    width: calc(100% / v-bind('boxes'));
}
/* media queries for middleWrapFirst,  */
</style>