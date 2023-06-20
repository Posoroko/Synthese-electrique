<script setup>

</script>

<template>
    <header class="relative">
        <img class="w100 imageLandscape" src="/images/ampoule/ampoule-large.jpg" alt="">
        <img class="w100 imagePortrait" src="/images/ampoule/ampoule-square.jpg" alt="">

        <div class="headerTextContainer">
            <TitleMain class="headerTitle" title="Synthèse électrique" :line="true" />

            <ul class="headerText marTop20">
                <li>
                    - Installation électrique neuf et rénovation.
                </li>

                <li>
                    - Mise en sécurité électrique.
                </li>

                <li>
                    - Dépannage - Entretien.
                </li>

                <li>
                    - Etude thermique, chauffage électrique et ventilation du bâtiment.
                </li>
            </ul>
        </div>
    </header>
</template>

<style>
header {
    flex-grow: 1;
    overflow: hidden;
    /* background-image: url('/images/ampoule-1920.webp');
    background-position: right;
    background-size: cover; */
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
    right: 5%;
    width: max(250px, 40%);
    transform: translateY(-50%);
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.342);
    border-radius: 20px;
    backdrop-filter: blur(3px);
}
.headerTextContainer * {
    color: white;
}
.headerText {
    width: min(100%, 35ch);
    font-size: clamp(18px, 3vw, 24px);
    font-family: 'Montserrat', sans-serif;
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
</style>