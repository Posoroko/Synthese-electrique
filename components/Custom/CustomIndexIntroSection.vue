<template>
    <EdSectionMain class="mapSection" :boxes="2" widthClass="mainWidth" :customStyles="[]" wrapModeClass="wrapReverse"
        boxMinWidth="350px" gap="50px">
        <template v-slot:box1>
            <div class="full centered">
                <p class="bodyText1 bodyParagraphWidth marTop20">
                    <b>Synthèse-Electric</b> est une société artisanale basée à <b>Maël-Carhaix</b> (22), représentée par Mr FONTAINE Frédéric, présentant une <b>expérience</b> de plus de <b>20 ans</b> (depuis 2001), spécialisé dans les domaines de l’<b>entretien</b>, la <b>mise en sécurité</b>, la <b>création</b> et la <b>rénovation</b> des installations électriques, ainsi que sur l’<b>étude thermique</b> et la <b>ventilation</b> des bâtiments d’habitation et locaux tertiaires.
                    <br><br>
                    Nous intervenons pour les <b>particuliers</b> (habitat individuel), les <b>collectifs d’habitation</b> et les <b>locaux</b> à usage <b>professionnel</b> accueillant du public (ERP) et des travailleurs (ERT).
                </p>
            </div>
        </template>

        <template v-slot:box2>
            <CustomImageBoxMain orientation="landscape" imageSrc="/images/wall-600-100q.webp" />
        </template>
    </EdSectionMain>
</template>

<style scoped>
.mapSection {
    padding: 80px 0;
}

.carte {
    width: min(500px, 100%);
}</style>