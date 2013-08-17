Package.describe({
  summary: 'd3.js, A JavaScript visualization library for HTML and SVG.'
});

Package.on_use(function (api, where) {
  if(api.export){
    api.use('d3', 'client');
    api.export('d3', 'client');
  }
  api.add_files('lib/d3/d3.v2.min.js', 'client');
});
