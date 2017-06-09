// Update with your config settings.
// filename: './dev.sqlite3' (for sqlite only)
module.exports = {

  development: {
    client: 'postgresql',
    connection: {'postgres://localhost/Bookstore'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {'postgres://localhost/Bookstore'
      database: 'Bookstore',
      user:     'Admin',
      password: 'Admin'
    }
  },

  production: {
    client: 'postgresql',
    connection: {'postgres://localhost/Bookstore'
      database: 'Bookstore',
      user:     'Admin',
      password: 'Admin'
    }
  }
}
