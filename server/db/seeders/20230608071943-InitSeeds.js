/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const createUser = (username, password, email, img) => ({ username, password, email, img });

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
      'Categories',
      [
        {
          title: 'Choice',
        },
        {
          title: 'Right',
        },
        {
          title: 'Select',
        },
        {
          title: 'Input',
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          title: ' В нашей солнечной есть девять призанных планет?',
          answer: 'Нет',
          img: 'img1',
          categoryId: 1,
        },
        {
          title: 'Все котята рождаются с голубыми глазами?',
          answer: 'Неверно',
          img: 'https://fikiwiki.com/uploads/posts/2022-02/1644991786_3-fikiwiki-com-p-prikolnie-kartinki-pro-kotov-3.jpg',
          categoryId: 2,
        },
        {
          title: 'Из каких овощей готовится мексиканское блюдо гуакамоле?',
          answer: 'Авокадо',
          img: 'https://cdn.lifehacker.ru/wp-content/uploads/2022/05/shutterstock_1123023320_1652692435-1280x640.jpeg',
          categoryId: 3,
        },
        {
          title: 'Сердце креветки находится в её',
          answer: 'голове',
          img: 'https://elenaportnova.ru/wp-content/uploads/2/9/0/29084cb417afd8f49919a8e1c0c91293.jpeg',
          categoryId: 4,
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Options',
      [
        {
          title: 'Цуккини',
          questionId: 3,
        },
        {
          title: 'Стручковая фасоль',
          questionId: 3,
        },
        {
          title: 'Тыква',
          questionId: 3,
        },
        {
          title: 'Авокадо',
          questionId: 3,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Questions', null, {});
    await queryInterface.bulkDelete('Options', null, {});
  },
};
