<template>
    <EdSectionMain title="Services Proposés" class="serviceSection " widthClass="mainWidth" :customStyles="['clothPattern']" colorMode="dark" :boxes="3" boxMinWidth="250px" gap="20px" wrapModeClass="wrap">
            <template v-slot:box1>
                <CustomServiceButton link="/" icon="pliers"/>
            </template>

            <template v-slot:box2>
                <CustomServiceButton link="/" icon="power"/>
            </template>

            <template v-slot:box3>
                <CustomServiceButton link="/" icon="fan"/>
            </template>
    </EdSectionMain>
</template>

<style scoped>
.serviceSection {
    padding: 80px 0;
}
</style>