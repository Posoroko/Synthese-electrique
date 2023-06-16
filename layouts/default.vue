<template>
    <div class="topFrame flex column r">   
        <TopBarMain />
        <HeaderMain />
    </div>
    <main>
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