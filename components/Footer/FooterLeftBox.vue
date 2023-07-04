<template>
    <address class="h100 flex column alignCenter justifyCenter gap20" id="footerAddress">
        <div class="w100 pad20">
            <TitleMain class="bodyTitle" title="SYNTHESE ELECTRIC" type="unboxed" :line="true" />
        </div>

        <ul class="addressList flex column gap20 "> 
            <!-- <li class="flex alignCenter gap10 "> <span class="icon">call</span> 02 56 43 11 50 - 06 16 61 49 97</li>  -->
            
            <li>
                <span class="flex alignCenter gap10 pointer mailLink" href="tel:0616614997">
                    <span class="icon">call</span> 
                    <a href="tel:0256431150">02 56 43 11 50</a> - 
                    <a href="tel:0616614997">06 16 61 49 97</a>
                </span>
            </li>

            <li>
                <a class="flex alignCenter gap10 pointer mailLink" href="mailto:synthese-electric@outlook.fr">
                    <span class="icon">alternate_email</span> synthese-electric@outlook.fr
                </a>
            </li> 

            <li class="flex alignCenter gap10">
                <span class="icon">location_on</span> Maël-Carhaix
            </li> 
        </ul>
    </address>
</template>

<style scoped>
.addressList li {
    font-size: clamp(15px, 3vw, 20px);
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
}
.addressList li .icon {
    font-size: clamp(20px, 3vw, 30px);
    color: var(--brand-color-2);
    font-weight: 700;
}
.mailLink {
    color: black;
    transition: 300ms ease;
}
.mailLink:hover {
    color: var(--brand-color-2);
    transition: 20ms ease;
}
</style>