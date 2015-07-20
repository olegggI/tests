define([
  'jquery',
  'underscore',
  'backbone',
  'models/test/TestModel',
  'text!templates/test/testTemplate.html'
], function($, _, Backbone, TestModel, testTemplate){

  var TestView = Backbone.View.extend({
    el: $("#page"),
    initialize: function(testId) {
      this.model = new TestModel(testId);
      this.listenTo(this.model, "data-done", function() {
        this.render(this.model.toJSON());
      });
    },
    render: function(data){
      var compiledTemplate = _.template(testTemplate);
      this.$el.html(compiledTemplate(data));
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+location.hash+'"]').parent().addClass('active');
    }
  });

  return TestView;
  
});
