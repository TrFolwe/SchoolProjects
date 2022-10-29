class User {
  constructor() {
    this.sqlite = require("./SQLiteDatabase").getSQLite();
  }

  addUser({ username, email, password }) {
    const insert = this.sqlite.prepare(
      `INSERT INTO users (username, email, password) VALUES(?, ?, ?)`
    );
    return insert.run(username, email, password);
  }

  getUsers() {
    return this.sqlite.prepare(
      `SELECT * FROM users`
    ).get();
  }

  getUserByName(username) {
    const select = this.sqlite.prepare(
      `SELECT * FROM users WHERE username = ?`
    );
    return select.get(username);
  }

  getUserByEmail(email) {
    const select = this.sqlite.prepare(
      `SELECT * FROM users WHERE email = ?`
    );
    return select.get(email);
  }

  getUserById(id) {
    const select = this.sqlite.prepare(
      `SELECT * FROM users WHERE _id = ?`
    );
    return select.get(id);
  }
}

module.exports = User;
