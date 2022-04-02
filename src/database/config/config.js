module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "slow_motion_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false         // Evita que se consologueen las instrucciones SQL
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "bf93af4af91880",
    "password": "5e3d31e8",
    "database": "heroku_5a98eab9fd5c31b",
    "host": "us-cdbr-east-05.cleardb.net",
    "dialect": "mysql"
  }
}