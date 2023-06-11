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
        { title: 'Question 1', answer: 'Answer 1', img: 'img1', categoryId: 1 },
        { title: 'Question 2', answer: 'Answer 2', img: 'img2', categoryId: 1 },
        {
          title: 'Question 3',
          answer: 'Answer 3',
          img: 'https://fikiwiki.com/uploads/posts/2022-02/1644991786_3-fikiwiki-com-p-prikolnie-kartinki-pro-kotov-3.jpg',
          categoryId: 2,
        },
        {
          title: 'Question 4',
          answer: 'Answer 4',
          img: 'https://bogatyr.club/uploads/posts/2023-03/1677977432_bogatyr-club-p-keto-zavtrak-shokoladnitsa-foni-vkontakte-30.jpg',
          categoryId: 2,
        },
        {
          title: 'Question 5',
          answer: 'Answer 5',
          img: 'https://elenaportnova.ru/wp-content/uploads/2/9/0/29084cb417afd8f49919a8e1c0c91293.jpeg',
          categoryId: 3,
        },
        { title: 'Question 6', answer: 'Answer 6', img: 'img6', categoryId: 2 },
        {
          title: 'Question 7',
          answer: 'Answer 7',
          img: 'https://traveltimes.ru/wp-content/uploads/2022/08/1652226824_16-kartinkin-net-p-krasivie-kartinki-yaponii-18.jpg',
          categoryId: 3,
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Options',
      [
        {
          title: 'option 1',
          questionId: 5,
        },
        {
          title: 'option 2',
          questionId: 5,
        },
        {
          title: 'option 3',
          questionId: 5,
        },

        {
          title: 'option 1',
          questionId: 6,
        },
        {
          title: 'option 2',
          questionId: 6,
        },
        {
          title: 'option 3',
          questionId: 6,
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
