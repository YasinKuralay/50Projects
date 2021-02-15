var CronJob = require('cron').CronJob;
var job = new CronJob(
    '*/3 * * * * *',
    function () {
        console.log('Lets do some fetching!');
    },
    null,
    true,
    'America/Los_Angeles'
);
job.start();
