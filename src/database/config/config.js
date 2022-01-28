module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "slow_motion_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false          // Evita que se consologueen las instrucciones SQL
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
