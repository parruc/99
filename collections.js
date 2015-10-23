Rows = new Mongo.Collection(null);
Cells = new Mongo.Collection(null);

recreate=false;
if(Cells.find().count() != 100 || Rows.find().count() != 10){
    Cells.remove({});
    Rows.remove({});
    recreate=true;
}
if(recreate){
    for (var i = 0; i < 10; i++) {
        row_id = Rows.insert({row: i});
        for (var j = 0; j < 10; j++) {
            Cells.insert({row: i, col: j, value: undefined, row_id:row_id});
        }
    }
}

Results = new Mongo.Collection('results');

Meteor.methods({
    addResult: function (text) {
        Results.insert("aaaaa");
    }
});
