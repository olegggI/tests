define([
  'jquery',
  'underscore',
  'backbone',
  'models/test/TestModel',
  'text!templates/test/testTemplate.html'
], function($, _, Backbone, TestModel, testTemplate){

  var TestView = Backbone.View.extend({
    id: 'test',
    initialize: function(testId) {
      this.model = new TestModel(testId);
      this.listenTo(this.model, "datacatch", function() {
        this.render(this.model.data);
      });
    },
    render: function(data){
      //
    }
  });

  return TestView;
  
});
