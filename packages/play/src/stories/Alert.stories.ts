import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { ref, watch } from "vue";
import { expect, fn, within } from "@storybook/test";

import { ZzAlert, type AlerInterface } from "zzhui-element";
import "zzhui-element/dist/theme/Alert.css";

type Story = StoryObj<typeof ZzAlert>;

const meta: Meta<typeof ZzAlert> = {
  title: "Example/Alert",
  component: ZzAlert as any,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "info", "warning", "danger"],
    },
    effect: {
      control: "select",
      options: ["light", "dark"],
    },
    center: {
      control: "boolean",
    },
  },
  args: {
    onClose: fn(),
  },
};

export const Default: Story & { args: { visible: boolean } } = {
  args: {
    title: "标题",
    description: "这是一段描述",
    type: "success",
    effect: "light",
    closable: true,
    showIcon: true,
    visible: true,
    center: false,
  },
  render: (args) => ({
    components: { ZzAlert },
    setup() {
      const alertRef = ref<AlerInterface>();
      watch(
        () => (args as any).visible,
        (val: boolean) => {
          if (val) {
            alertRef.value?.open();
          } else {
            alertRef.value?.close();
          }
        }
      );
      return { args, alertRef };
    },
    template: `
    <zz-alert ref="alertRef" v-bind="args"></zz-alert>
    `,
  }),
};

export default meta;
