<script setup>
    const props = defineProps({
        // orientation: String,
        options: ['portrait', 'landscape'],
        imageSrc: String,
        imageAlt: String
    })
</script>

<template>
    <div class="imageBox centered">
        <!-- <div class="wireframe"></div> -->
        <div class="frame relative">
            <img class="" :src="imageSrc" :alt="imageAlt">
        </div>
    </div>
</template>

<style scoped>

.imageBox {
    padding: 0 0 20px 20px;
    position: relative;
}
.imageBox {
    width: min(90%, 90vw);
    height: min(500px, 90vw);
}
.frame {
    max-width: 100%;
    max-height: 100%;
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
    left: -20px;
    border: 3px solid var(--brand-color-2);
    z-index: -1;
}

</style>