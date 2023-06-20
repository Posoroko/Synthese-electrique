<script setup>
import { topBarContent } from '@/assets/content/topBar.js'
</script>

<template>
    <nav class="topBar w100 flex justifyBetween alignCenter divided_20-60-20">
        <div class="topBarBox logoBox divided_childBox">
            <NuxtLink to="/" class="">
                <img :src="topBarContent.logoUrl" class="logo" alt="Logo synthèse électrique">
            </NuxtLink>
        </div>

        <TopBarTabBox :tabs="topBarContent.tabs" />
        <TopBarBurgerMenu :tabs="topBarContent.tabs" />

        <div class="topBarBox socialBox flex alignCenter justifyCenter gap20">
            <a v-for="(link, index) in topBarContent.contactLinks" :key="index" :href="link.value" target="_blank" rel="noopener noreferrer">
                <div class="topBarContactIcon icon">{{ link.icon }}</div>
            </a>
        </div>
    </nav>
</template>

<style scoped>


.logo {
    height: 100px;
}
.topBar {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, var(--brand-color-1) 100%);
    padding: 3vw 3vw;
    overflow: visible;
    box-shadow: 0 0 10px black;;
}

.tabBox {
    width: 60%;
}
@media screen and (max-width: 819px) {
    .tabBox {
        display: none;
    }

}
@media screen and (min-width: 820px) {
    .burgerMenu {
        display: none;
    }

}

.topBarTab {
    background-color: transparent;
    padding: 10px 25px;
    border-radius: 15px;
    box-shadow: 0 0 15px 10px transparent;
    transition: 300ms ease;
}
.topBarTab:hover {
    background-color: var(--brand-color-2);
    padding: 10px 25px;
    border-radius: 15px;
    box-shadow: 0 0 15px 10px rgba(255, 255, 0, 0.562);
    transition: 300ms ease;
}




.topBarContactIcon{
    font-size: clamp(20px, 4vw, 30px);
    line-height: clamp(20px, 4vw, 30px);
    color: var(--brand-color-1);
    background-color: #fff;
    padding: 10px;
    border-radius: 500px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.603);
    transition: 300ms ease;
    cursor: pointer;
}
.topBarContactIcon:hover{
    color: white;
    background-color: var(--brand-color-1);
    transition: 300ms ease;
}
</style>