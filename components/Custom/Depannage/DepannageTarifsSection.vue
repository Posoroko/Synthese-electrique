<script setup>

</script>

<template>
    <EdSectionMain title="Tarifs" class="tarifsSection" widthClass="mainWidth" :customStyles="['clothPattern']"
        colorMode="dark" :boxes="3" boxMinWidth="250px" gap="40px" wrapModeClass="wrap">
        <template v-slot:box1>
            <div class="tarifDisc">
                <h3>Forfait</h3>

                <p class="textAlignCenter">Déplacement {{ `< ` }}15kms <br> +1h de main d'oeuvre</p>

                <p class="price">69€ HT</p>
            </div>
        </template>

        <template v-slot:box2>
            <div class="tarifDisc">
                <h3>Déplacement</h3>
                <div class="marTop10">
                    <p>{{ `< ` }}50kms = <span class="price">25€ HT</span></p>
                    <p>{{ `> ` }}50kms = <span class="price">50€ HT</span></p>
                </div>
            </div>
        </template>

        <template v-slot:box3>
            <div class="tarifDisc">
                <h3>Main d’oeuvre</h3>
                <p class="price marTop20">52€ HT/H</p>
            </div>
        </template>
    </EdSectionMain>
</template>

<style scoped>
.tarifDisc * {
    font-family: 'Montserrat', sans-serif;
}
.tarifsSection {
    padding: 50px 0;
}
.tarifDisc {
    width: min(250px, 90%);
    aspect-ratio: 1/1;
    border-radius: 500px;
    overflow: hidden;
    cursor: pointer;
    background-color: #1a1a1a;
    box-shadow: 0 0 10px black;
    transition: 300ms ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    /* padding: 30px 20px; */
    gap: 20px;
    padding-top: 50px;
}
.tarifDisc h3 {
    font-size: 24px;
    font-weight: 700;
    padding: 1px 3px;
    position: relative;
}
.tarifDisc h3::after {
    content: '';
    width: 80px;
    height: 2px;
    left: 50%;
    top: 105%;
    transform: translate(-50%, 0%);
    background-color: var(--brand-color-2);
    position: absolute;
}
p {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
}
.price {
    font-size: 20px;
    font-weight: 700;
    color: var(--brand-color-2);
}
</style>