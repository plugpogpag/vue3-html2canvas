import { getCurrentInstance, ComponentInternalInstance } from 'vue-demi';

export const useHtml2Canvas = (): any => {
  const internalInstance = getCurrentInstance()
  const html2canvas = (internalInstance as ComponentInternalInstance).appContext
    .config.globalProperties.$html2canvas
  async function htmlToCanvas(el: HTMLElement, options: Partial<{ type: string }> = {}): Promise<HTMLCanvasElement> {
    const { type } = options;
    const canvas = await html2canvas(el, options);
    if (type && type === 'dataURL') { return canvas.toDataURL(); }
    console.warn('Vue Html2Canvas Warn: Invalid option type. Use \'dataURL\' instead. Returning canvas.');
    return canvas;
  }
  return htmlToCanvas
}

