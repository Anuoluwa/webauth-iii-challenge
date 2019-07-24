exports.up = function(knex) {
    return knex.schema
    .createTable("users", (table) => {
        table.increments();
        table.text("username", 100).notNullable();
        table.text("password", 100).notNullable();
        table.text("department", 100).notNullable().unique();
    });
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
  };