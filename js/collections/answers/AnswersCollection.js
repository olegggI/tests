define([
  'underscore',
  'backbone',
  'models/answer/AnswerModel'
], function(_, Backbone, AnswerModel){

  var AnswersCollection = Backbone.Collection.extend({
      
      model: AnswerModel,

      initialize : function(id, models, options) {
        this.url = "/js/data/" + id + "/answers.json";
      }    
     
  });

  return AnswersCollection;

});