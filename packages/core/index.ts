import { makeInstaller } from "@zzhui-element/utils";
import components from "./components";
import "@zzhui-element/theme/index.css";

const installer = makeInstaller(components);

export * from "@zzhui-element/components";
export default installer;
