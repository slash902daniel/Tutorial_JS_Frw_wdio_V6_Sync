import Page from './page';

class AmazonPage extends Page {

    open(){
        super.open('https://www.amazon.com.mx/');
    }

    get mainBanner() {return $('a#nav-logo-sprites')};
    
    get todoButton() {return $('#nav-main .nav-left')};
    
    get todoButtonLabel() {return $('#nav-main .nav-left').$('.hm-icon-label')};

    get leftMenu() {return $('#hmenu-canvas')};

}

export default new AmazonPage();