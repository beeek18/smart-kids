/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
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
          title: 'Луна является самым большим спутником в Солнечной системе?',
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
          title: 'Где жил Чебурашка до встречи с людьми?',
          answer: 'в тропическом лесу',
          img: 'https://masterfresok.ru/upload/iblock/30b/0hyd5jynz9e1hq51bsi0xtpe7nns2eyd/fotooboi-volshebnyy-tropicheskiy-les-foto.jpg',
          categoryId: 3,
        },
        {
          title: 'Какое из этих животных является ядовитым?',
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
          img: 'https://avatars.dzeninfra.ru/get-zen_doc/4481244/pub_60736a3b62e6254e9dfd55d0_60736abb2cd56807be47abfa/scale_1200',
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
          answer: 'жук-носорог',
          img: 'https://whatsthatbug.com/wp-content/uploads/2012/12/rhinoceros_beetle_paraguay_freddy.jpg',
          categoryId: 4,
        },
        {
          title: 'Кто любил играть на гармошке?',
          answer: 'Крокодил Гена',
          img: 'https://i.ytimg.com/vi/PuZ6gJEAr4s/maxresdefault.jpg',
          categoryId: 3,
        },
        {
          title: 'Мальчика из дерева звали Буратино?',
          answer: 'Да',
          categoryId: 1,
        },
        {
          title: 'Чтобы вызвать джина, нужно ударить по лампе?',
          answer: 'Нет',
          categoryId: 1,
        },
        {
          title: 'Избушка Бабы Яги стояла на железных ножках?',
          answer: 'Неверно',
          img: 'https://drevlandia.ru/wp-content/uploads/2020/07/Izbushka-Baby-YAgi-3.jpg',
          categoryId: 2,
        },
        {
          title: 'Гадкий утенок стал лебедем?',
          answer: 'Верно',
          img: 'https://cs.pikabu.ru/post_img/big/2013/09/07/7/1378549758_1937509266.jpg',
          categoryId: 2,
        },
        {
          title: 'Как звали девочку с голубыми волосами ?',
          answer: 'Мальвина',
          img: 'https://cs14.pikabu.ru/post_img/big/2021/10/31/6/1635667932116688183.png',
          categoryId: 4,
        },
        {
          title: 'Что несла Красная Шапочка своей бабушке?',
          answer: 'Пирожки',
          img: 'https://nukadeti.ru/content/images/essence/tale/1835/884.jpg',
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
          questionId: 9,
        },
        {
          title: 'Пчела',
          questionId: 9,
        },
        {
          title: 'Фугу',
          questionId: 9,
        },
        {
          title: 'Пингвин',
          questionId: 9,
        },
        {
          title: 'Марс',
          questionId: 10,
        },
        {
          title: 'Сатурн',
          questionId: 10,
        },
        {
          title: 'Юпитер',
          questionId: 10,
        },
        {
          title: 'Венера',
          questionId: 10,
        },
        {
          title: 'в телефонной будке',
          questionId: 8,
        },
        {
          title: 'В Африке',
          questionId: 8,
        },
        {
          title: 'в тропическом лесу',
          questionId: 8,
        },
        {
          title: 'в Австралии',
          questionId: 8,
        },
        {
          title: 'Крокодил Гена',
          questionId: 14,
        },
        {
          title: 'Почтальон Печкин',
          questionId: 14,
        },
        {
          title: 'Матроскин',
          questionId: 14,
        },
        {
          title: 'Карлсон',
          questionId: 14,
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Questions', null, {});
    await queryInterface.bulkDelete('Options', null, {});
  },
};
