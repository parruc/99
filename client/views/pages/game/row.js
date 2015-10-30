Template.row.helpers({
    cells: function () {
       return Cells.find({row_id: this._id});
     }
});
