import AmazonPage from '../../pages/amazon.page';

describe('Search Description', () => {
    it('Should show the banner container', () => {
        AmazonPage.open();
        expect(AmazonPage.mainBanner).toBeDisplayed();  
    })

    it('Should show the page title', () => {
        expect(browser).toHaveTitle('Amazon.com.mx: Precios bajos - Envío rápido - Millones de productos');      
    })

    it('Should contain link on banner and verify is clickable', () => {
        expect(AmazonPage.mainBanner).toHaveLinkContaining('/ref=nav_logo');
        expect(AmazonPage.mainBanner).toBeClickable();
    })

    it('Should click on todo button and verify url', () => {
        let urlBeforeClick = browser.getUrl();

        expect(AmazonPage.todoButtonLabel).toHaveTextContaining('Todo');
        AmazonPage.todoButton.click();

        expect(AmazonPage.leftMenu).toBeVisible();

        expect(browser).toHaveUrlContaining(urlBeforeClick);
    })

})   