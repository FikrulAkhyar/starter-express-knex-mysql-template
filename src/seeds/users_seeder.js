/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Michael Scott'},
    {id: 3, name: 'Dwight Schrute'}
  ]);
};
