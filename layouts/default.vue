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
    height: min(100vh, 1080px);
}
main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
}
</style>