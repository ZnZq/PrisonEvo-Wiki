webix.ready(function () {
  let collapsed = (window.localStorage.getItem('collapsed') || 'false') == 'true';

  webix.ui({
    rows: [{
        view: "toolbar",
        padding: 3,
        elements: [{
            view: "button",
            type: "icon",
            icon: "mdi mdi-menu",
            width: 37,
            align: "left",
            css: "app_button",
            click: function () {
              $$("sidebar").toggle();
              window.localStorage.setItem('collapsed', $$("sidebar").config.collapsed);
            }
          },
          {
            view: "label",
            label: "PrisonEvo Wiki"
          },
          {},
          {
            view: "button",
            type: "icon",
            icon: "mdi mdi-discord",
            width: 37,
            align: "left",
            css: "app_button",
            tooltip: "DiamondWorld Discord",
            click: function () {
              window.open("https://discord.com/invite/HZQ5zTk", "_blank");
            }
          }, {
            view: "button",
            type: "icon",
            icon: "mdi mdi-vk",
            width: 37,
            align: "left",
            css: "app_button",
            tooltip: "DiamondWorld VK Group",
            click: function () {
              window.open("https://vk.com/diamondworld", "_blank");
            }
          }, {
            view: "button",
            type: "icon",
            icon: "mdi mdi-link",
            width: 37,
            align: "left",
            css: "app_button",
            tooltip: "DiamondWorld Сайт",
            click: function () {
              window.open("http://diamondworld.pro/", "_blank");
            }
          },
          {
            width: 4
          }
        ]
      },
      {
        cols: [{
            view: "sidebar",
            id: 'sidebar',
            scroll: "auto",
            collapsed: collapsed,
            data: [{
                id: "main",
                icon: "mdi mdi-home",
                value: "Главная"
              }, {
                id: "slang",
                icon: "mdi mdi-file-word-box",
                value: "Сленг"
              },
              {
                id: "general",
                icon: "mdi mdi-airballoon",
                value: "Общее",
                data: [{
                    id: "general-booster",
                    icon: "mdi mdi-sword-cross",
                    value: "Бустер копания"
                  },
                  {
                    id: "general-luck-block",
                    icon: "mdi mdi-cube-outline",
                    value: "Лаки блок"
                  },
                  {
                    id: "general-trident",
                    icon: "mdi mdi-silverware-fork",
                    value: "Трезубец"
                  }
                ]
              }, {
                id: "level",
                icon: "mdi mdi-trending-up",
                value: "Прокачка",
                data: [{
                    id: "player_level",
                    icon: "mdi mdi-arrow-up-bold-hexagon-outline",
                    value: "Уровень"
                  },
                  {
                    id: "sword_level",
                    icon: "mdi mdi-sword",
                    value: "Меч"
                  },
                  {
                    id: "pickaxe_level",
                    icon: "mdi mdi-call-made",
                    value: "Кирка"
                  },
                  {
                    id: "shovel_level",
                    icon: "mdi mdi-silverware-spoon",
                    value: "Лопата"
                  },
                  {
                    id: "axe_level",
                    icon: "mdi mdi-tree",
                    value: "Топор"
                  },
                  {
                    id: "armor_level",
                    icon: "mdi mdi-shield-half-full",
                    value: "Броня"
                  }
                ]
              },
              {
                id: "collection",
                icon: "mdi mdi-collage",
                value: "Коллекции",
                data: [{
                    id: "collection-mobs",
                    icon: "mdi mdi-sword-cross",
                    value: "Мобы"
                  },
                  {
                    id: "collection-blocks",
                    icon: "mdi mdi-cube-outline",
                    value: "Блоки"
                  }
                ]
              },
              {
                id: "staff",
                icon: "mdi mdi-silverware-spoon",
                value: "Посохи"
              },
              {
                id: "shaft",
                icon: "mdi mdi-apps",
                value: "Шахты"
              },
              {
                id: "rune",
                icon: "mdi mdi-ring",
                value: "Руны",
                data: [{
                    id: "rune-list",
                    icon: "mdi mdi-wunderlist",
                    value: "Список рун"
                  },
                  {
                    id: "rune-library",
                    icon: "mdi mdi-book",
                    value: "Библиотека"
                  }
                ]
              }, {
                id: "boss",
                icon: "mdi mdi-fire",
                value: "Боссы"
              }
            ],
            on: {
              onAfterSelect: function (id) {
                loadPage(id);
              }
            }
          },
          {
            view: "scrollview",
            id: "scrollview",
            scroll: "y",
            style: {
              'background-color': '#EBEDF0'
            },
            body: {
              type: "space",
              cols: [{
                id: 'body',
                rows: []
              }]
            }
          }
        ]
      }
    ]
  });

  let hash = getHash('#main');

  loadPage(hash);

  $(window).on('hashchange', function () {
    let newHash = getHash('#main');
    if (newHash != hash)
      loadPage(hash = newHash);
  });
});

function getHash(defaultHash) {
  let hash = window.location.hash || defaultHash;
  return hash.substr(1);
}

function loadPage(page) {
  $$('sidebar').select(page);
  $.ajax({
    url: `pages/${page}/${page}.js`,
    dataType: 'html',
    success: function (response) {
      eval(response);
    },
    error: function () {
      webix.ui([{
        template: 'ERROR LOAD'
      }], $$('body'));
    },
    beforeSend: function () {
      window.location.hash = page;

      webix.ui([{
        template: '<div class="flex-center"><div class="loader"></div></div>'
      }], $$('body'));
    }
  });
}