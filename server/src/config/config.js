module.exports = {
  port: process.env.PORT || 5000,
  db: {
    database: process.env.DB_NAME || 'testdb',
    user: process.env.DB_USER || 'testdb',
    password: process.env.DB_PASS || 'Parola001',
    options: {
      dialect: 'mysql',
      host: process.env.HOST || '127.0.0.1',
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
	  }
}