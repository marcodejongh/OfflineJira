var projectRoutes = Core.router.group({
  prefix: '/project',
  name: 'project',
  triggersEnter: [function(context, redirect) {
    console.log('running group triggers');
  }]
});

projectRoutes.route('/:projectId', {
  subscriptions: function(params, queryParams) {
    console.log('!!!!!!!!!!!!!');
    this.register('project', Meteor.subscribe('project/project', params.projectId));
  },
  action: function() {
    Core.layout.render('projectViewLayout', {left: 'issueList', main: 'noSelectedIssue'});
  }
});

projectRoutes.route('/:projectId/:issueId', {
  action: function() {
    Core.layout.render('projectViewLayout', {left: 'issueList', main: 'issueView'});
  }
});
