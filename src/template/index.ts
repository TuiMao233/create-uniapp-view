import { componentTemplate, pagesTemplate } from "./templates";
/** 创建视图函数，用于创建对应配置的视图文件内容 */
export function createV2ViewTemplate(options: CreateViewV2TemplateOptions) {
  const style_type = options?.style_type !== 'css' ? ` lang="${options.style_type}"` : '';
  const strike = options.view_name.replace(/([A-Z])/g, "-$1").toLocaleLowerCase();
  const view_name = strike.indexOf("-") === 0 ? strike.slice(1) : strike;
  const script_tyle = options.typescript ? ' lang="ts"' : '';
  const import_vue = options.typescript ? `import Vue from 'vue';` : '';
  const default_vue_extend_start = options.typescript ? 'Vue.extend(' : '';
  const default_vue_extend_end = options.typescript ? ')' : '';
  const template = options.component ? componentTemplate : pagesTemplate;
  return `<template>
  <div class="${view_name}">${view_name}</div>
</template>

<script${script_tyle}>
${import_vue}
export default ${default_vue_extend_start}{
  ${template}
}${default_vue_extend_end};
</script>

<style${style_type}></style>
`;
}
