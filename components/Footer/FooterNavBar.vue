<template>
    <nav class="footerNavBar">
        <ul class="mainWidth h100 mainWidth flex gap10 justifyAround alignCenter wrap">
            <li class="linkText h100">
                <NuxtLink to="/">ACCUEIL</NuxtLink>
            </li>

            <li class="linkText">
                <NuxtLink to="/plan-du-site">PLAN DU SITE</NuxtLink>
            </li>

            <li class="linkText">
                <NuxtLink to="/mentions-legales">MENTIONS LEGALES</NuxtLink>
            </li>

            <li class="linkText">
                <a href="https://www.comkreiz.com/" target="_blank">WEB DESIGNER : COM KREIZ</a>
            </li>

            <li class="linkText ">
                <a class="raleWay" href="https://monsieuredgar.com/" target="_blank">DEV : STUDIO POSOROKO</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.linkText * {
    font-family: 'Montserrat', sans-serif;
}
.linkText:hover {
    color: var(--brand-color-2);
}
a {cursor: pointer;}
.footerNavBar {
    color: white;
    background-color: var(--brand-sec);
    padding: 20px 20px;
    margin-top: 20px;
    background-image: url('/images/cloth-pattern.webp');
    background-repeat: repeat;
}
.linkText {
    border-bottom: 1px solid white;
}
.linkText:hover {
    border-bottom: 1px solid var(--brand-color-2);
}
</style>