<script setup>
function handleBtnClick() {
  console.log("btn click");
}
</script>

<template>
  <p>
    <zz-button @click="handleBtnClick"> with throttle</zz-button>
    <zz-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</zz-button
    >
  </p>
</template>