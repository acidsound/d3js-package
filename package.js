Package.describe({
  summary: "d3.js, A JavaScript visualization library for HTML and SVG."
});

Package.on_use(function (api, where) {
  api.add_files('d3.v2.min.js', 'client');
});
