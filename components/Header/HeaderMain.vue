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
        <img class="w100 imageLandscape" src="/images/ampoule/ampoule-large.jpg" alt="">
        <img class="w100 imagePortrait" src="/images/ampoule/ampoule-square.jpg" alt="">

        <div class="headerTextContainer">
            <!-- <TitleMain class="headerTitle" title="Synthese electric" :line="true" /> -->
            <h2 class="headerTitle">SYNTHESE ELECTRIC</h2>

            <ul class="headerUl headerText marTop20">
                <li>
                    <span>-</span> Installation électrique neuf et rénovation.
                </li>

                <li>
                    <span>-</span> Mise en sécurité électrique.
                </li>

                <li>
                    <span>-</span> Dépannage - Entretien.
                </li>

                <li>
                    <span>-</span> Etude thermique, chauffage électrique et ventilation du bâtiment.
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
    width: max(40%, 70px);
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
    position: absolute;
    top: 50%;
    
    translate: 0% -50%;
    width: min(750px, 75%);
    padding: 30px;
    /* background-color: rgba(0, 0, 0, 0.342); */
    border-radius: 20px;
    /* backdrop-filter: blur(3px); */
}
@media (orientation: landscape) {
    @media (max-width: 1023px) {
        .headerTextContainer {
            right: 0;
            width: 75%;
        }
    }

    @media (min-width: 1024px) {
        .headerTextContainer {
            left: 50%;
            width: 50%;
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
/* .headerText {
    width: min(100%, 35ch);
    font-size: clamp(18px, 3vw, 24px);
    font-family: 'Montserrat', sans-serif;
} */

.imagePortrait {
    filter: brightness(0.7);
}
.imageLandscape {
    filter: brightness(1);
}
@media (orientation: portrait) {
  .imageLandscape {
    display: none;
  }
}
@media (orientation: landscape) {
  .imagePortrait {
    display: none;
  }
}
.headerUl li {
    display: flex;
    gap: 5px;
}
</style>