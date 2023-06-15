<template>
    <TopBarMain />
    <main>
        <NuxtPage />
    </main>
    <FooterMain />
</template>

<style scoped>
main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}
</style>