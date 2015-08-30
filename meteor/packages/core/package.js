Package.describe({
  name: 'core',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'gfk:mediator@1.0.0',
    'kadira:flow-router@2.4.0',
    'kadira:blaze-layout'
  ]);

  api.addFiles([
    'namespace.js',
    'shared/mediator.js'
  ]);

  api.export('Core');
});

Package.onTest(function(api) {
});
