declare global {
  interface Window {
    ReactNativeWebView: any;
  }
}

const postMessage = (data: any) => {
  console.log(data);
  /* Esse trecho verifica se o método existe.
      Quando estivermos rodando no browser ele não irá existir. */

  const hasRNPostMessage =
    window &&
    window.ReactNativeWebView &&
    window.ReactNativeWebView.postMessage;

  if (hasRNPostMessage) {
    const dataStringify = JSON.stringify(data);
    window.ReactNativeWebView.postMessage(dataStringify);
  }
};

export default postMessage;
