import AmazonPage from '../../pages/amazon.page';

import {expect as chaiExpect} from 'chai';
import {assert as chaiAssert} from 'chai';
var should = require('chai').should()
//var assert = require('chai').assert

describe('Search Description', () => {
    it('Should show the banner container', () => {
        AmazonPage.open();
        expect(AmazonPage.mainBanner).toBeDisplayed();  
    })

    it('Should contain Tag link (chai expect)on banner and verify is clickable', () => {
        const tag = AmazonPage.mainBanner.getTagName();
        chaiExpect(tag).to.be.equal('a');

        expect(AmazonPage.mainBanner).toHaveLinkContaining('/ref=nav_logo');
        expect(AmazonPage.mainBanner).toBeClickable();
    })

    it('Should contain Tag link (chai should) on banner and verify is clickable', () => {
        const tag = AmazonPage.mainBanner.getTagName();
        tag.should.equal('a'); 

        expect(AmazonPage.mainBanner).toHaveLinkContaining('/ref=nav_logo');
        expect(AmazonPage.mainBanner).toBeClickable();
    })

    it('Should contain Tag link (chai assert) on banner and verify is clickable', () => {
        const tag = AmazonPage.mainBanner.getTagName();
        chaiAssert.equal(tag, 'a');

        expect(AmazonPage.mainBanner).toHaveLinkContaining('/ref=nav_logo');
        expect(AmazonPage.mainBanner).toBeClickable();
    })

})   