const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "admin",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "csp451",
};

function connect() {
  console.log("Connecting to database...");
  console.log(`Host: ${dbConfig.host}`);
  console.log(`Database: ${dbConfig.database}`);

  return {
    connected: true,
    message: "Database connected successfully",
  };
}

function getClient() {
  return dbConfig;
}
function query(sql) {
  console.log(`Running query: ${sql}`);

  return {
    success: true,
    rows: [],
  };
}
module.exports = {
  connect,
  getClient,
  query,
};
