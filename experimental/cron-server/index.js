const axios = require('axios');

var CronJob = require('cron').CronJob;
var job = new CronJob(
    '*/5 * * * * *',
    function () {
        axios
            .get('http://daten.g-g-g.de/lagerliste/Artikelverfuegbarkeit.csv')
            .then(({ data }) => {
                let dataArray = data.split(';');

                //cuts the first three fields from the array, which are the field titles
                for (let i = 0; i < 3; i++) {
                    dataArray.shift();
                }
                console.log(dataArray);

                //CREATE TABLE (GGG_ + DATE) !NOT IF DATA MATCHES!
                //*triplets* INSERT INTO.
            });
    },
    null,
    true,
    'America/Los_Angeles'
);
job.start();
