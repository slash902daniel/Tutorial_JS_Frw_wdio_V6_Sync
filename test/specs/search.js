describe('Search Description', () => {
    it('Should have title', () => {
        browser.url('https://google.com');
        expect(browser).toHaveTitle('Google');      
    })

    it('Should Do Search and verify text value', () => {
        let searchValue = 'Amazon mexico';
        let searchInput = $('input[aria-label="Buscar"]');
        let searchButton = $$('input[name="btnK"]')[1];

        searchInput.addValue(searchValue);
        searchButton.click();

        expect(searchInput).toHaveValue(searchValue);
    })

    it('Should Redirect to new page and verify Title', () => {
        expect(browser).toHaveTitle('Amazon mexico - Buscar con Google');
    })

    // it('Should have a counter of matches', () => {
    //     let resultsStats = $('div#result-stats');
    //     console.log('resultsStats: ' + resultsStats.getText);
    //     console.log('resultsStats2: ' + resultsStats.getValue);
    //     expect(resultsStats).toHaveValueContaining('Cerca de');
    //     expect(resultsStats).toHaveValueContaining('resultados');
    // })
})