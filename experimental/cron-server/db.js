var spicedPg = require('spiced-pg');

var db = spicedPg(
    process.env.DATABASE_URL ||
        'postgres:postgres:postgres@localhost:5432/marktscout'
);

module.exports.createGggTable = ()