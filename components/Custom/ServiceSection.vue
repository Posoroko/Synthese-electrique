<template>
    <EdSectionMain title="Services Proposés" class="serviceSection " widthClass="mainWidth" :customStyles="['clothPattern']" colorMode="dark" :boxes="3" boxMinWidth="250px" gap="40px" wrapModeClass="wrap">
            <template v-slot:box1>
                <CustomServiceButton link="/depannage" icon="pliers"/>
            </template>

            <template v-slot:box2>
                <CustomServiceButton link="/installation-electrique" icon="power"/>
            </template>

            <template v-slot:box3>
                <CustomServiceButton link="/chauffage-et-ventilation" icon="fan"/>
            </template>
    </EdSectionMain>
</template>

<style scoped>
.serviceSection {
    padding: 80px 0;
}
</style>