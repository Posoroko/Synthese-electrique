<template>
    <div class="topFrame flex column r">   
        <TopBarMain />
        
        <HeaderMain />
    </div>

    <main class="r">
        <h1 class="r">main</h1>
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
    gap: 50px;
}
</style>