const SQL_PATH = "./users.sql";
const SQLite = require("better-sqlite3")(SQL_PATH);
SQLite.exec(`CREATE TABLE IF NOT EXISTS users (
    _id INTEGER PRIMARY KEY NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(25) NOT NULL,
    password VARCHAR(20) NOT NULL,
    description VARCHAR(300) DEFAULT 'Bu kişi açıklamasını düzenleyemeyecek kadar üşengeç.'
)`);

class SQLiteDatabase {
  static getSQLite() {
    return SQLite;
  }
}

module.exports = SQLiteDatabase;