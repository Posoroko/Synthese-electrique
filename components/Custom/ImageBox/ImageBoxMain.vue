<script setup>
    const props = defineProps({
        orientation: String,
        options: ['portrait', 'landscape'],
        imageSrc: String,
        imageAlt: String
    })
</script>

<template>
    <div class="imageBox" :class="orientation">
        <div class="wireframe r"></div>
        <img :src="imageSrc" :alt="imageAlt">
    </div>
</template>

<style scoped>

.imageBox {
    padding: 0 0 20px 20px;
    position: relative;
}

.imageBox.portrait{
    height: 75vh;
    width: 55vh;

}

.imageBox.landscape {
    height: 55vh;
    width: 75vh;  
}

img {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 0;
}

.wireframe {
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border: 3px solid var(--brand-color-2);
    position: absolute;
    left: 0;
    bottom: 0;
}
</style>