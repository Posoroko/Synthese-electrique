<script setup>
const props = defineProps({
    flexWrapMode: String
})
</script>

<template>
    <div class="dividedWidth_50-50 h100 flex alignCenter justifyCenter" :class="[flexWrapMode]">
        <div class="leftBox sectionBox">
            <slot name="leftBox"></slot>
        </div>

        <div class="rightBox sectionBox">
            <slot name="rightBox"></slot>
        </div>
    </div>
</template>

<style scoped>
.dividedWidth_50-50 .sectionBox {
    width: 50%;
}
.sectionBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}
</style> 