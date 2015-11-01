Results = new Mongo.Collection('results');

Meteor.methods({
    addResult: function (params) {
        Results.insert({user: params.user.username, result: params.counter, time:params.elapsedTime});
    }
});
