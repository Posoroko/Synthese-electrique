<script setup>
import { imagesInstallation  } from '@/assets/content/imagesInstallation.js'

</script>

<template>
    <CustomInstallationIntroSection />

    <CustomPhotoAlbumSectionMain collection="installation-electrique" :images="imagesInstallation" />
    <!-- <CustomRenovationTarifsSection /> -->
</template>