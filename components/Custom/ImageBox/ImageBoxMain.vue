<script setup>
    const props = defineProps({
        // orientation: String,
        options: ['portrait', 'landscape'],
        imageSrc: String,
        imageAlt: String,
        frameSide: String
        // right or left
    })
</script>

<template>
    <div class="imageBox centered" :class="`frameTo${frameSide}`">
        <!-- <div class="wireframe"></div> -->
        <div class="frame relative">
            <img class="" :src="imageSrc" :alt="imageAlt">
        </div>
    </div>
</template>

<style scoped>
.imageBox {
    width: min(90%, 90vw);
    /* height: min(500px, 60vw); */
}
.frame {
    max-width: 100%;
    /* max-height: 100%; */
    isolation: isolate;
}
img {
    max-width: 100%;
    max-height: min(500px, 90vw);
    position: relative;
    object-fit: contain;
}

.frame::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -20px;
    border: 3px solid var(--brand-color-2);
    z-index: -1;
}
.imageBox.frameToLeft .frame::after {
    left: -20px;
}
.imageBox.frameToRight .frame::after  {
    right: -20px;
}
</style>