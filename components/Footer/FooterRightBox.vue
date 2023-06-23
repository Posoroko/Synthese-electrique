<template>
    <div class="w100 flex justifyCenter">
        <div class="frame flex column alignCenter">
            <div class="titleFrame">
                <FooterSchedule />
            </div>
            <p class="scheduleText">Du lundi au vendredi</p>
            <p class="scheduleText">de 8h30 à 18h30</p>
            <p class="scheduleText">et le samedi (appel</p>
            <p class="scheduleText">uniquement ) de 9h à 12h.</p>
        </div>
    </div>
</template>

<style scoped>
.rightBox {
    padding: 30px;
} 
.frame {
    padding: 10px 30px 30px 30px;
    border: 2px solid var(--brand-color-2);
}
.titleFrame {
    width: 100%;
    height: 100px;
    position: relative;
}
.scheduleText {
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5;
}
.titleFrame svg {
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 160%;
}
</style>