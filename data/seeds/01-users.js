exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'John doe', password:'1234567', department: 'Lambda School'},
        {username: 'Borja Soler', password:'1234567', department: 'Lambda X'},
        {username: 'Pascal Bou', password:'1234567', department: 'Andela'}
      ]);
    });
};