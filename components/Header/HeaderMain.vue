<script setup>
const route = useRoute()
const flash = ref(false)

watch(() => route.path, (path) => {
    flash.value = false
    setTimeout(() => {
        flash.value = true
    }, 100)
})
</script>

<template>
    <header class="relative" :class="{ 'flash': flash }">
        <picture>
            <source srcset="/images/ampoule/ampoule-square.webp" media="(orientation: portrait)">

            <img class="w100 imageLandscape" src="/images/ampoule/ampoule-large.webp" alt="">
        </picture>
        
        <div class="headerTextContainer">
            <!-- <TitleMain class="headerTitle" title="Synthese electric" :line="true" /> -->
            <h2 class="headerTitle">SYNTHESE ELECTRIC</h2>

            <ul class="headerUl headerText marTop20 w100">
                <li>
                    <span>-</span> Installation électrique neuf et rénovation.
                </li>

                <li>
                    <span>-</span> Mise en sécurité électrique.
                </li>

                <li>
                    <span>-</span> Dépannage - Entretien.
                </li>

                <li class="">
                    <span>-</span> Etude thermique des locaux existants, chauffage électrique et ventilation du bâtiment.
                </li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
h2, li {
    text-shadow: 1px 1px 5px rgb(0, 0, 0);
}
.headerTitle::after {
    content: "";
    display: block;
    width: max(30%, 70px);
    height: 3px;
    background-color: var(--brand-color-2);
    margin-top: 5px;
}
header {
    flex-grow: 1;
    overflow: hidden;
    /* background-image: url('/images/ampoule-1920.webp');
    background-position: right;
    background-size: cover; */
}
header.flash::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    animation: flash 300ms ease-in-out forwards;
}
@keyframes flash {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
.headerTextContainer {
    width: 50%;
    padding: 30px;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    translate: 0% -50%;
    right: 0;
}
@media (orientation: landscape) {
    @media (max-width: 1023px) {
        .headerTextContainer {
            right: 0;
            width: 75%;
        }
    }

    @media (min-width: 1024px) {
        li {
            width: 40ch;
        }

    }
}
@media (orientation: portrait){
    @media (max-width: 1024px) {
        .headerTextContainer {
            right: 0%;
            width: 60%;
        }
        
    }
    @media (max-width: 500px) {
        .headerTextContainer {
            right: 0%;
            width: 75%;
        }
        
    }
}




.headerTextContainer * {
    color: white;
}

.imagePortrait {
    filter: brightness(0.7);
}
.imageLandscape {
    filter: brightness(1);
}

.headerUl li {
    max-width: 85%;
    display: flex;
    gap: 5px;
}
</style>