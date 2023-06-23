<template>
    <EdSectionMain class="mapSection" :boxes="2" widthClass="mainWidth" :customStyles="[]" wrapModeClass="wrapReverse" boxMinWidth="350px" gap="50px">
        <template v-slot:box1>
            <img class="carte" src="/images/carte.svg" alt="">
        </template>

        <template v-slot:box2>
            <div class="full">
                <TitleMain title="ZONE D'INTERVENTION" :line="true" />

                <p class="bodyText1 bodyParagraphWidth marTop20">
                    Nous intervenons dans un rayon de <b>50 kms autour de Carhaix.</b> <br> <br> <b>Exceptionnellement</b> nous pouvons intervenir <b>au-delà</b> de cette limite. N’hésitez pas à nous contacter, un diagnostic gratuit de votre panne peut, dans certains cas, être effectué.
                </p>
            </div>
        </template>
    </EdSectionMain>
</template>

<style scoped>
.mapSection{
    padding: 80px 0;
}
.carte {
    width: min(500px, 100%);
}
</style>