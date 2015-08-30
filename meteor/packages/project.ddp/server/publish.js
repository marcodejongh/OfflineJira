/* global projectPublish:true*/

projectPublish = {
  'project/issues': function () {

    this.onStop(function () {
      //Stop hammering
    });
  },
  'project/project': function (projectId) {
    var project = Project.findOne(projectId);

    console.log('startTailing');
    Core.mediator.publish('startTailingProject', project.key, project.provider);

    this.onStop(function () {
      //Stop hammering
      console.log('Stopped');
      Core.mediator.publish('stopTailingProject', project.key, project.provider);
    });
  }
};
