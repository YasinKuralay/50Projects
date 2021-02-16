const axios = require('axios');

var CronJob = require('cron').CronJob;
var job = new CronJob(
    '*/3 * * * * *',
    function () {
        axios
            .get('http://daten.g-g-g.de/lagerliste/Artikelverfuegbarkeit.csv')
            .then(({ data }) => {
                console.log('the typeof data is: ', typeof data);
            });
        console.log('Lets do some fetching!');
    },
    null,
    true,
    'America/Los_Angeles'
);
job.start();
