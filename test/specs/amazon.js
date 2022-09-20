import AmazonPage from '../../pages/amazon.page';

describe('Search Description', () => {

    before(() => {
        console.log('before ');
        AmazonPage.open();
    });

    beforeEach(() => {
        console.log('bef each');
    });

    after(() => {
        console.log('afterrr');
    });

    afterEach(() => {
        console.log('after each');
    });
    
    it('Should show the banner container', () => {
        console.log('test1');
        expect(AmazonPage.mainBanner).toBeDisplayed();  
    })

    it('Should show the page title', () => {
        console.log('test2');
        expect(browser).toHaveTitle('Amazon.com.mx: Precios bajos - Envío rápido - Millones de productos');      
    })

    it('Should contain link on banner and verify is clickable', () => {
        console.log('test3');
        expect(AmazonPage.mainBanner).toHaveLinkContaining('/ref=nav_logo');
        expect(AmazonPage.mainBanner).toBeClickable();
    })

    it('Should click on todo button and verify url', () => {
        console.log('test4');
        let urlBeforeClick = browser.getUrl();

        expect(AmazonPage.todoButtonLabel).toHaveTextContaining('Todo');
        AmazonPage.todoButton.click();

        expect(AmazonPage.leftMenu).toBeVisible();

        expect(browser).toHaveUrlContaining(urlBeforeClick);
    })

})   