<script setup>
const props = defineProps({
    link: String,
    icon: String
})
</script>

<template>
    <NuxtLink class="serviceLink" :to="link">
        <div class="icon">{{ icon }}</div>
    </NuxtLink>
</template>

<style scoped>
.serviceLink {
    width: min(200px, 80%);
    aspect-ratio: 1/1;
    border-radius: 500px;
}
</style>