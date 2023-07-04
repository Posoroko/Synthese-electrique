<script setup>
const props = defineProps({
    title: String,
    widthClass: String,
    colorMode: String,
    customStyles: Array,
    minHeight: String,
    boxes: Number,
    wrapModeClass: String,
    midBoxWrapsFirst: Boolean, // if 3 boxes, the middle box will wrap first
    boxMinWidth: String,
    gap: String,
    bottomSlot: Boolean
})
</script>

<template>
    <section class="w100" :class="[colorMode, ...customStyles]">
        <div class="sidePadding">
            <div class="sectionContainer " :class="[widthClass]">
                <div v-if="title" class="titleBox">
                    <TitleMain class="bodyTitle" :title="title" :line="true" />
                </div>

                <div class="boxContainer flex justifyCenter alignCenter" :class="[wrapModeClass]">
                    <div class="sectionBox flex column justifyCenter  alignCenter" v-for="n in boxes" :key="n">
                        <slot :name="`box${n}`"></slot>
                    </div>
                </div>
            </div>

            <div v-if="bottomSlot" class="bottomSlot">
                <slot name="bottomSlot"></slot>
            </div>
        </div>
    </section>
</template>

<style scoped>
.sidePadding {
    padding: 0 var(--main-width-padding);
    
}
section.dark *{
    color: white;
}
.titleBox {
    margin-bottom: 30px;
}
.boxContainer {
    gap: v-bind(gap)
}
.sectionBox {
    width: min(100%, v-bind(boxMinWidth));
    flex-grow: 1;
}

</style>