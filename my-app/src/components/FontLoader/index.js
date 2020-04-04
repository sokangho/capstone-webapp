import lodashGet from 'lodash.get';

const hasStyleSheetLoaded = url => {
  const styleSheetList = lodashGet(document, 'styleSheets', []);

  for (let i = 0; i < styleSheetList.length; i += 1) {
    if (url === styleSheetList[i].href) {
      return true;
    }
  }
  return false;
};

const FontLoader = props => {
  const { url } = props;

  if (!hasStyleSheetLoaded(url)) {
    const element = document.createElement('link');
    element.setAttribute('href', url);
    element.setAttribute('rel', 'stylesheet');
    document.head.appendChild(element);
  }

  return null;
};

export default FontLoader;
