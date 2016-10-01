function homeFn(req, res) {
    res.render('home.ejs', {
        title: 'I love my city',
        headline: 'Every city is unique in its own way'
    });
};

function cityFn(req, res) {
    var cityName = req.params.city;
    var cityTitle;
    var cityHeadline;

    if (cityName === 'london') {
        cityTitle = 'London';
        cityHeadline = 'The Old Smoke';
    } else if (cityName === 'newyork') {
        cityTitle = 'New York';
        cityHeadline = 'The Big Apple';
    } else if (cityName === 'paris') {
        cityTitle = 'Paris';
        cityHeadline = 'The City of Love';
    } else if (cityName === 'newdelhi') {
        cityTitle = 'New Delhi';
        cityHeadline = 'The Heart of Incredible India';
    }

    res.render('city.ejs', {
        title: cityTitle,
        headline: cityHeadline
    });
};

module.exports.homeFn = homeFn;
module.exports.cityFn = cityFn;