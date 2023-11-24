import { App, Plugin } from 'vue-demi';
import html2canvas from 'html2canvas';
export const Html2CanvasPlugin: Plugin = {
  install: (app: App) => {
    app.config.globalProperties.$html2canvas = html2canvas as any;
  },
};
