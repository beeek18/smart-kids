/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const createUser = (username, password, email, img) => ({ username, password, email, img });
    const createFriendship = (subjectUserId, objectUserId) => ({ subjectUserId, objectUserId });

    await queryInterface.bulkInsert(
      'Users',
      [
        createUser('user1', 'user1', 'user1@user1', 'user1'),
        createUser('user2', 'user2', 'user2@user2', 'user2'),
        createUser('user3', 'user3', 'user3@user3', 'user3'),
        createUser('user4', 'user4', 'user4@user4', 'user4'),
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Friendships',
      [
        createFriendship(1, 2),
        createFriendship(1, 3),
        createFriendship(1, 4),
        createFriendship(2, 1),
        createFriendship(2, 3),
        createFriendship(2, 4),
        createFriendship(3, 1),
        createFriendship(3, 2),
        createFriendship(3, 4),
        createFriendship(4, 1),
        createFriendship(4, 2),
        createFriendship(4, 3),
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
