<script setup>
const colorMode = ref('lightMode')
const handleClick = () => {
    console.log('click')
    colorMode.value = "darkMode"
}
</script>

<template>
  <SeoKit />
    <button @click="handleClick">click</button>
  <div id="siteBox" :class="colorMode" >
    <NuxtLayout />
    
  </div>
  
</template>
