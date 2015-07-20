define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var AnswerModel = Backbone.Model.extend({

  	defaults : {
  		name : 'name1',
  		values : 50
  	}

  });

  return AnswerModel;

});
