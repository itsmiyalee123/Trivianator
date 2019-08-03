var TRIVIA_SERVICE = {
    gettrivia: function () {
        return $.ajax ({
            type : 'get',
            url  : 'http://numbersapi.com/random/year?json'
        });

var TRVIA_YEAR = {
    getyear: function () {
        return $.ajax ({
            type : 'get',
            url  : 'http://numbersapi.com/${year}/year'
        });
    }
}
    }
}

