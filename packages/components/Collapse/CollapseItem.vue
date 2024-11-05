<script setup lang="ts">
import { COLLAPSE_CTX_KEY } from "./contans";
import type { CollapseItemProps } from "./types";
import { computed, inject } from "vue";
import ZzIcon from "../Icon/Icon.vue";
import transitionEvents from "./transitionEvents";

defineOptions({
  name: "ZzCollapseItem",
});

const props = defineProps<CollapseItemProps>();
const ctx = inject(COLLAPSE_CTX_KEY, void 0);

const isActive = computed(() => {
  return ctx?.activeNames.value.includes(props.name);
});

function handleClick() {
  if (props.disabled) return;
  ctx?.handleItemClick(props.name);
}
</script>

<template>
  <div class="er-collapse-item" :class="{ 'is-disabled': disabled }">
    <div
      class="er-collapse-item__header"
      :id="`item-header-${name}`"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      @click="handleClick"
    >
      <span class="er-collapse-item__title">
        <slot name="title">{{ title }}</slot>
      </span>
      <zz-icon icon="angle-right" class="header-angle"></zz-icon>
    </div>
    <transition name="slide" v-on="transitionEvents">
      <div class="er-collapse-item__wapper" v-show="isActive">
        <div class="er-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
