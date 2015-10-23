Session.set("counter", 0);
Session.set("position", undefined);
Session.set("dead", false);

function nodDead(){ Session.set("dead", false); return false}

Template.cell.helpers({
    isButton: function () {
        return this.value == undefined;
    },
    isDisabled: function () {
        position = Session.get("position");
        if(position == undefined) return nodDead();
        //horizzontal 2 spaces move
        if(position.row == this.row && Math.abs(position.col-this.col) == 3) return nodDead();
        //vertical 2 spaces move
        if(position.col == this.col && Math.abs(position.row-this.row) == 3) return nodDead();
        //diagonal 1 space move
        if(Math.abs(position.row-this.row) == 2 && Math.abs(position.col-this.col) == 2) return nodDead();
        return true;
    },
    isSelected: function(){
        position = Session.get("position");
        return position.row == this.row && position.col == this.col
    }
});

Template.cell.events({
    'click button': function(evt){
        counter = Session.get("counter");
        if(counter == 0) Session.set("startTime", new Date().getTime());
        Cells.update(this._id, {$set: {value:counter}});
        Session.set("counter", counter+1)
        Session.set("position", {row:this.row, col:this.col});
        Session.set("dead", true);
        Tracker.afterFlush(function() {
            dead = Session.get("dead");
            counter = Session.get("counter");
            if(dead && counter)
            {
                endTime = new Date().getTime();
                startTime = Session.get("startTime");
                elapsedTime = (endTime - startTime)/60;
                Meteor.call("addResult", {user:"pippo", counter: counter, time:elapsedTime});
                $('#resultsModal').modal('show');
            }
        });
    }
});
