// vite.es.config.ts
import { defineConfig } from "file:///D:/Programs/Web/Project/zzhui-element/node_modules/.pnpm/vite@5.1.4_@types+node@20.11.20_terser@5.36.0/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import { readdirSync } from "fs";
import { filter, map, delay } from "file:///D:/Programs/Web/Project/zzhui-element/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import shell2 from "file:///D:/Programs/Web/Project/zzhui-element/node_modules/.pnpm/shelljs@0.8.5/node_modules/shelljs/shell.js";
import vue from "file:///D:/Programs/Web/Project/zzhui-element/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.4_@types+node@20.11.20_terser@5.36.0__vue@3.4.19_typescript@5.2.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///D:/Programs/Web/Project/zzhui-element/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.11.20_rollup@4.24.0_typescript@5.6.3_vite@5.4.8_@types+node@20.11.20_terser@5.36.0_/node_modules/vite-plugin-dts/dist/index.mjs";

// hooksPlugin.ts
import { each, isFunction } from "file:///D:/Programs/Web/Project/zzhui-element/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import shell from "file:///D:/Programs/Web/Project/zzhui-element/node_modules/.pnpm/shelljs@0.8.5/node_modules/shelljs/shell.js";
function hooksPlugin({
  rmFiles = [],
  beforeBuild,
  afterBuilder
}) {
  return {
    name: "hooks-plugin",
    buildStart() {
      each(rmFiles, (fName) => shell.rm("-rf", fName));
      isFunction(beforeBuild) && beforeBuild();
    },
    buildEnd(err) {
      !err && isFunction(afterBuilder) && afterBuilder();
    }
  };
}

// vite.es.config.ts
import terser from "file:///D:/Programs/Web/Project/zzhui-element/node_modules/.pnpm/@rollup+plugin-terser@0.4.4_rollup@4.24.0/node_modules/@rollup/plugin-terser/dist/es/index.js";
var __vite_injected_original_dirname = "D:\\Programs\\Web\\Project\\zzhui-element\\packages\\core";
var TRY_MOVE_STYLES_DELAY = 500;
var isProd = process.env.NODE_ENV === "production";
var isDev = process.env.NODE_ENV === "development";
var isTest = process.env.NODE_ENV === "test";
function getDirectoriesSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
function moveStyles() {
  try {
    readdirSync("./dist/es/theme");
    shell2.mv("./dist/es/theme", "./dist");
  } catch (_) {
    delay(moveStyles, TRY_MOVE_STYLES_DELAY);
  }
}
var vite_es_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types"
    }),
    hooksPlugin({
      rmFiles: ["./dist/es", "./dist/theme", "./dist/types"],
      afterBuilder: moveStyles
    }),
    terser({
      compress: {
        sequences: isProd,
        arguments: isProd,
        drop_console: isProd && ["log"],
        drop_debugger: isProd,
        passes: isProd ? 4 : 1,
        global_defs: {
          "@DEV": JSON.stringify(isDev),
          "@PROD": JSON.stringify(isProd),
          "@TEST": JSON.stringify(isTest)
        }
      },
      format: {
        semicolons: false,
        shorthand: isProd,
        braces: !isProd,
        beautify: !isProd,
        comments: !isProd
      },
      mangle: {
        toplevel: isProd,
        eval: isProd,
        keep_classnames: isDev,
        keep_fnames: isDev
      }
    })
  ],
  build: {
    outDir: "dist/es",
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "ZzhuiElement",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "ant-design-vue"
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          if (assetInfo.type === "asset" && /\.(css)$/i.test(assetInfo.name)) {
            return "theme/[name].[ext]";
          }
          return assetInfo.name;
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/packages/hooks")) {
            return "hooks";
          }
          if (id.includes("/packages/utils") || id.includes("plugin-vue:export-helper")) {
            return "utils";
          }
          for (const dirName of getDirectoriesSync("../components")) {
            if (id.includes(`/packages/components/${dirName}`)) {
              return dirName;
            }
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiLCAiaG9va3NQbHVnaW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9ncmFtc1xcXFxXZWJcXFxcUHJvamVjdFxcXFx6emh1aS1lbGVtZW50XFxcXHBhY2thZ2VzXFxcXGNvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2dyYW1zXFxcXFdlYlxcXFxQcm9qZWN0XFxcXHp6aHVpLWVsZW1lbnRcXFxccGFja2FnZXNcXFxcY29yZVxcXFx2aXRlLmVzLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvZ3JhbXMvV2ViL1Byb2plY3QvenpodWktZWxlbWVudC9wYWNrYWdlcy9jb3JlL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIFBsdWdpbk9wdGlvbiB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyByZWFkZGlyU3luYyB9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgZGVsYXkgfSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCBzaGVsbCBmcm9tIFwic2hlbGxqc1wiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XHJcbmltcG9ydCBob29rcyBmcm9tIFwiLi9ob29rc1BsdWdpblwiO1xyXG5pbXBvcnQgdGVyc2VyIGZyb20gXCJAcm9sbHVwL3BsdWdpbi10ZXJzZXJcIjtcclxuXHJcbmNvbnN0IFRSWV9NT1ZFX1NUWUxFU19ERUxBWSA9IDUwMCBhcyBjb25zdDtcclxuXHJcbmNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcclxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiO1xyXG5jb25zdCBpc1Rlc3QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJ0ZXN0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXREaXJlY3Rvcmllc1N5bmMoYmFzZVBhdGg6IHN0cmluZykge1xyXG4gIGNvbnN0IGVudHJpZXMgPSByZWFkZGlyU3luYyhiYXNlUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pO1xyXG5cclxuICByZXR1cm4gbWFwKFxyXG4gICAgZmlsdGVyKGVudHJpZXMsIChlbnRyeSkgPT4gZW50cnkuaXNEaXJlY3RvcnkoKSksXHJcbiAgICAoZW50cnkpID0+IGVudHJ5Lm5hbWVcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlU3R5bGVzKCkge1xyXG4gIHRyeSB7XHJcbiAgICByZWFkZGlyU3luYyhcIi4vZGlzdC9lcy90aGVtZVwiKTtcclxuICAgIHNoZWxsLm12KFwiLi9kaXN0L2VzL3RoZW1lXCIsIFwiLi9kaXN0XCIpO1xyXG4gIH0gY2F0Y2ggKF8pIHtcclxuICAgIGRlbGF5KG1vdmVTdHlsZXMsIFRSWV9NT1ZFX1NUWUxFU19ERUxBWSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgZHRzKHtcclxuICAgICAgdHNjb25maWdQYXRoOiBcIi4uLy4uL3RzY29uZmlnLmJ1aWxkLmpzb25cIixcclxuICAgICAgb3V0RGlyOiBcImRpc3QvdHlwZXNcIixcclxuICAgIH0pIGFzIFBsdWdpbk9wdGlvbixcclxuICAgIGhvb2tzKHtcclxuICAgICAgcm1GaWxlczogW1wiLi9kaXN0L2VzXCIsIFwiLi9kaXN0L3RoZW1lXCIsIFwiLi9kaXN0L3R5cGVzXCJdLFxyXG4gICAgICBhZnRlckJ1aWxkZXI6IG1vdmVTdHlsZXMsXHJcbiAgICB9KSxcclxuICAgIHRlcnNlcih7XHJcbiAgICAgIGNvbXByZXNzOiB7XHJcbiAgICAgICAgc2VxdWVuY2VzOiBpc1Byb2QsXHJcbiAgICAgICAgYXJndW1lbnRzOiBpc1Byb2QsXHJcbiAgICAgICAgZHJvcF9jb25zb2xlOiBpc1Byb2QgJiYgW1wibG9nXCJdLFxyXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IGlzUHJvZCxcclxuICAgICAgICBwYXNzZXM6IGlzUHJvZCA/IDQgOiAxLFxyXG4gICAgICAgIGdsb2JhbF9kZWZzOiB7XHJcbiAgICAgICAgICBcIkBERVZcIjogSlNPTi5zdHJpbmdpZnkoaXNEZXYpLFxyXG4gICAgICAgICAgXCJAUFJPRFwiOiBKU09OLnN0cmluZ2lmeShpc1Byb2QpLFxyXG4gICAgICAgICAgXCJAVEVTVFwiOiBKU09OLnN0cmluZ2lmeShpc1Rlc3QpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgIHNlbWljb2xvbnM6IGZhbHNlLFxyXG4gICAgICAgIHNob3J0aGFuZDogaXNQcm9kLFxyXG4gICAgICAgIGJyYWNlczogIWlzUHJvZCxcclxuICAgICAgICBiZWF1dGlmeTogIWlzUHJvZCxcclxuICAgICAgICBjb21tZW50czogIWlzUHJvZCxcclxuICAgICAgfSxcclxuICAgICAgbWFuZ2xlOiB7XHJcbiAgICAgICAgdG9wbGV2ZWw6IGlzUHJvZCxcclxuICAgICAgICBldmFsOiBpc1Byb2QsXHJcbiAgICAgICAga2VlcF9jbGFzc25hbWVzOiBpc0RldixcclxuICAgICAgICBrZWVwX2ZuYW1lczogaXNEZXZcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogXCJkaXN0L2VzXCIsXHJcbiAgICBtaW5pZnk6IGZhbHNlLFxyXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL2luZGV4LnRzXCIpLFxyXG4gICAgICBuYW1lOiBcIlp6aHVpRWxlbWVudFwiLFxyXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxyXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiXSxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbXHJcbiAgICAgICAgXCJ2dWVcIixcclxuICAgICAgICBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiLFxyXG4gICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIsXHJcbiAgICAgICAgXCJAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lXCIsXHJcbiAgICAgICAgXCJAcG9wcGVyanMvY29yZVwiLFxyXG4gICAgICAgIFwiYW50LWRlc2lnbi12dWVcIixcclxuICAgICAgXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcclxuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSA9PT0gXCJzdHlsZS5jc3NcIikgcmV0dXJuIFwiaW5kZXguY3NzXCI7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGFzc2V0SW5mby50eXBlID09PSBcImFzc2V0XCIgJiZcclxuICAgICAgICAgICAgL1xcLihjc3MpJC9pLnRlc3QoYXNzZXRJbmZvLm5hbWUgYXMgc3RyaW5nKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInRoZW1lL1tuYW1lXS5bZXh0XVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lIGFzIHN0cmluZztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInZlbmRvclwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwiL3BhY2thZ2VzL2hvb2tzXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImhvb2tzXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGlkLmluY2x1ZGVzKFwiL3BhY2thZ2VzL3V0aWxzXCIpIHx8XHJcbiAgICAgICAgICAgIGlkLmluY2x1ZGVzKFwicGx1Z2luLXZ1ZTpleHBvcnQtaGVscGVyXCIpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwidXRpbHNcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvciAoY29uc3QgZGlyTmFtZSBvZiBnZXREaXJlY3Rvcmllc1N5bmMoXCIuLi9jb21wb25lbnRzXCIpKSB7XHJcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcyhgL3BhY2thZ2VzL2NvbXBvbmVudHMvJHtkaXJOYW1lfWApKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRpck5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9ncmFtc1xcXFxXZWJcXFxcUHJvamVjdFxcXFx6emh1aS1lbGVtZW50XFxcXHBhY2thZ2VzXFxcXGNvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2dyYW1zXFxcXFdlYlxcXFxQcm9qZWN0XFxcXHp6aHVpLWVsZW1lbnRcXFxccGFja2FnZXNcXFxcY29yZVxcXFxob29rc1BsdWdpbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvZ3JhbXMvV2ViL1Byb2plY3QvenpodWktZWxlbWVudC9wYWNrYWdlcy9jb3JlL2hvb2tzUGx1Z2luLnRzXCI7aW1wb3J0IHsgZWFjaCwgaXNGdW5jdGlvbiB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcclxuaW1wb3J0IHNoZWxsIGZyb20gXCJzaGVsbGpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob29rc1BsdWdpbih7XHJcbiAgcm1GaWxlcyA9IFtdLFxyXG4gIGJlZm9yZUJ1aWxkLFxyXG4gIGFmdGVyQnVpbGRlcixcclxufToge1xyXG4gIHJtRmlsZXM/OiBzdHJpbmdbXTtcclxuICBiZWZvcmVCdWlsZD86IEZ1bmN0aW9uO1xyXG4gIGFmdGVyQnVpbGRlcj86IEZ1bmN0aW9uO1xyXG59KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IFwiaG9va3MtcGx1Z2luXCIsXHJcbiAgICBidWlsZFN0YXJ0KCkge1xyXG4gICAgICBlYWNoKHJtRmlsZXMsIChmTmFtZSkgPT4gc2hlbGwucm0oXCItcmZcIiwgZk5hbWUpKTtcclxuICAgICAgaXNGdW5jdGlvbihiZWZvcmVCdWlsZCkgJiYgYmVmb3JlQnVpbGQoKTtcclxuICAgIH0sXHJcbiAgICBidWlsZEVuZChlcnI/OiBFcnJvcikge1xyXG4gICAgICAhZXJyICYmIGlzRnVuY3Rpb24oYWZ0ZXJCdWlsZGVyKSAmJiBhZnRlckJ1aWxkZXIoKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStWLFNBQVMsb0JBQXVDO0FBQy9ZLFNBQVMsZUFBZTtBQUN4QixTQUFTLG1CQUFtQjtBQUM1QixTQUFTLFFBQVEsS0FBSyxhQUFhO0FBQ25DLE9BQU9BLFlBQVc7QUFDbEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUzs7O0FDTnlVLFNBQVMsTUFBTSxrQkFBa0I7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
