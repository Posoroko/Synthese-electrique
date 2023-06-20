<script setup>
import { imagesChauffage } from '@/assets/content/imagesChauffage.js'
</script>

<template>

    <CustomChauffageIntroSection />

    <CustomPhotoAlbumSectionMain collection="chauffage-ventilation" :images="imagesChauffage" />
</template>