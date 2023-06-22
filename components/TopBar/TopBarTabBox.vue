<script setup>
const route = useRoute()

const props = defineProps({
    tabs: Array
})
</script>
<template>
    <div class="topBarBox tabBox flex justifyEvenly gap20 flex">
        <NuxtLink class="topBarTabText topBarTab flex alignCenter textAlignCenter pointer" :class="{ 'active': route.path == tab.url }" v-html="tab.text" v-for="(tab, index) in tabs" :key="index" :to="tab.url">
        
        </NuxtLink>
    </div>
</template>

