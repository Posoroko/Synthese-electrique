<template>
    <EdSectionMain class="mapSection" title="chauffage et ventilation" :boxes="2" widthClass="mainWidth" :customStyles="[]"
        wrapModeClass="wrap" boxMinWidth="350px" gap="50px">
        <template v-slot:box1>
            <div class="full centered">

                <div class="textFrame flex alignStart column">
                    <ul class="">
                        <li class="bodyText1">Etude, dimensionnement et installation de chauffage électrique individuel, connecté et gestion centralisée.</li>
                        <li class="bodyText1">Etude, dimensionnement et installation de ventilation résidentielle et tertiaire simple et double flux (VMC, VPI, VMR, VPH et naturelle).</li>
                        <li class="bodyText1">Entretien des réseaux de ventilation existants.</li>
                        <li class="bodyText1">...</li>
                    </ul>

                    <p class="bodyText1  marTop20">
                        Qualification spécifique RGE VENTILATION.
                    </p>
                </div>
            </div>
        </template>

        <template v-slot:box2>
            <div class="frame centered">
                <CustomImageBoxMain orientation="portrait" imageSrc="/images/vmc.webp" frameSide="Left" />
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
    /* height: 500px; */
    width: 100%;
    flex-grow: none;
}

ul {
    padding-left: 20px;
}

li {
    list-style-type: disc;

}</style>