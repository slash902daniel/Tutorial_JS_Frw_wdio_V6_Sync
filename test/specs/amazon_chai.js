import {expect as chaiExpect} from 'chai';
import {assert as chaiAssert} from 'chai';
var should = require('chai').should()
//var assert = require('chai').assert

describe('Search Description', () => {
    it('Should show the banner container', () => {
        browser.url('https://www.amazon.com.mx/');
        
        let mainBanner = $('a#nav-logo-sprites');
        expect(mainBanner).toBeDisplayed();  
    })

    it('Should contain Tag link (chai expect)on banner and verify is clickable', () => {
        let mainBanner = $('a#nav-logo-sprites');
        const tag = mainBanner.getTagName();
        chaiExpect(tag).to.be.equal('a');

        expect(mainBanner).toHaveLinkContaining('/ref=nav_logo');
        expect(mainBanner).toBeClickable();
    })

    it('Should contain Tag link (chai should) on banner and verify is clickable', () => {
        let mainBanner = $('a#nav-logo-sprites');
        const tag = mainBanner.getTagName();
        tag.should.equal('a'); 

        expect(mainBanner).toHaveLinkContaining('/ref=nav_logo');
        expect(mainBanner).toBeClickable();
    })

    it('Should contain Tag link (chai assert) on banner and verify is clickable', () => {
        let mainBanner = $('a#nav-logo-sprites');
        const tag = mainBanner.getTagName();
        chaiAssert.equal(tag, 'a');

        expect(mainBanner).toHaveLinkContaining('/ref=nav_logo');
        expect(mainBanner).toBeClickable();
    })

})   