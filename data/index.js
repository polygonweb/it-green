module.exports = {
  js0: 'javascript:void(0)',

  username: 'Константинопольский',

  lkMenu: [
    {
      title: "Мой профиль",
      children: [
        { title: "О себе", class: "ic-about", link: "lk-profile-about.html" },
        { title: "Адрес доставки", class: "ic-address", link: "lk-profile-delivery.html" },
        { title: "Изменить пароль", class: "ic-password", link: "lk-profile-change-password.html" },
        { title: "Уведомления", class: "ic-notification", link: "lk-profile-notif.html" },
      ]
    },
    {
      title: "Контент и товары",
      children: [
        { title: "Заказы", class: "ic-orders", link: "lk-content-orders.html" },
        { title: "Продажи", class: "ic-sells", link: "lk-content-sales.html" }
      ]
    },
    {
      title: "Управление счетом",
      children: [
        { title: "Вывод средств", class: "ic-cashout", link: "lk-account-payment.html" },
        { title: "История", class: "ic-history", link: "lk-account-payment-history.html" }
      ]
    },
    {
      title: "Мои сообщения",
      children: [
        { title: "История сообщений", class: "ic-msg-history", link: "lk-my-messages-history.html", count: 3 }
      ]
    },
    {
      title: "Профиль фирмы",
      children: [
        { title: "Редактировать профиль", class: "ic-firm-profile", link: "lk-company-profile-edit.html" }
      ]
    },
    {
      title: "Заказы фирмы",
      children: [
        { title: "Заказы", class: "ic-firm-orders", link: "lk-company-orders.html" }
      ]
    },
    {
      title: "Связь с клиентом",
      children: [
        { title: "Новое сообщение", class: "ic-client-new-question", link: "lk-client-messages-new.html" },
        { title: "История сообщений", class: "ic-client-msg-history", link: "lk-client-messages-history.html" }
      ]
    },
    {
      title: "Задать вопрос администрации",
      children: [
        { title: "Новый вопрос", class: "ic-admin-new-question", link: "lk-adm-question.html" },
        { title: "История сообщения", class: "ic-admin-msg-history", link: "lk-adm-question-history.html" }
      ]
    }
  ],

  products: {
    popular: [
      {
        title: 'Кружка «Утро», белая',
        imageUrl: 'img/item1.png',
        price: '129,00 c'
      },
      {
        title: 'Футболка унисекс SPORTY 140, бирюзовая',
        imageUrl: 'img/item2.png',
        price: '465,00 c'
      },
      {
        title: 'Рамка для фотографий Gold, золотистая',
        imageUrl: 'img/item3.png',
        price: '8 247,00 c'
      },
      {
        title: 'Календарь настольный Brand, красный',
        imageUrl: 'img/item4.png',
        price: '160,00 c'
      },
      {
        title: 'Кружка «Утро», белая',
        imageUrl: 'img/item1.png',
        price: '129,00 c'
      },
      {
        title: 'Футболка унисекс SPORTY 140, бирюзовая',
        imageUrl: 'img/item2.png',
        price: '465,00 c'
      }
    ],

    stocks: [
      {
        title: 'Кружка «Утро», белая',
        imageUrl: 'img/item1.png',
        price: '129,00 c',
        isStock: true
      },
      {
        title: 'Футболка унисекс SPORTY 140, бирюзовая',
        imageUrl: 'img/item2.png',
        price: '465,00 c',
        isStock: true
      },
      {
        title: 'Рамка для фотографий Gold, золотистая',
        imageUrl: 'img/item3.png',
        price: '8 247,00 c',
        isStock: true
      },
      {
        title: 'Календарь настольный Brand, красный',
        imageUrl: 'img/item4.png',
        price: '160,00 c',
        isStock: true
      },
      {
        title: 'Кружка «Утро», белая',
        imageUrl: 'img/item1.png',
        price: '129,00 c',
        isStock: true
      },
      {
        title: 'Футболка унисекс SPORTY 140, бирюзовая',
        imageUrl: 'img/item2.png',
        price: '465,00 c',
        isStock: true
      }
    ]
  },

  innerNav: [
    {
      link: 'javascript:void(0)',
      text: 'Фотосувениры',
      children: [
        {
          link: 'javascript:void(0)',
          text: 'Кружки'
        },
        {
          link: 'javascript:void(0)',
          text: 'Футболки'
        },
        {
          link: 'javascript:void(0)',
          text: 'Тарелки'
        },
        {
          link: 'javascript:void(0)',
          text: 'Чехол на телефон'
        },
        {
          link: 'javascript:void(0)',
          text: 'Пазлы'
        },
        {
          link: 'javascript:void(0)',
          text: 'Подушки'
        }
      ]
    },
    {
      link: 'javascript:void(0)',
      text: 'Фоторамки'
    },
    {
      link: 'javascript:void(0)',
      text: 'Фотошаблоны'
    },
    {
      link: 'javascript:void(0)',
      text: ' Детские портфолио'
    },
    {
      link: 'javascript:void(0)',
      text: 'Календари'
    },
    {
      link: 'javascript:void(0)',
      text: 'Холсты'
    }
  ]
};
