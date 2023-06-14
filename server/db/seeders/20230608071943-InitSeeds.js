/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
          title: ' В нашей солнечной есть девять признанных планет?',
          answer: 'Нет',
          img: 'img1',
          categoryId: 1,
        },
        {
          title: 'Колибри — это самая маленькая птица в мире?',
          answer: 'Да',
          categoryId: 1,
        },
        {
          title: 'Все млекопитающие умеют летать?',
          answer: 'Нет',
          categoryId: 1,
        },
        {
          title: 'Все котята рождаются с голубыми глазами?',
          answer: 'Верно',
          img: 'https://fikiwiki.com/uploads/posts/2022-02/1644991786_3-fikiwiki-com-p-prikolnie-kartinki-pro-kotov-3.jpg',
          categoryId: 2,
        },
        {
          title: 'Динозавры вымерли из-за астероида, ударившего в Землю?',
          answer: 'Верно',
          img: 'https://potokmedia.ru/wp-content/uploads/2020/05/062c6111-0dcf-43b4-b5ed-f0ce8dc1aa22.jpeg',
          categoryId: 2,
        },
        {
          title: 'Луна является самой большой луной в Солнечной системе?',
          answer: 'Неверно',
          img: 'https://kartinkin.net/uploads/posts/2022-06/1654665189_11-kartinkin-net-p-krasivaya-luna-kartinki-12.jpg',
          categoryId: 2,
        },
        {
          title: 'Из каких овощей готовится мексиканское блюдо гуакамоле?',
          answer: 'Авокадо',
          img: 'https://cdn.lifehacker.ru/wp-content/uploads/2022/05/shutterstock_1123023320_1652692435-1280x640.jpeg',
          categoryId: 3,
        },
        {
          title: 'Какой из этих животных является ядовитым?',
          answer: 'Фугу',
          img: 'https://s9.travelask.ru/system/images/files/001/469/246/wysiwyg_jpg/fgresh.jpg?1619163310',
          categoryId: 3,
        },
        {
          title: 'Какая планета известна своими кольцами?',
          answer: 'Сатурн',
          img: 'https://w.forfun.com/fetch/0f/0f1f77c3a85360953ebfd381af8973d6.jpeg',
          categoryId: 3,
        },
        {
          title: 'Сердце креветки находится в её',
          answer: 'голове',
          img: 'https://elenaportnova.ru/wp-content/uploads/2/9/0/29084cb417afd8f49919a8e1c0c91293.jpeg',
          categoryId: 4,
        },
        {
          title: 'Какой газ используется для пожаротушения?',
          answer: 'углекислый',
          img: 'https://ketokotleta.ru/wp-content/uploads/5/c/f/5cf4024c314292bb2cd6d4f726fd5b7d.jpeg',
          categoryId: 4,
        },
        {
          title: 'Какой насекомое является самым большим?',
          answer: 'геркулес',
          img: 'https://whatsthatbug.com/wp-content/uploads/2012/12/rhinoceros_beetle_paraguay_freddy.jpg',
          categoryId: 4,
        },
        {},
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Options',
      [
        {
          title: 'Цуккини',
          questionId: 7,
        },
        {
          title: 'Стручковая фасоль',
          questionId: 7,
        },
        {
          title: 'Тыква',
          questionId: 7,
        },
        {
          title: 'Авокадо',
          questionId: 7,
        },
        {
          title: 'Кабан',
          questionId: 8,
        },
        {
          title: 'Пчела',
          questionId: 8,
        },
        {
          title: 'Фугу',
          questionId: 8,
        },
        {
          title: 'Пингвин',
          questionId: 8,
        },
        {
          title: 'Марс',
          questionId: 9,
        },
        {
          title: 'Сатурн',
          questionId: 9,
        },
        {
          title: 'Юпитер',
          questionId: 9,
        },
        {
          title: 'Венера',
          questionId: 9,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Questions', null, {});
    await queryInterface.bulkDelete('Options', null, {});
  },
};
