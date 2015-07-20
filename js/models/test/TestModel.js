define([
  'underscore',
  'backbone',
  'collections/questions/QuestionsCollection',
  'collections/answers/AnswersCollection'
], function(_, Backbone, QuestionsCollection, AnswersCollection) {

	var TestModel = Backbone.Model.extend({
	  	initialize: function(testId) {
	  		var questions = new QuestionsCollection(testId).fetch(),
	  			answers = new AnswersCollection(testId).fetch({
	  				success: function(){
	  					debugger;
	  				},
	  				error: function(){
	  					debugger;
	  				}
	  			});
			
			this.on('change:answers', function(){
				console.log(this.get('answers'));
			}, this);

	  		this.url = "/js/data/" + testId + "/test.json";
 			this.fetch()
 				

 			this.set('questions', questions);
 			this.set('answers', answers);
			this.trigger('datacatch');
	  	}
	});

	return TestModel;
});
