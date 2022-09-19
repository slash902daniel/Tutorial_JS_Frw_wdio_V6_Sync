import {expect as chaiExpect} from 'chai';

describe('Search Description', () => {
    it('Should show the banner container', () => {
        browser.url('https://www.amazon.com.mx/');
        
        let mainBanner = $('a#nav-logo-sprites');
        expect(mainBanner).toBeDisplayed();  
    })

    it('Should show the page title', () => {
        expect(browser).toHaveTitle('Amazon.com.mx: Precios bajos - Envío rápido - Millones de productos');      
    })

    it('Should contain link on banner and verify is clickable', () => {
        let mainBanner = $('a#nav-logo-sprites');
        expect(mainBanner).toHaveLinkContaining('/ref=nav_logo');
        expect(mainBanner).toBeClickable();
    })

    it('Should click on todo button and verify url', () => {
        let urlBeforeClick = browser.getUrl();

        let todoButton = $('#nav-main .nav-left');
        let todoButtonLabel = $('#nav-main .nav-left').$('.hm-icon-label');
        expect(todoButtonLabel).toHaveTextContaining('Todo');

        todoButton.click();

        let leftMenu = $('#hmenu-canvas');
        expect(leftMenu).toBeVisible();

        expect(browser).toHaveUrlContaining(urlBeforeClick);
        chaiExpect(urlBeforeClick).to.include('amazon');
    })

})   