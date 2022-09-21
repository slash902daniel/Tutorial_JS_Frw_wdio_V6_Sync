import Page from './page';

class SearchPage extends Page {

    open() {
        super.open('https://google.com');
    }

    get searchInput() {
        return $('input[aria-label="Buscar"]'
        )
    };

    get searchButton() {
        return $$('input[name="btnK"]')[1]
    };

    get resultsStats() {
        return $('div#result-stats')
    };

}

export default new SearchPage();