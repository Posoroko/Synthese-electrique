<script setup>
const activeToolTip = ref("");

function handleTouch(e) {
    let target = e.currentTarget.dataset.name;
    if(activeToolTip.value === target) {
        activeToolTip.value = ""
        return;
    }
    activeToolTip.value = target
}

onMounted(() => {
    const closeTooltip = (e) => {
        if (!e.target.closest('.barCallButton')) {
            activeToolTip.value = "";
        }
    };

    const closeTooltipOnScroll = () => {
        activeToolTip.value = "";
    };

    window.addEventListener('click', closeTooltip);
    window.addEventListener('scroll', closeTooltipOnScroll);

    onUnmounted(() => {
        window.removeEventListener('click', closeTooltip);
        window.removeEventListener('scroll', closeTooltipOnScroll);
    });
});

</script>

<template>
    <div class="socialBox flex alignCenter justifyCenter relative">
        <div class="barCallButton barButton">
            <div class="iconBox relative pointer">
                <div class="touch" data-name="call" @touchstart="handleTouch">
                    <WidgetsHoverIcon name="call" colorClass="whiteBG" />
                </div>
            </div>

            <div class="toolTip callToolTip flex column gap5" :class="{ 'active': activeToolTip === 'call' }">
                <a class=" appearingButton pointer" href="tel:+33256431150">
                    <span class="iconBox">
                        <WidgetsHoverIcon name="call" colorClass="blueBG"/>
                    </span>
                
                    <span class="montserrat">02 56 43 11 50</span>
                </a>

                <a class=" appearingButton pointer" href="tel:+33616614997">
                    <span class="iconBox">
                        <WidgetsHoverIcon name="call" colorClass="blueBG"/>
                    </span>
                
                    <span class="montserrat-400">06 16 61 49 97</span>
                </a>
            </div>
        </div>

        <a class="barButton pointer" href="mailto:synthese-electrique@outlook.fr" rel="noopener noreferrer">
            <div class="iconBox">
                <WidgetsHoverIcon name="email" colorClass="whiteBG" />
            </div>
        </a>

        <div class="barButton barLocButton pointer" data-target="location">
            <a class="iconBox block" href="#footerAddress">
                <WidgetsHoverIcon name="location" colorClass="whiteBG" />
            </a>

            <div class="toolTip locToolTip appearingButton location"> 
                <span class="iconBox">
                    <WidgetsHoverIcon name="location" colorClass="blueBG" />
                </span>

                <span class="montserrat-400">
                    Maël-Carhaix
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    user-select: none;
}
.socialBox {
    flex-wrap: wrap;
    gap: clamp(5px, 3vw, 20px);
    z-index: 100000;
}
.barButton .iconBox {
    width: clamp(40px, 5vw, 48px);
    aspect-ratio: 1/1;
}
.appearingButton{
    background-color: #fff;
    padding: 5px 15px 5px 5px;
    border-radius: 100px;
    box-shadow: 3px 3px 10px black;
    display: flex;
    align-items: center;
    gap: 10px;
}
.toolTip {
    top: 130%;
    display: none;
    position: absolute;
}
.toolTip.active {
    display: flex;
}
.callToolTip {
    left: -50px;
}
.locToolTip {
    right: 0px;
}

.appearingButton .iconBox {
    width: 40px;
    height: 40px;
}

@media screen and (hover: hover) {
    .barCallButton:hover  .toolTip,
    .barLocButton:hover .toolTip{
        display: flex;
    }
}
</style>