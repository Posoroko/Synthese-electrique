<script setup>
const props = defineProps({
    images: Array,
    collection: String
})
const counter = ref(0)

const swapImage = (e) => {
    counter.value = e.target.dataset.index
}
</script>

<template>
    <EdSectionMain 
        class="photoAlbumSection"
        title="Réalisations" 
        widthClass="mainWidth" 
        :customStyles="['clothPattern']" 
        colorMode="dark" :boxes="2" 
        boxMinWidth="450px" gap="50px" 
        wrapModeClass="wrap">

        <template v-slot:box1>
            <div class="full centered marTop20">
                <CustomImageBoxMain :imageSrc="`/images/${collection}/large/${images[counter].url}`" :imageAlt="images[counter].alt" frameSide="Right" />
            </div>
        </template>

        <template v-slot:box2>
            <div class="bodyText1 w100 pad20">
                <h3 class="imageTitle montserrat-700-italic">{{ images[counter].title }}</h3>
                <p>{{ images[counter].alt }}</p>
            </div>
            <div class="full h100 pad20">
                <img class="thumbnail" v-for="image in images" :key="image.id" 
                :data-index="image.id" :src="`/images/${collection}/small/${image.url}`" :alt="image.alt"
                @click="swapImage">
            </div>
        </template>
    </EdSectionMain>

</template>

<style scoped>
.imageTitle {
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
}
.photoAlbumSection{
    padding: 50px 0;
}
.thumbnail {
    width: clamp(50px, 10vw, 100px);
    aspect-ratio: 1/1;
    object-fit: cover;
    margin-right: 4px;
    cursor: pointer;
    transform: rotateZ(0deg);
    transition: 100ms ease;
}
.thumbnail:hover {
    scale: 1.05;
    z-index: 1000;
    transition: 100ms ease;
    box-shadow: 0 0 15px 5px rgb(0, 0, 0);
}
</style>