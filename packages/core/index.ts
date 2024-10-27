import { makeInstaller } from "@zzhui-element/utils";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import components from "./components";
import '@zzhui-element/theme/index.css'

library.add(fas);
const installer = makeInstaller(components);

export * from "@zzhui-element/components"
export default installer;