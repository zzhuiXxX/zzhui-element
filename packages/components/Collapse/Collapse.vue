<script setup lang="ts">
import { ref, provide, watch, watchEffect } from "vue";
import type { CollapseProrps, CollapseEmits, CollapseItemName } from "./types";
import { debugWarn } from "@zzhui-element/utils";
import { COLLAPSE_CTX_KEY } from "./contans";

const COMP_NAME = "ZzCollapse" as const;

defineOptions({
  name: COMP_NAME,
});

const props = defineProps<CollapseProrps>();
const emits = defineEmits<CollapseEmits>();

const activeNames = ref(props.modelValue);

function updataActiveName(newNames: CollapseItemName[]) {
  activeNames.value = newNames;
  emits("upadte:modelValue", newNames);
  emits("change", newNames);
}

function handleItemClick(item: CollapseItemName) {
  let _activeNames = [...activeNames.value];

  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? "" : item];
    updataActiveName(_activeNames);
    return;
  }

  const index = _activeNames.indexOf(item);
  if (index > -1) {
    _activeNames.splice(index, 1);
  } else {
    _activeNames.push(item);
  }
  updataActiveName(_activeNames);
}

watchEffect(() => {
  if (props.accordion && activeNames.value.length > 1) {
    debugWarn(COMP_NAME, "accordion model should only have one active item.");
  }
});

watch(
  () => props.modelValue,
  (newNames) => updataActiveName(newNames)
);

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick,
});
</script>

<template>
  <div class="er-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
