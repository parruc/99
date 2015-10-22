Session.set("counter", 0)
Session.set("position", undefined)

Template.cell.helpers({
    isButton: function () {
        return this.value == undefined;
    },
    isDisabled: function () {
        position = Session.get("position");
        if(position == undefined) return false;
        //horizzontal 2 spaces move
        if(position.row == this.row && Math.abs(position.col-this.col) == 3) return false;
        //vertical 2 spaces move
        if(position.col == this.col && Math.abs(position.row-this.row) == 3) return false;
        //diagonal 1 space move
        if(Math.abs(position.row-this.row) == 2 && Math.abs(position.col-this.col) == 2) return false;
        return true;
    }
});

Template.cell.events({
    'click button': function(evt){
        counter = Session.get("counter");
        Cells.update(this._id, {$set: {value:counter}});
        Session.set("counter", counter+1)
        position = Session.set("position", {row:this.row, col:this.col});
    }
});
