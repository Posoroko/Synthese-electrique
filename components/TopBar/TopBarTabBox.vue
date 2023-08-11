<script setup>
const route = useRoute()

const props = defineProps({
    tabs: Array
})

const localTabs = [
    {
        text: "Dépannage",
        url: "/depannage"
    },
    {
        text: "Installation électrique",
        url: "/installation-electrique"
    },
    {
        text: "Chauffage ventilation",
        url: "/chauffage-et-ventilation"
    }
]
</script>

<template>
    <div class="topBarBox tabBox flex justifyEvenly gap20 flex" >
        <NuxtLink class="topBarTabText topBarTab flex alignCenter textAlignCenter pointer" :class="{ 'active': route.path == tab.url }"  v-for="(tab, index) in localTabs" :key="index" :to="tab.url">
        {{ tab.text }}
        </NuxtLink>

    </div>
</template>

