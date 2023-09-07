<script setup>
const certifications = [
    {
        imageUrl: '/images/certifications/cac.webp',
        imageAlt: 'CAC',
        linkUrl: 'https://www.cac-france.fr/'
    },
    {
        imageUrl: '/images/certifications/qualifelec.webp',
        imageAlt: 'Qualifelec',
        linkUrl: 'https://www.qualifelec.fr/'
    }
    , {
        imageUrl: '/images/certifications/maaf-pro-2023.webp',
        imageAlt: 'Artisan référence - MAAF',
        linkUrl: null
    },
    {
        imageUrl: '/images/certifications/silverbat.webp',
        imageAlt: 'Handibat',
        linkUrl: 'https://silverbat.handibat.info/'
    },
    {
        imageUrl: '/images/certifications/faciliti.webp',
        imageAlt: 'Faciliti',
        linkUrl: 'https://www.faciliti.bzh/'
    },
    {
        imageUrl: '/images/certifications/handibat.webp',
        imageAlt: 'Handibat',
        linkUrl: 'https://www.handibat.info/'
    }
]
</script>

<template>
    <EdSectionMain class="certifSection clothPattern" 
        title="Certifications" 
        widthClass="mainWidth" 
        :boxes="1" :customStyles="[]" 
        colorMode="dark" 
        wrapModeClass="wrap" 
        boxMinWidth="50px" 
        gap="10px"
        :bottomSlot="true">

        <template v-slot:box1>
            <div class="w100 flex alignCenter justifyCenter wrap gap30 pad20">
                <div class="linkBox centered" v-for="(certif, index) in certifications" :key="index" >
                    <a v-if="certif.linkUrl" class="certifLink flex alignCenter justifyCenter" :class="{ 'pointer': certif.linkUrl }" :href="certif.linkUrl" target="_blank">
                        <img class="certifImage" :src="certif.imageUrl" :alt="certif.imageAlt">
                    </a>

                    <div v-else class="certifLink centered">
                        <img  class="certifImage" :src="certif.imageUrl" :alt="certif.imageAlt">
                    </div>
                </div>
            </div>
        </template>

        <template v-slot:bottomSlot>
            <p class="mainWidth textAlignCenter pad20 bodyText1">
                Électriciens habilités conformément à la norme NF C18-510 (renouvellement triennal).  Artisan formé sur les modules de formation PRAXIBAT et FEEBAT Renov’ (RGE), ainsi que sur les pathologies liées à l’humidité de vos bâtiments pour la rénovation thermique de vos locaux.
            </p>
        </template>
    </EdSectionMain>
</template>

<style scoped>
.certifSection {
    padding: 80px 0;
}
.linkBox {
    width: max(calc(100% / 7), 150px);
    height: 150px;
}
.certifLink{
    /* width: 100%; */
    height: 100%;    
    rotate: 0deg;
    transition: 100ms ease;
}

.certifLink img{
    max-width: 100%;
    max-height: 100%;
}

.linkBox:nth-child(1){
    aspect-ratio: 1/1;
    border-radius: 500px;
}
.linkBox:nth-child(1) img{
    border-radius: 500px;
    
}
.certifLink.pointer img{
    box-shadow: 0 0 7px 7px rgb(0, 0, 0);
    transition: 100ms ease;
}
.certifLink.pointer:hover img{
    scale: 1.02;
    box-shadow: 0 0 10px 10px rgb(0, 0, 0);
    transition: 100ms ease;
}
</style>