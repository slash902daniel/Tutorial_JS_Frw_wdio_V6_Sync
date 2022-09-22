export const waitForUrlChange = (baseText, timeout) => {
    browser.waitUntil(
        function () {
            return browser.getUrl() !== baseText;
        },
        { timeout }
    );
  }

  export const waitForUrlEqualTo = (text, timeout) => {
    browser.waitUntil(
        function () {
            return browser.getUrl() === text;
        },
        { timeout }
    );
  }

  export const waitForUrlPartial = (text, timeout) => {
    browser.waitUntil(
        function () {
            const currentUrl = browser.getUrl();
            console.log(currentUrl);
            const indx = currentUrl.indexOf(text);
            console.log(indx);
            if (indx === -1) {
                return false;
            } else {
                return true;
            }
        },
        { timeout }
    );
  }