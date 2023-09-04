require("dotenv").config();
const pgConfig = {
  development: {
    client: "pg",
    connection: {
      //TODO: jalar desde local ENV
      host: "dpg-cjeftr6nk9qs73afm0h0-a.oregon-postgres.render.com",
      user: "priset",
      password: "2An6ofiqG2e1i8PFZdKkDxd7ddkgdmIh",
      database: "auxiliatron_zclt",
      ssl: { rejectUnauthorized: true },
    },
    migrations: {
      directory: '../db/migrations'
    },
  },
};

module.exports = pgConfig;
