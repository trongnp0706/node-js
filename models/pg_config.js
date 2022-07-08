const Pool = require('pg').Pool;

const pg_conn = new Pool (
    {
        user: 'cbpglurxrgspms',
        host: 'ec2-54-157-16-196.compute-1.amazonaws.com',
        database: 'd2mbbsnofm2mqh',
        password: '145fb1ea87aa598e418b04302f92d3e5cd70474f8dfd191d7515b415ad0d70bd',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
          },
    });

module.exports = pg_conn;