<script setup>
const props = defineProps({
    tabs: Array
})

const burgerIsOpen = ref(false)

document.addEventListener('scroll', () => {
    burgerIsOpen.value = false
})

const flipBurger = () => {
    if(!burgerIsOpen.value) {
        burgerIsOpen.value = true
        
    }
    else {
        burgerIsOpen.value = false
    }
}

</script>

<template>
    <div class="topBarBox burgerMenu centered relative">
        <div class="icon burgerIcon pointer flex alignCenter" @click="flipBurger">menu</div>
        
        <div class="burgerTabBox absolute flex column" v-if="burgerIsOpen">
            <NuxtLink class="topBarTabText topBarTab flex alignCenter textAlignCenter pointer" v-html="tab.text"
                v-for="(tab, index) in tabs" :key="index" :to="tab.url">

            </NuxtLink>

            <span class="icon closeButton absolute top0 right0 pad5 pointer" @click="flipBurger">close</span>
        </div>
    </div>
</template>

<style scoped>
.topBarBox {
    overflow: visible;
}
.burgerIcon{
    height: 60px;
    width: 60px;
    font-size: 40px;
    color: var(--brand-color-1);
    background-color: #fff;
    padding: 10px;
    border-radius: 500px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
}
.burgerMenu {
    flex-grow: 1;
}
.burgerTabBox {
    background-color: #fff;
    padding: 50px 20px 20px 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.527);
    top: 125%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;

    gap: 10px;
}
.closeButton {
    font-size: 30px;
}
.topBarTab {
    background-color: transparent;
    padding: 10px 25px;
    border-radius: 15px;
    box-shadow: 0 0 15px 10px transparent;
    transition: 300ms ease;
}
.topBarTab:hover {
    background-color: var(--brand-color-2);
    box-shadow: 0 0 15px 10px rgba(255, 255, 0, 0.562);
    transition: 300ms ease;
}
</style>