<script setup>
const telNumBoxIsOpen = ref(false)
const maelCarhaixIsOpen = ref(false)


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

onMounted(() => {
    document.addEventListener('scroll', () => {
        if (telNumBoxIsOpen.value) telNumBoxIsOpen.value = false
        if (maelCarhaixIsOpen.value) maelCarhaixIsOpen.value = false
    })
    document.addEventListener('click', (e) => {
        if (telNumBoxIsOpen.value && !e.target.closest('.telNumBox') && !e.target.closest('.callButtonTell')) {
            telNumBoxIsOpen.value = false
            return
        }
        if (!e.target.closest('.maelCarhaix') && !e.target.closest('.locationHoverable') && maelCarhaixIsOpen.value) {
            maelCarhaixIsOpen.value = false
            return
        }
    })
})


</script>

<template>
    <div class="socialBoxMobile topBarBox socialBox alignCenter justifyCenter relative">
        <div class="topBarContactIcon icon callButtonTell pointer" @click="handleHover" data-target="telephone">call</div>

        <div class="telNumBox" :class="[telNumBoxIsOpen ? 'open' : 'closed']">
            <a class="mobileCallButton appearingButton pointer" href="tel:0256431150">
                <span class="icon"><Icon name="call" color="var(--brand-color-2)"></Icon> </span><span class="montserrat">02 56 43 11 50</span>
            </a>

            <a class="mobileCallButton appearingButton pointer" href="tel:0616614997">
                <span class="icon">call</span><span class="montserrat-400">06 16 61 49 97</span>
            </a>
        </div>

        <a class="topBarContactIcon icon pointer" href="mailto:synthese-electrique@outlook.fr" rel="noopener noreferrer">alternate_email</a>

        <a class="topBarContactIcon icon pointer" href="#footerAddress">location_on</a>
    </div>

    <div class="socialBoxDesktop topBarBox socialBox  alignCenter justifyCenter relative">
        <div class="topBarContactIcon callButtonTell" @mouseenter="handleHover" @mouseleave="handleHover" data-target="telephone">
            <div class="icon normal">
                <Icon name="call" color="var(--brand-color-1)" />
            </div>

            <div class="icon hovered">
                <Icon name="call" color="white" />
            </div>
        </div>

        <div class="telNumBox" :class="[telNumBoxIsOpen ? 'open' : 'closed']">
            <a class=" appearingButton" href="#">
                <span class="iconBox">
                    <Icon name="call" color="white" />
                </span>
                
                <span class="montserrat">02 56 43 11 50</span>
            </a>

            <a class=" appearingButton" href="#">
                <span class="iconBox">
                    <Icon name="call" color="white" />
                </span>
                
                <span class="montserrat-400">06 16 61 49 97</span>
            </a>
        </div>

        <a class="topBarContactIcon icon pointer" href="mailto:synthese-electrique@outlook.fr" rel="noopener noreferrer">
            <div class="icon normal">
                <Icon name="email" color="var(--brand-color-1)" />
            </div>

            <div class="icon hovered">
                <Icon name="email" color="white" />
            </div>
        </a>

        <a class="topBarContactIcon locationHoverable icon" href="#" @mouseenter="handleHover" @mouseleave="handleHover" data-target="location">
            <div class="icon normal">
                <Icon name="location" color="var(--brand-color-1)" />
            </div>
        
            <div class="icon hovered">
                <Icon name="location" color="white" />
            </div>
        </a>

        <p class="appearingButton location montserrat-400" v-if="maelCarhaixIsOpen"> <span class="icon">
            <span class="iconBox">
                <Icon name="location" color="white" />
            </span>
        </span> Maël-Carhaix</p>
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
.appearingButton .iconBox {
    width: 30px;
    height: 30px;
    color: white;
    background-color: var(--brand-color-1);
    border-radius: 100px;
    padding: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.topBarContactIcon{
    height: 48px;
    aspect-ratio: 1/1;

    color: var(--brand-color-1);
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.603);
    transition: 300ms ease;
    overflow: hidden;
    display: grid;
    place-items: center;
}
.topBarContactIcon > div {
    height: 60%;
    aspect-ratio: 1/1;
}
.topBarContactIcon:hover{
    color: white;
    background-color: var(--brand-color-1);
    transition: 300ms ease;
}
.topBarContactIcon .normal,
.topBarContactIcon:hover .hovered{
    display: block;
}
.topBarContactIcon:hover .normal,
.topBarContactIcon .hovered{
    display: none;
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