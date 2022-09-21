import Page from './page';

class AmazonPage extends Page {

    open() {
        super.open('https://www.amazon.com.mx/');
    }

    get mainBanner() {
        return $('a#nav-logo-sprites');
    }

    get todoButton() {
        return $('#nav-main .nav-left');
    }

    get todoButtonLabel() {
        return $('#nav-main .nav-left').$('.hm-icon-label');
    }

    get leftMenu() {
        return $('#hmenu-canvas');
    }
    get leftMenuDummy() {
        return $('#leo');
    }

    get leftMenuVisibleItems() {
        return $$('#hmenu-content>ul.hmenu-visible>li>a')
    }

    get leftMenuCloseButton() {
        return $('#hmenu-canvas-background>div');
    }
    
    get signInForm() {
        return $('#nav-tools #nav-link-accountList-nav-line-1');
    }
    
    get signInFormBtn() {
        return $('#nav-flyout-ya-signin a span');
    }
    
    getLeftMenuVisibleItemsText() {
        //console.log('inside getLeftMenuVisibleItemsText: ---------------------------------------------------------------');
        let elementList = [];

        this.leftMenuVisibleItems.map((element) => {
            //console.log(element.getText());
            elementList.push(element.getText());
         });
        return elementList;
    }

    // getmapsimpleExample(index) {
    //     let arr = [2, 3, 5, 7]

    //     arr.map(function(element, index, array){
    //         console.log(element);
    //         console.log(index);
    //         console.log(array);
    //         return element;
    //     }, 80);
    // }

    clickLeftMenuVisibleItem(index) {
        this.leftMenuVisibleItems[index].click();
    }

}

export default new AmazonPage();