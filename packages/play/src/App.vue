<script setup lang="ts">
import { ref } from "vue";

const collapseVal = ref(["a"]);
</script>

<template>
  <zz-button type="primary" round icon="search">Button</zz-button>
  <zz-icon icon="house" size="1x"></zz-icon>
  <div
    style="
      width: 100px;
      height: 100px;
      background-color: red;
      border-radius: 50%;
    "
  ></div>
  <zz-collapse :modelValue="collapseVal" accordion>
    <zz-collapse-item name="a" title="Title a">
      <div>this is content a</div>
    </zz-collapse-item>
    <zz-collapse-item name="b" title="title b">
      <div>this is content b</div>
    </zz-collapse-item>
    <zz-collapse-item name="c" title="title c  disable" disabled>
      <div>this is content c</div>
    </zz-collapse-item>
  </zz-collapse>
</template>

<style scoped></style>
