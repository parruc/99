Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});

Template.game.helpers({
    rows: function () {
        return Rows.find();
    }
});
