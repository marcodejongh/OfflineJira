Package.describe({
  name: 'project.ui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'core',
    'project.ddp',
    'templating',
    'jquery'
  ]);

  api.addFiles([
    'client/router.js',
    'client/templates/issueList.html',
    'client/templates/issueView.html',
    'client/templates/noSelectedIssue.html',
    'client/templates/projectViewLayout.html'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('project.ui');
  api.addFiles('project.ui-tests.js');
});
