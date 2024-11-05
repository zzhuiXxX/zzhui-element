import type { Ref } from "vue";

export type CollapseItemName = string | number;

export interface CollapseProrps {
  modelValue: CollapseItemName[];
  accordion?: boolean;
}

export interface CollapseItemProps {
  name: CollapseItemName;
  title?: string;
  disabled?: boolean;
}

export interface CollapseEmits {
  (e: "upadte:modelValue", value: CollapseItemName[]): void;
  (e: "change", value: CollapseItemName[]): void;
}

export interface CollapseContext {
  activeNames: Ref<CollapseItemName[]>;
  handleItemClick: (name: CollapseItemName) => void;
}