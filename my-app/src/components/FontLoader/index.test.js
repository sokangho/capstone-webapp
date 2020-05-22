import sinon from 'sinon';
import fontLoader from './index';

describe('FontLoader Component', () => {
  const url = 'https://someCssScript.com';
  const sandbox = sinon.createSandbox();
  const appendChildSpy = sandbox.spy();

  afterEach(() => {
    sandbox.reset();
  });

  afterAll(() => {
    sandbox.restore();
  });


  it('should load styleSheet if it does not exist', () => {
    const headMock = window.document.createElement('head');
    const linkMock = window.document.createElement('link');

    linkMock.setAttribute('href', url);
    linkMock.setAttribute('rel', 'stylesheet');

    const documentMock = {
      styleSheets: [],
      createElement: () => linkMock,
      head: headMock
    };
    fontLoader(url, documentMock);
    expect(headMock.contains(linkMock)).toBe(true);
  });

  it('should NOT styleSheet if exists aleady', () => {
    const headMock = {
      appendChild: appendChildSpy
    };

    const linkMock = window.document.createElement('link');

    linkMock.setAttribute('href', url);
    linkMock.setAttribute('rel', 'stylesheet');

    const documentMock = {
      styleSheets: [{
        href: url
      }],
      createElement: () => linkMock,
      head: headMock

    };

    fontLoader(url, documentMock);
    sinon.assert.notCalled(documentMock.head.appendChild);
  });
});
