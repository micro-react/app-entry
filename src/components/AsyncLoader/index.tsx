/**
 * author iWuzhi
 * date 2020-08-22 19:57:21
 */
// @ts-nocheck
// TODO： Add loading pool for pf
const loading_list: any = {};

const AsyncLoader = async ({
  appName
}: any) => {
  if (window[appName]) return Promise.resolve(window[appName].default);
  return new Promise((resolve) => {
    const scriptTag = document.createElement('script');
    scriptTag.src = '/cdn/your-app-name/main.js';
    document.body.appendChild(scriptTag);
    scriptTag.onload = () => {
      resolve(window[appName].default);
    }
  })
}
export default AsyncLoader;