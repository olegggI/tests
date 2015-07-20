define([
  'underscore',
  'backbone',
  'collections/questions/QuestionsCollection',
  'collections/answers/AnswersCollection'
], function(_, Backbone, QuestionsCollection, AnswersCollection) {

	var TestModel = Backbone.Model.extend({
	  	initialize: function(testId) {
	  		that = this;
	  		var questions = new QuestionsCollection(testId),
	  			answers = new AnswersCollection(testId);
			
			this.on('change:answers', function(){
				console.log(this.get('answers'));
			}, this);

	  		this.url = "/js/data/" + testId + "/test.json";

	  		this.fetch().then(function() {
	  			console.log("test model done"); 
	  			return questions.fetch();
	  		}).then(function(){
	  			console.log('questions done'); 
	  			that.set('questions', questions.toJSON());
	  			return answers.fetch();
	  		}).then(function(){
	  			console.log('answers done');
	  			that.set('answers', answers.toJSON());
	  			that.trigger("datacatch");
	  		});

	  	}
	});

	return TestModel;
});
