;define([
  'underscore',
  'backbone',
  'models/question/QuestionModel'
], function(_, Backbone, QuestionModel){

  var QuestionsCollection = Backbone.Collection.extend({
      
      model: QuestionModel,

      initialize : function(id, models, options) {
        this.url = "/js/data/" + id + "/questions.json";
      } 
  });

  return QuestionsCollection;

});