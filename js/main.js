webix.ready(function () {
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
            }
          },
          {
            view: "label",
            label: "PrisonEvo Wiki"
          },
          {},
        ]
      },
      {
        cols: [{
            view: "sidebar",
            id: 'sidebar',
            data: [{
                id: "main",
                icon: "mdi mdi-home",
                value: "Гравная"
              },
              {
                id: "collection",
                icon: "mdi mdi-collage",
                value: "Коллекции"
              },
              {
                id: "staff",
                icon: "mdi mdi-sword",
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
                value: "Руны"
              },
              {
                id: "boss",
                icon: "mdi mdi-fire",
                value: "Боссы"
              },
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