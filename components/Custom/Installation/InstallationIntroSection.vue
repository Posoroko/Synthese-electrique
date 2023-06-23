<template>
    <EdSectionMain class="mapSection" title="Neuf et rénovation" :boxes="2" widthClass="mainWidth" :customStyles="[]"
        wrapModeClass="wrap" boxMinWidth="350px" gap="50px">
        <template v-slot:box1>
            <div class="full centered">

                <div class="textFrame flex alignStart column">
                    <ul class="">
                        <li class="bodyText1">Diagnostic électrique</li>
                        <li class="bodyText1">Installation électrique</li>
                        <li class="bodyText1">Mise en sécurité des installations existantes</li>
                        <li class="bodyText1">Mise en conformité des bâtiments</li>
                        <li class="bodyText1">...</li>
                    </ul>

                    <p class="bodyText1  marTop20">
                        Les travaux de rénovation, de <b>dépannage</b> et d’entretien électrique pour les locaux à usage
                        d’<b>habitation</b> achevés depuis <b>plus de 2 ans</b> sont soumis à une <b>TVA</b> au taux réduit
                        de <b>10%.</b>
                        <br><br>
                        Seuls les locaux à <b>usage professionnel</b> ou d’<b>habitation</b> achevés depuis <b>moins de 2
                            ans</b> (extensions sur les habitations existantes achevées depuis plus de 2 ans incluses) sont
                        soumis au taux de TVA de <b>20%</b>.
                    </p>
                </div>
            </div>
        </template>

        <template v-slot:box2>
            <div class="frame centered">
                <CustomImageBoxMain orientation="portrait" imageSrc="/images/eclairage-salle-de-restauration.webp" frameSide="Left"/>
            </div>
        </template>
    </EdSectionMain>
</template>

<style scoped>
.textFrame {
    width: 80%;
    margin: auto;
}

.frame {
    height: 500px;
    width: 100%;
}

ul {
    padding-left: 20px;
}

li {
    list-style-type: disc;

}</style>