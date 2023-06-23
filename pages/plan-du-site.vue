<script setup>
definePageMeta({
    layout: "headerless",
});
</script>

<template>
    <div class="w100 flex column gap20 pad20 marTop50">
        <h1 class="mainWidth bodyTitle">PLan du site</h1>
        <ul class="mainWidth">
            <li class="bodyText1 pointer">
                <NuxtLink  to="/">
                    Accueil
                </NuxtLink>
            </li>
            <li class="bodyText1 pointer">
                <NuxtLink to="/depannage">
                    Dépannage
                </NuxtLink>
            </li>
            <li class="bodyText1 pointer">
                <NuxtLink to="/installation-electrique">
                    Installation électrique
                </NuxtLink>
            </li>
            <li class="bodyText1 pointer">
                <NuxtLink to="/chauffage-et-ventilation">
                    Chauffage ventilation
                </NuxtLink>
            </li>
            <li class="bodyText1 pointer">
                <NuxtLink to="mentions-legales">
                    Mentions légales
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    padding: 30px;
}
li {
    list-style-type: disc;
    margin-bottom: 10px;
}
</style>