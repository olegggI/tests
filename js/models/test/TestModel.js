define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var TestModel = Backbone.Model.extend({

  	initialize: function(testId) {
  		var that = this;
  		setTimeout(function(){
  			that.data = {
			  "questions": [
			    {
			      "question1": {
			        "varian1": 10,
			        "varian2":20,
			        "variant3":30
			      }
			    },
			    {
			      "question2": {
			        "varian1": 10,
			        "varian2":20,
			        "variant3":30
			      }
			    },
			    {
			      "question3": {
			        "varian1": 10,
			        "varian2":20,
			        "variant3":30
			      }
			    }
			  ],
			  "ansewrs": {
			    "result1" : 20,
			    "result2" : 50,
			    "result4" : 120
			  }
			};
			that.trigger('datacatch');

  		}, 200)
  	}

  });

  return TestModel;

});
