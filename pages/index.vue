<template>
    <SectionMain colorMode="light">
        <SectionBoxes5050 flexWrapMode="wrap">
            <template v-slot:leftBox>
                <p class="bodyText1 bodyParagraph">
                    <b>Synthèse-Electric</b> est une société artisanale basée à <b>Maël-Carhaix</b> (22), représentée par Mr FONTAINE Frédéric, présentant une <b>expérience</b> de plus de <b>20 ans</b> (depuis 2001), spécialisé dans les domaines de l'<b>entretien</b>, la <b>mise en sécurité</b>, la <b>création</b> et la <b>rénovation</b> des installations électriques, ainsi que sur l’<b>étude thermique</b> et la <b>ventilation</b> des bâtiments d’habitation et locaux tertiaires. 
                    <br><br>
                    Nous intervenons pour les <b>particuliers</b> (habitat individuel), les <b>collectifs d’habitation</b> et les <b>locaux</b> à usage <b>professionnel</b> accueillant du public (ERP) et des travailleurs (ERT).
                </p>
            </template>

            <template v-slot:rightBox>
                <CustomImageBoxMain orientation="landscape" imageSrc="/images/wall-600-100q.webp" />
            </template>
        </SectionBoxes5050>
    </SectionMain>

    <SectionMain colorMode="light">
        <SectionBoxesMain boxes="3" flexWrapMode="wrap">
            <template v-slot:box1>
                <CustomServiceButton link="/" icon="tools_pliers_wire_stripper" />
            </template>
        </SectionBoxesMain>
    </SectionMain>
    
</template>

<style scoped>

</style>