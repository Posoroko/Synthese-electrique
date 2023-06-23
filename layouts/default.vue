<template>
    <div class="topFrame flex column">   
        <TopBarMain />
        
        <HeaderMain />
    </div>

    <main class="marTop150">
        <NuxtPage />
    </main>

    <FooterMain />
</template>

<style scoped>
.topFrame {
    /* height: max(600px, 100vh); */
    height: 100vh;
}
main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
}
</style>