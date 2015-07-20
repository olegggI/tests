define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var QuestionModel = Backbone.Model.extend({

  	defaults : {
  		name : 'question1',
  		variants : ["varian1", "varian2", "variant3"],
  		values : [10, 20, 30]
  	}

  });

  return QuestionModel;

});
