module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('People', [{
      NicName: 'pepe',
      direccion: 'cll4 n68',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};