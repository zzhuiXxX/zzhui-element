<script setup lang="ts">
import { ref, computed, inject } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { throttle } from "lodash-es";
import { BUTTON_GROUP_CTX_KEY } from "./contants";
import ZzIcon from "../Icon/Icon.vue";

defineOptions({
  name: "ZzButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 1000,
});

const emit = defineEmits<ButtonEmits>();

const slots = defineSlots();

const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0);

const _ref = ref<HTMLButtonElement>();

const type = computed(() => ctx?.type ?? props?.type ?? "");
const size = computed(() => ctx?.size ?? props?.size ?? "");
const disabled = computed(() => ctx?.disabled || props?.disabled || false);

// 无法识别到 {{ “" }} 空值 传了但是没有完全传了
// const iconStyle = computed(() => ({
//   marginRight: slots.default ? "6px" : "0px",
// }));
// console.log(slots.default());
const iconStyle = computed(() => ({
  marginRight: slots.default
    ? Array.isArray(slots.default()) &&
      slots.default().length > 0 &&
      slots.default()[0].children
      ? "8px"
      : "0px"
    : "0px",
}));

const handleBtnClick = (e: MouseEvent) => emit("click", e);
const handleBtnClickThrottle = throttle(
  handleBtnClick,
  props.throttleDuration,
  {
    trailing: false,
  }
);

defineExpose<ButtonInstance>({
  ref: _ref,
  size,
  type,
  disabled,
});
</script>

<template>
  <component
    ref="_ref"
    class="er-button"
    :autofocus="autofocus"
    :is="tag"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="(e:MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <zz-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        />
      </slot>
    </template>
    <zz-icon
      v-if="icon && !loading"
      :icon="icon"
      :style="iconStyle"
      size="1x"
    />
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
