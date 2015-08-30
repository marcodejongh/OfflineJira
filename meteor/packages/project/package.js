Package.describe({
  name: 'project',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'mongo'
  ]);

  api.addFiles('collections/project.js');
  api.export('Project');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('project');
  api.addFiles('project-tests.js');
});
