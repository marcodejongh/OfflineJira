Package.describe({
  name: 'offlinejira-style',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'less',
    'twbs:bootstrap'
  ]);

  api.addFiles('meteor.less');
});
