import { describe, it, test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import type { AlertType } from "./types";
import Alert from "./Alert.vue";
import Icon from "../Icon/Icon.vue";

describe("Alert.vue", () => {
  const title = "Test Alert" as const;
  const desc = "This is a tset description" as const;

  it("should render the alert with default props", () => {
    const wrapper = mount(Alert, {
      props: {
        title,
      },
      slots: {
        default: desc,
      },
      global: {
        stubs: ["ZzIcon"],
      },
    });

    expect(wrapper.text()).toContain(title);
    expect(wrapper.text()).toContain(desc);

    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes("icon")).toBe("xmark");

    const wrapper2 = mount(() => <Alert title={title}>{desc}</Alert>);

    expect(wrapper2.text()).toContain(title);
    expect(wrapper2.text()).toContain(desc);
  });

  it.each([
    ["info", "circle-info"],
    ["success", "check-circle"],
    ["warning", "circle-exclamation"],
    ["danger", "circle-xmark"],
    ["error", "circle-xmark"],
    ["non-compliance", "circle-info"],
  ])("should has the correct icon when props type is %s", (type, icnoName) => {
    const wrapper = mount(Alert, {
      props: {
        title,
        closable: false,
        showIcon: true,
        type: type as AlertType,
      },
      slots: {
        default: desc,
      },
      global: {
        stubs: ["ZzIcon"],
      },
    });

    const iconElement = wrapper.findComponent(Icon);
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes("icon")).toBe(icnoName);
  });

  it("should emit close event when close icon is clicked", () => {
    const onClose = vi.fn();

    const wrapper = mount(Alert, {
      props: {
        title,
        closable: true,
        showIcon: false,
        onClose,
      },
      slots: {
        default: desc,
      },
      global: {
        stubs: ["ZzIcon"],
      },
    });

    wrapper.findComponent(Icon).trigger("click");
    expect(onClose).toHaveBeenCalled();
  });

  it("should allow coustom content via slots", () => {
    const wrapper = mount(Alert, {
      props: {
        title: "test title",
      },
      slots: {
        default: desc,
        title,
      },
    });

    expect(wrapper.text()).toContain(desc);
    expect(wrapper.text()).toContain(title);
    expect(wrapper.text()).not.toContain("test title");
  });

  it("should support centering text", () => {
    const wrapper = mount(Alert, {
      props: {
        title,
        description: desc,
        center: true,
      },
    });

    const rootNode = wrapper.find(".er-alert");
    expect(rootNode.classes()).toContain("text-center");
  });

  it("should not render close icon when closeable is false", () => {
    const wrapper = mount(Alert, {
      props: { closable: false },
    });

    expect(wrapper.find(".er-alert__close").exists()).toBe(false);
  });

  it("should toggle visibility when open and close methods are called", async () => {
    const wrapper = mount(Alert, {
      props: { title, closable: false },
    });
    await wrapper.vm.close();
    expect(wrapper.find(".er-alert").attributes().style).toBe("display: none;");
    await wrapper.vm.open();
    expect(wrapper.find(".er-alert").attributes().style).toBe("");
  });
});
