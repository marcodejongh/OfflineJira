// Point straight trough to FlowRouter

Core.router = FlowRouter;
Core.layout = BlazeLayout;

Core.router.route('/', {
  name: 'default',
  triggersEnter: [function(context, redirect) {
    //TODO: Add logic to check if project was setup
    redirect('/project/BADDR');
  }],
  action: function (params, queryParams) {
    console.log(queryParams);
    //Should never reach here
  }
});
