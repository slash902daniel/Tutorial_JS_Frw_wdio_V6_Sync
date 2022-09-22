import AmazonPage from '../../pages/amazon.page';
import { waitForUrlChange, waitForUrlEqualTo, waitForUrlPartial } from '../utilities/helpers';
import AmazonSrc from '../resources/amazon.src';

describe('Search Description', () => {

    before(() => {
        console.log('before ');
        AmazonPage.open();
        waitForUrlEqualTo('https://www.amazon.com.mx/',5000);
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
        expect(browser).toHaveTitle(AmazonSrc.hometitle);      
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

    it('Should click multiple match selector by index', () => {
        console.log('test5');
        AmazonPage.clickLeftMenuVisibleItem(1);

        //TODO WAIT FOR URL CONTAINS
        browser.pause(5000);
        //AmazonPage.leftMenuDummy.waitForDisplayed();
    })

    it('Should print multiple match selector data', () => {
        console.log('test6');
        AmazonPage.todoButton.click();
        AmazonPage.leftMenu.waitForDisplayed();

        browser.pause(3000);
        console.log(AmazonPage.getLeftMenuVisibleItemsText());
        
        AmazonPage.leftMenuCloseButton.click();
        AmazonPage.leftMenuCloseButton.waitForDisplayed({reverse: true});

        AmazonPage.todoButton.waitForDisplayed();
    })

   it('Should hover over, display a element an assert it', () => {
        console.log('test7');

        AmazonPage.signInForm.moveTo();
        browser.pause(2000);

        AmazonPage.signInFormBtn.waitForClickable();
    })

    it('Should use utilities functions', () => {
        console.log('test8');

        waitForUrlPartial('amazon.com',5000);
        
        //Force url change
        browser.url('https://www.google.com.mx/');
        waitForUrlChange('https://www.amazon.com.mx/',5000);
    })

})   