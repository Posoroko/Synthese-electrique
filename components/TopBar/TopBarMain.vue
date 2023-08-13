<script setup>
// import { topBarContent } from '@/assets/content/topBar.js'


const topBarContent = ref({
    logoUrl: "/images/logo.webp",
    tabs: [
        {
            text: "Dépannage",
            url: "/depannage"
        },
        {
            text: "Installation <br> électrique",
            url: "/installation-electrique"
        },
        {
            text: "Chauffage <br> ventilation",
            url: "/chauffage-et-ventilation"
        }
    ],
    contactLinks: [
        {
            type: "telephone",
            value: "06 00 00 00 00",
            icon: "call"
        },
        {
            type: "email",
            value: "synthese-electrique@outlook.fr",
            icon: "alternate_email"
        },
        {
            type: "address",
            value: "Maël-Carhaix",
            icon: "location_on"
        }
    ]

})


</script>

<template>
    <nav class="topBar w100 flex justifyBetween alignCenter divided_20-60-20">
        <div class="topBarBox logoBox divided_childBox">
            <NuxtLink to="/" class="">
                <img :src="topBarContent.logoUrl" class="logo pointer" alt="Logo synthèse électrique">
            </NuxtLink>
        </div>

        <TopBarTabBox :tabs="topBarContent.tabs" />

        <TopBarBurgerMenu :tabs="topBarContent.tabs" />

        <TopBarContactBox />
        
    </nav>
</template>
<style>
.topBarTab {
    background-color: transparent;
    padding: 10px 25px;
    border-radius: 15px;
    box-shadow: 0 0 15px 10px transparent;
    transition: 300ms ease;
    overflow: visible;
    
}

.topBarTab:hover,
.topBarTab.active {
    background-color: var(--brand-color-2);
    padding: 10px 25px;
    border-radius: 15px;
    box-shadow: 0 0 15px 10px rgba(255, 255, 0, 0.562);
    transition: 300ms ease;
}
</style>

<style scoped>


.logo {
    height: clamp(50px, 10vw, 100px);
}
.logo:hover {
    animation-name: move;
    animation-duration: 300ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
@keyframes move {
    0% {
        transform: translate(0px, 0px);
    }
    20% {
        transform: translate(10px, 0px);
    }
    40% {
        transform: translate(-7.5px, 0px);
    }
    60% {
        transform: translate(5px, 0px);
    }
    80% {
        transform: translate(-2.5px, 0px);
    }
    100% {
        transform: translate(0px, 0px);
    }
}
.topBar {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, var(--brand-color-1) 100%);
    padding: 2vw 2vw;
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

</style>