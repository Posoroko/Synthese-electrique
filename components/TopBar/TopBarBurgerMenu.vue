<script setup>
const route = useRoute()

const props = defineProps({
    tabs: Array
})

const burgerIsOpen = ref(false)



const flipBurger = () => {
    if(!burgerIsOpen.value) {
        burgerIsOpen.value = true
        
    }
    else {
        burgerIsOpen.value = false
    }
}
onMounted(() => {
    document.addEventListener('scroll', () => {
        if (burgerIsOpen.value) burgerIsOpen.value = false
    })
    document.addEventListener('click', (e) => {
        if (burgerIsOpen.value && !e.target.closest('.burgerIcon') && !e.target.closest('.topBarTab') && !e.target.closest('.burgerTabBox')) {
            burgerIsOpen.value = false
            return
        }
    })
})

</script>

<template>
    <div class="topBarBox burgerMenu centered relative">
        <div class="burgerIcon pointer flex alignCenter" @click="flipBurger">
            <Icon name="menu" color="var(--brand-color-1)" />
        </div>
        
        <div class="burgerTabBox absolute flex" v-if="burgerIsOpen">
            <NuxtLink class="topBarTabText topBarTab flex alignCenter textAlignCenter pointer" :class="{ 'active' : route.path == tab.url}" v-html="tab.text"
                v-for="(tab, index) in tabs" :key="index" :to="tab.url">

            </NuxtLink>

            <span class="closeButton absolute top0 right0 pointer" @click="flipBurger">
                <div class="h100 marTop10">
                    <Icon name="close" color="black" />
                </div>
            </span>
        </div>
    </div>
</template>

<style scoped>

.topBarBox {
    overflow: visible;
}
.burgerIcon{
    height: 48px;
    width: 48px;
    background-color: #fff;
    padding: 10px;
    border-radius: 500px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
}
.burgerMenu {
    flex-grow: 1;
    padding: 0 0px;
}
.burgerTabBox {
    background-color: #fff;
    padding: 50px 20px 20px 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.527);
    top: 125%;
    
    transform: translateX(-50%);
    z-index: 1000;
    gap: 10px;
}
.closeButton {
    height: 30px;
}
@media (orientation : landscape) {
    .burgerTabBox {
        left: 60%;
        width: 75vw;
        flex-wrap: wrap;
    }
}
@media (orientation : portrait) {
    .burgerTabBox {
        left: 50%;
        flex-direction: column;

    }
}

</style>