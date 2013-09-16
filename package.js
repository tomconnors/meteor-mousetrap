Package.describe({
  summary: "mousetrap packged for meteor"
});

Package.on_use(function (api) {

  api.add_files([
    'mousetrap/mousetrap.js',
    'post.js'
    ], ['client']
  );

  api.export(["Mousetrap"], ["client"]);
  
});
