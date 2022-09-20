import SearchPage from '../../pages/search.page';

describe('Search Description', () => {
    it('Should have title', () => {
        searchPage.open();
        expect(browser).toHaveTitle('Google');      
    })

    it('Should Do Search and verify text value', () => {
        let searchValue = 'Amazon mexico';

        SearchPage.searchInput.addValue(searchValue);
        SearchPage.searchButton.click();
        
        expect(SearchPage.searchInput).toHaveValue(searchValue);
    })

    it('Should Redirect to new page and verify Title', () => {
        expect(browser).toHaveTitle('Amazon mexico - Buscar con Google');
    })

    // it('Should have a counter of matches', () => {
    //     //let resultsStats = $('div#result-stats');
    //     console.log('SearchPage.resultsStats: ' + SearchPage.resultsStats.getText);
    //     console.log('SearchPage.resultsStats2: ' + SearchPage.resultsStats2.getValue);
    //     expect(SearchPage.resultsStats).toHaveValueContaining('Cerca de');
    //     expect(SearchPage.resultsStats).toHaveValueContaining('resultados');
    // })
    
})