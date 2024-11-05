import type { Meta, StoryObj } from "@storybook/vue3";

import { ZzCollapse, ZzCollapseItem } from "zzhui-element";
import 'zzhui-element/dist/theme/Collapse.css'


type Story = StoryObj<typeof ZzCollapse>;

const meta: Meta<typeof ZzCollapse> = {
  title: "Example/Collapse",
  component: ZzCollapse as any,
  subcomponents: { ZzCollapseItem } as any,
  tags: ["autodocs"],
};

const container = (val: string) => `
<div style="margin: 5px">
  ${val}
</div>
`;

export const Default: Story = {
  args: {
    accordion: true,
    modelValue: ["a"],
  },
  render: (args) => ({
    components: {
      ZzCollapse,
      ZzCollapseItem,
    },
    setup() {
      return {
        args,
      };
    },
    template: container(`
    <zz-collapse v-bind="args">
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
    `),
  }),
};
export default meta;
