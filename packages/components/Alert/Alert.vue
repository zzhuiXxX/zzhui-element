<script setup lang="ts">
import type { AlerEmits, AlerInterface, AlertProps } from "./types";
import { computed, ref } from "vue";
import { typeIconMap } from "@zzhui-element/utils";
import ZzIcon from "../Icon/Icon.vue";

defineOptions({
  name: "ZzAlert",
});
const props = withDefaults(defineProps<AlertProps>(), {
  effect: "light",
  type: "info",
  closable: true,
});
const emits = defineEmits<AlerEmits>();
const slots = defineSlots();

const visible = ref(true);

const iconName = computed(() => typeIconMap.get(props.type) ?? "circle-info");
const withDescription = computed(() => props.description || slots.default);

function close() {
  visible.value = false;
  emits("close");
}
function open() {
  visible.value = true;
}

defineExpose<AlerInterface>({
  close,
  open,
});
</script>

<template>
  <transition name="er-alert-fade">
    <div
      v-show="visible"
      class="er-alert"
      role="alert"
      :class="{
        [`er-alert__${type}`]: type,
        [`er-alert__${effect}`]: effect,
        'text-center': center,
      }"
    >
      <zz-icon
        v-if="showIcon"
        class="er-alert__icon"
        :clas="{ ['big-icon']: withDescription }"
        :icon="iconName"
      ></zz-icon>
      <div class="er-alert__content">
        <span
          class="er-alert__title"
          :class="{ 'with-desc': withDescription }"
          :style="{ display: center && !showIcon ? 'flow' : 'inline' }"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="er-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <div class="er-alert__close" v-if="closable">
          <zz-icon @click.stop="close" icon="xmark"></zz-icon>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@import "./style.css";
</style>
