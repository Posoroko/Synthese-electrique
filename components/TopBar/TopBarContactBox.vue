<script setup>
const telNumBoxIsOpen = ref(false)
const maelCarhaixIsOpen = ref(false)

document.addEventListener('scroll', () => {
    if(telNumBoxIsOpen.value) telNumBoxIsOpen.value = false
    if(maelCarhaixIsOpen.value) maelCarhaixIsOpen.value = false
})
document.addEventListener('click', (e) => {
    if(telNumBoxIsOpen.value && !e.target.closest('.telNumBox') && !e.target.closest('.callButtonTell')) {
        telNumBoxIsOpen.value = false
        return
    }
    if (!e.target.closest('.maelCarhaix') && !e.target.closest('.locationHoverable') && maelCarhaixIsOpen.value) {
        maelCarhaixIsOpen.value = false
        return
    }
})

function handleHover(e) {
    const target = e.currentTarget.dataset.target
    if(target === 'telephone' && !telNumBoxIsOpen.value) {
        telNumBoxIsOpen.value = true

        if(maelCarhaixIsOpen) maelCarhaixIsOpen.value = false
        return
    }
    if(target === 'location' && !maelCarhaixIsOpen.value) {
        maelCarhaixIsOpen.value = true

        if(telNumBoxIsOpen) telNumBoxIsOpen.value = false
        return
    }
    telNumBoxIsOpen.value = false
    maelCarhaixIsOpen.value = false
}



</script>

<template>
    <div class="socialBoxMobile topBarBox socialBox r alignCenter justifyCenter relative">
        <div class="topBarContactIcon icon callButtonTell pointer" @click="handleHover" data-target="telephone">call</div>

        <div class="telNumBox" :class="[telNumBoxIsOpen ? 'open' : 'closed']">
            <a class="mobileCallButton appearingButton pointer" href="tel:0256431150">
                <span class="icon">call</span><span class="">02 56 43 11 50</span>
            </a>

            <a class="mobileCallButton appearingButton pointer" href="tel:0616614997">
                <span class="icon">call</span><span>06 16 61 49 97</span>
            </a>
        </div>

        <a class="topBarContactIcon icon pointer" href="mailto:synthese-electrique@outlook.fr" rel="noopener noreferrer">alternate_email</a>

        <a class="topBarContactIcon icon pointer" href="#footerAddress">location_on</a>
    </div>

    <div class="socialBoxDesktop topBarBox socialBox  alignCenter justifyCenter relative">
        <div class="topBarContactIcon icon callButtonTell" @mouseenter="handleHover" @mouseleave="handleHover" data-target="telephone">call</div>

        <div class="telNumBox" :class="[telNumBoxIsOpen ? 'open' : 'closed']">
            <a class=" appearingButton" href="#">
                <span class="icon">call</span><span class="">02 56 43 11 50</span>
            </a>

            <a class=" appearingButton" href="#">
                <span class="icon">call</span><span>06 16 61 49 97</span>
            </a>
        </div>

        <a class="topBarContactIcon icon pointer" href="mailto:synthese-electrique@outlook.fr" rel="noopener noreferrer">alternate_email</a>

        <a class="topBarContactIcon locationHoverable icon" href="#" @mouseenter="handleHover" @mouseleave="handleHover" data-target="location">location_on</a>

        <p class="appearingButton location" v-if="maelCarhaixIsOpen"> <span class="icon">location_on</span> Maël-Carhaix</p>
    </div>
</template>

<style scoped>
* {
    user-select: none;
}
.socialBox {
    flex-wrap: wrap;
    gap: clamp(5px, 3vw, 20px);
}
.telNumBox {
    position: absolute;
    top: 125%;
    left: 0%;
    transform: translate(-35%, 0%);
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 1000;
    overflow: hidden;
    overflow: visible;
}
.telNumBox.closed {
    overflow: hidden;
    opacity: 0;
    transition: 100ms ease;
    pointer-events: none;
}
.telNumBox.open {
    opacity: 1;
    transition: 100ms ease;
    pointer-events: all;
}
.appearingButton {
    height: 48px;
    background-color: #fff;
    padding: 0 10px;
    border-radius: 100px;
    display: flex;
    gap: 10px;
    align-items: center;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.616);
}
.appearingButton.location {
    position: absolute;
    top: 125%;
    right: 0;
    z-index: 1000;
}
.appearingButton .icon {
    width: 30px;
    height: 30px;
    color: white;
    background-color: green;
    border-radius: 100px;
    padding: 5px;
    display: grid;
    place-items: center;
}

.topBarContactIcon{
    font-size: clamp(20px, 4vw, 30px);
    line-height: clamp(20px, 4vw, 30px);
    color: var(--brand-color-1);
    background-color: #fff;
    padding: 10px;
    border-radius: 500px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.603);
    transition: 300ms ease;
}
.topBarContactIcon:hover{
    color: white;
    background-color: var(--brand-color-1);
    transition: 300ms ease;
}

.socialBoxMobile .topBarContactIcon:hover {
    background-color: var(--brand-color-1);
}

@media screen and (hover: none) {
    .socialBoxDesktop{
        display: none;
    }
    .socialBoxMobile{
        display: flex;
    }
}

@media screen and (hover: hover) {
    .socialBoxDesktop{
        display: flex;
    }
    .socialBoxMobile{
        display: none;
    }
}
</style>